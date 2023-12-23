'use client'
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { parseUnits } from '@ethersproject/units';
import React, { useEffect, useState } from 'react';
import contractABI from '../../getJson/MyContract.json'
import { hexlify, arrayify } from 'ethers';

const Home = () => {
    const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const [address, setAddress] = useState('');

    useEffect(() => {
        const getAddress = async () => {
            const signerAddress = await signer.getAddress();
            setAddress(signerAddress);
        };
        getAddress();
    }, []);

    const sendToken = async (amount) => {
        const contractAddress = '0x95e450dcd79e853821c0d3c6b9293e20f0e0d4f9';
        const privateKey = 'a4f4cf68b862abd4bd766a199727c955db517078db52c54b0bbba87373621bfe';
        // process.env.PRIVATE_KEY;

        const wallet = new ethers.Wallet(privateKey, provider);
        const contract = new ethers.Contract(contractAddress, contractABI, wallet);
        console.log(amount);
        const numberOfTokens = parseUnits(amount, 'ether');
        console.log(numberOfTokens);

        try {
            const tx = await contract.transfer(address, numberOfTokens._hex, {
                gasLimit: 1000000
            });
            console.log(tx);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                <span style={{ fontSize: 50 }}>Anadolu Sigorta</span>
                <br className="max-md:hidden" />
                <span className="blue_gradient" style={{ fontSize: 30 }}>Görevleri Tamamla ve ANDL Token Kazan</span>
            </h1>
            <button className='btn' onClick={() => sendToken("10")}>Send 10 Tokens</button>
            <button onClick={() => sendToken("15")}>Send 15 Tokens</button>
            <button onClick={() => sendToken("20")}>Send 20 Tokens</button>
        </section>
    );
};

export default Home;