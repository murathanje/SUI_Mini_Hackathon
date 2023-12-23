"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState} from 'react';
import { Suiet } from '@suiet/suiet';
import contractABI from '../getJson/MyContract.json'

const Nav = () => {

  const [user, setUser] = useState("");
  const [userBalance, setuserBalance] = useState(0);

  const findUser = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setUser(accounts[0]);
  };

  const findBalance = async () => {
    try{

      const provider = new Suiet.providers.Web3Provider(window.ethereum);
      const contract = new Suiet.Contract(contractAddress, contractABI, provider);
      const balance = await contract.balanceOf(user);
      setuserBalance(formatEther(balance));
    }catch (e){
      
    }
  };
  const initialize = async () => {
    await findUser();
    await findBalance();
  }
  initialize();

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <section>
        <Link href="/" className='flex gap-2 items-center'>
          <Image
            src="/assets/images/bb.png"
            alt='Certificate'
            width={75}
            height={75}
            className='object-contain'
          />
          <span style={{ fontSize: 30, fontWeight: 'bold' }}>  SUI</span>
        </Link>
      </section>
      <section>
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight:'bold' }}>Account: </span> {user.substring(0,10)+"..."}</span>
        <br />
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight: 'bold' }}>Amount: </span> {userBalance+" SUI"}</span>
      </section>
    </nav>
  )
}

export default Nav;
