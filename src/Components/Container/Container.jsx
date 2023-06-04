import React, { useEffect, useState } from 'react'

import Ons from '../Add-Ons/Ons'
import FinishUp from '../FinishUp/FinishUp'
import Thanks from '../FinishUp/Thanks'
import Info from '../Info/Info'
import Plan from '../Plan/Plan'
export const MenuProvider = React.createContext();

export default function Container() {


    
    const [scrolledIdex , setScrolledIdex] = useState(0);

    const MenuItem= [
        {
            id : "0" , 
            Name : "Info"
        } , 
        {
            id : "1" , 
            Name : "Plan"
        } , 
        {
            id : "2" , 
            Name : "Ons"
        } , 
        {
            id : "3" , 
            Name : "Summary"
        } , 
        {
            id : "4" , 
            Name : "Thanks"
        } , 
        
        
    ]


    useEffect(()=> {
        document.getElementById(MenuItem[scrolledIdex].Name).scrollIntoView();
    } , [scrolledIdex])


  return (
    <div className='Container'>
       <div className='SideBar'>
          <ul className='MenuItems'>
            <li >
                <div className={scrolledIdex == 0 ? "active" : " "}>
                    <h1>1</h1>
                </div>
                <div className='text-white'>
                    <p className='text-sm'>STEP 1</p>
                    <h1 className='font-bold text-lg'>YOUR INFO</h1>
                </div>
            </li>
            <li >
                <div className={scrolledIdex == 1 ? "active" : " "}>
                    <h1>2</h1>
                </div>
                <div className='text-white'>
                    <p className='text-sm'>STEP 2</p>
                    <h1 className='font-bold text-lg'>SELECT PLAN</h1>
                </div>
            </li>
            <li >
                <div className={scrolledIdex == 2 ? "active" : " "}>
                    <h1>3</h1>
                </div>
                <div className='text-white'>
                    <p className='text-sm'>STEP 3</p>
                    <h1 className='font-bold text-lg'>ADD-ONS</h1>
                </div>
            </li>
            <li >
                <div className={scrolledIdex == 3 ? "active" : " "}>
                    <h1>4</h1>
                </div>
                <div className='text-white'>
                    <p className='text-sm'>STEP 4</p>
                    <h1 className='font-bold text-lg'>SUMMARY</h1>
                </div>
            </li>
          </ul>
       </div> 

       <div className='Info'>
          <MenuProvider.Provider value={setScrolledIdex}>
            <Info />
            <Plan />
            <Ons />
            <FinishUp />
            <Thanks />
          </MenuProvider.Provider>
       </div>
    </div>
  )
}
