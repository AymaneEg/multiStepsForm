import React, { useEffect, useState } from 'react'
import advanced from "./Icons/icon-advanced.svg"
import arcade from "./Icons/icon-arcade.svg"
import pro from "./Icons/icon-pro.svg"
import { MenuProvider } from '../Container/Container'
import { useContext } from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import { AddPlan } from '../../StateManagment/UserInfoSlice'


const Plans = {
   Arcade : {
     level : "Arcade" , 
     Price : {
      yr : 90 , 
      mo : 9 
     }
   },
   Advanced : {
     level : "Advanced" , 
     Price : {
      yr : 120 , 
      mo : 12 
     }
   },
   Pro : {
     level : "Pro" , 
     Price : {
      yr : 150 , 
      mo : 15 
     }
   },
}

export default function Plan() {

    const setScrolledIndex = useContext(MenuProvider);
    const [selectedPlan , setSelectedPlan] = useState(Plans.Arcade) 
    const [checked , setChecked] = useState(false)
    const [update , setUpdate] = useState(false)
    const dispatch = useDispatch();

    const handleChange = ()=>{
      setChecked(prev => !prev);
      setUpdate(false)
    }

    const handleClick = ()=>{

      const values = {
        Level : selectedPlan.level ,
        Price : checked ? selectedPlan.Price.yr : selectedPlan.Price.mo  ,
        Paiment : checked ? "Yearly" : "Monthly"
      }
  
      dispatch(AddPlan(values))
      setUpdate(true)
    }
    
    useEffect(()=>{
      if(update){
        setScrolledIndex(prev => prev + 1 )
      }
    } , [update])

  return (
    <div id='Plan' className='w-full  py-4 lg:py-10 px-8  relative h-full  '>
       <div className='flex flex-col gap-y-2 mb-6'>     
          <h1 className='text-4xl font-bold text-Marineblue '>Select your plan</h1>
          <p className='text-Coolgray'>You have the option of monthly or yearly billing</p> 
       </div> 

       <div className='flex flex-col lg:flex-row justify-between gap-4'>
          <div className={selectedPlan == Plans.Arcade  ?'Card Focus': 'Card'} onClick={()=> setSelectedPlan(Plans.Arcade)}> 
            <img src={arcade} alt="" className='w-12 h-12' />
            <div>
                <h1 className='text-Marineblue font-bold'>Arcade</h1>
                <p className='text-Coolgray'>{`$${checked ? Plans.Arcade.Price.yr :  Plans.Arcade.Price.mo }/${checked ? "yr":  'mo' }`} </p>
                <p className='text-Marineblue font-semibold hidden lg:block'>2 months free</p>
            </div>
          </div>
          <div className={selectedPlan == Plans.Advanced  ?'Card Focus': 'Card'} onClick={()=> setSelectedPlan(Plans.Advanced)}> 
            <img src={advanced} alt="" className='w-12 h-12' />
            <div>
                <h1 className='text-Marineblue font-bold'>Advanced</h1>
                <p className='text-Coolgray'>{`$${checked ? Plans.Advanced.Price.yr :Plans.Advanced.Price.mo }/${checked ? "yr":  'mo' }`}</p>
                <p className='text-Marineblue font-semibold hidden lg:block'>2 months free</p>
            </div>
          </div>
          <div className={selectedPlan == Plans.Pro  ?'Card Focus': 'Card'} onClick={()=> setSelectedPlan(Plans.Pro)}> 
            <img src={pro} alt="" className='w-12 h-12' />
            <div>
                <h1 className='text-Marineblue font-bold'>Pro</h1>
                <p className='text-Coolgray'>{`$${checked ? Plans.Pro.Price.yr : Plans.Pro.Price.mo }/${checked ? "yr":  'mo' }`}</p>
                <p className='text-Marineblue font-semibold hidden lg:block'>2 months free</p>
            </div>
          </div>
       </div> 

       <div className='w-full my-8 h-14 rounded-lg bg-Magnolia flex justify-center items-center gap-8'>
           <h1>Monthly</h1>
           <div className='relative w-8'> 
              <input type="checkbox" id='CheckBox' className='toggle' onChange={() => handleChange()}/>
              <label htmlFor="CheckBox"></label>
           </div>
           <h1>Yearly</h1>
       </div>
  
       <div className='w-full  px-8 flex justify-between items-center  lg:px-0  '>
             <span className='text-Coolgray cursor-pointer font-semibold text-xl hover:text-Marineblue' onClick={()=> setScrolledIndex(prev => prev - 1 )}>Go Back</span>
             <button className='w-28 h-12 rounded-lg bg-Marineblue text-white font-bold' onClick={()=> handleClick()}>Next</button>
        </div>

    </div> 


  )
}
