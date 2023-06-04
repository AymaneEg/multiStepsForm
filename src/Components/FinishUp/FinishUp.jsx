import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { MenuProvider } from '../Container/Container'
import { useSelector } from 'react-redux';

export default function FinishUp() {

   const setScrolledIndex = useContext(MenuProvider);
   const user = useSelector((state) => state.user);
   let Total = 0 ;

   const handleConfirm = ()=>{
      setScrolledIndex(4)
   }
 


  return (
    <div  id='Summary' className='py-10 px-4 lg:px-20 relative h-full pb-16'>
       <div className='flex flex-col gap-y-2 mb-6'>     
          <h1 className='text-4xl font-bold text-Marineblue '>Finishing up</h1>
          <p className='text-Coolgray'>Double-check everything looks Ok before confirming</p> 
       </div>


       <div className='w-full bg-Magnolia p-4 rounded-lg'>
          <div className='w-full border-b flex justify-between items-center py-4'>
             <div>
                <h1 className='font-bold text-Marineblue'>{`${user.Plan.Level} (${user.Plan.Paiment})`}</h1>
                <p className='text-Coolgray decoration-solid decoration-Coolgray decoration-2'>Change</p>
             </div> 
             <h1 className='font-bold text-Marineblue'>${`${user.Plan.Price}`}/{user.Plan.Paiment == "Yearly" ? "yr" : "mo" }</h1>
          </div>
          <div>
            <ul className='w-full flex flex-col gap-y-4 py-4'>
               {
                  user.Odds.map( odd =>{
                     Total +=  parseInt(odd.Price)
                     return ( 
                        <li className='flex justify-between' key={odd.Level}>
                           <h1 className='text-Coolgray'>{odd.Level}</h1>
                           <h1 className='text-Marineblue'>+${odd.Price}/{odd.Paiment == "Yearly" ? "yr" : "mo" }</h1>
                        </li>
                     )
                  })
               }
               
              
            </ul>
          </div>
       </div> 

       <div className='w-full flex justify-between p-4'>
          <h1 className='text-Coolgray'>Total({user.Plan.Paiment == "Yearly" ? "Per year" : "Per month" })</h1>
          <h1 className='text-xl font-bold text-Purplishblue'> 
          {user.Plan.Price + Total}$
          /{user.Plan.Paiment == "Yearly" ? "yr" : "mo" }
          </h1>
       </div> 
 
       <div className='w-full absolute bottom-0 right-0 flex justify-between items-center px-8 pt-16 lg:px-20  '>
             <span className='text-Coolgray cursor-pointer font-semibold text-xl hover:text-Marineblue'  onClick={()=>setScrolledIndex(prev => prev - 1)}>Go Back</span>
             <button className='w-28 h-12 rounded-lg bg-Purplishblue text-white font-bold' onClick={()=> handleConfirm()}>Confirm</button>
        </div>

    </div>
  )
}
