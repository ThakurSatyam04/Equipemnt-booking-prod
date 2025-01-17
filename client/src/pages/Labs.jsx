import React, { useEffect, useState } from 'react'
import axios from "axios"
import LabDetails from './LabDetails.jsx';
// import Navbar from "../components/Navbar.js";
import { Link } from 'react-router-dom';
import Button from "../components/Button_comp.js";
import Footer from '../components/Footer.js'
// import { APIURL } from '../env.js';
import { APIURL } from '../config.js';

const Labs = () => {

    const [data,setData] = useState([]);

    const getData = async () => {
      try{
        const {data} = await axios.get(`${APIURL}/api/labs`)
        setData(data)
        // console.log(data)
      }catch(e){
        console.log(e)
      }
    }

    useEffect(() => {
        getData();
    },[])

  return (    
    <>
    {/* <Navbar setLoginUser={setLoginUser}/>   */}
  <div className='w-full flex items-center justify-center'>
    <div className='w-11/12 flex justify-between items-center'>
        <form class="w-[300px] flex items-center m-4">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-black dark:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Lab" required/>
            </div>
            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </form>
        <div className="text-center md:text-left">
          {
            <Link to="/labForm">
              <Button btn="+ Add Labs" type="submit"/>
            </Link>
          }
        </div>
        
    </div>
  </div>
        
      <div className=' xl:grid xl:grid-cols-2'>
          {
              data.map((item) => {
                  return <LabDetails key={item.id} {...item} labId={item._id}/>
              })
          }
      </div>

      <div className='mt-6'>
        <Footer/>
      </div>
    </>
  )
}

export default Labs