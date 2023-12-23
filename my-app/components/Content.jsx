'use client'
import { Suiet } from '@suiet/suiet';
import contractABI from '../getJson/MyContract.json'




const PromtCardList = ({}) => {

  let cuzdan = 0;
  const connectWallet = async () => {
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const address = document.getElementById('address').value;

    const provider = new Suiet.providers.Web3Provider(window.ethereum);
    const contract = new Suiet.Contract(contractAddress, contractABI, provider);

    try {
      await contract.createMemoryCard(title, message, address);
    } catch (err) {
      console.log('Error: ', err);
    }
  
  };  



  return (
    <div className='mt-16 prompt_layout justify-between' style={{ width: '1000px' }}>


      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="tittle" className="block mb-2 text-sm font-medium text-gray-900" style={{ fontWeight: 'bold', color: 'black' }}>Tittle</label>
          <input type="text" id="tittle" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ fontSize: '20px' }} />        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900" style={{ fontWeight: 'bold', color: 'black' }}>Message</label>          
          <textarea id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ fontSize: '20px', height: '100px', width: '100%' }} />           </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900" style={{ fontWeight: 'bold', color: 'black' }}>To Address</label>         
          <input type="text" id="address" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ fontSize: '20px' }} />        
        </div>
        <br />
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={connectWallet}>Send</button>
      </form>
    </div>
    
  )
}

const Feed = () => {

  return (
    <section className="feed product_feed">
      <PromtCardList
      />
    </section>
  )
}

export default Feed