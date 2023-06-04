import React, { useEffect, useState } from 'react'
import { MenuProvider } from '../Container/Container'
import { useDispatch  , useSelector} from 'react-redux'
import { AddOns  , RemoveOns} from '../../StateManagment/UserInfoSlice';
import { useContext } from 'react';

let Odds = {
  Onlineservice : {
     Level : "Online service" ,
     Price : 10 ,
     selected : false
   },
    LargeStorage : {
      Level : "Large storage" ,
     Price : 20 ,
     selected : false
   },
   CustomizableProfile : {
    Level : "Customizable profile" ,
     Price : 20 ,
     selected : false
   }
}

export default function Ons() {
  const setScrolledIndex = useContext(MenuProvider);
  const user = useSelector( (state) => state.user)
  const [selectedOns , setSelectedOns] = useState([]);
  const dispatch = useDispatch();
  const [update , setUpdate] = useState(false);

  const handleChange = (odd , id)=>{
    const checkbox = document.getElementById(id)
    switch(odd){
      case Odds.Onlineservice : 
      if(checkbox.checked){
          setSelectedOns(prev =>{return [...prev , 0]})
          Odds = {
            ...Odds ,
              Onlineservice : {
              ...Odds.Onlineservice , 
              selected : true ,
              Price : user.Plan.Paiment == "Yearly" ? 10 : 1
            }
          } 
          setUpdate(prev => !prev)
        }
        else{
          setSelectedOns(prev => { return prev.splice(prev.indexOf(0) , 1)})
          Odds = {
            ...Odds ,
              Onlineservice : {
              ...Odds.Onlineservice , 
              selected : false ,
              Price : user.Plan.Paiment == "Yearly" ? 10 : 1

            }
          } 
          dispatch(RemoveOns(Odds.Onlineservice.Level))
          setUpdate(prev => !prev)
        }
        break;
      case Odds.LargeStorage : 
      if(checkbox.checked){
        setSelectedOns(prev =>{return [...prev , 1]})
        Odds = {
          ...Odds ,
             LargeStorage : {
            ...Odds.LargeStorage , 
            selected : true ,
            Price : user.Plan.Paiment == "Yearly" ? 20 : 2

          }
        } 
      }
      else{
        setSelectedOns(prev => { return prev.splice(prev.indexOf(1) , 1)})
        Odds = {
          ...Odds ,
             LargeStorage : {
            ...Odds.LargeStorage , 
            selected : false ,
            Price : user.Plan.Paiment == "Yearly" ? 20 : 2

          }
        } 
      }
      break;
      case Odds.CustomizableProfile : 
      if(checkbox.checked){
        setSelectedOns(prev =>{return [...prev , 2]})
        Odds = {
          ...Odds ,
          CustomizableProfile : {
            ...Odds.CustomizableProfile , 
            selected : true ,
            Price : user.Plan.Paiment == "Yearly" ? 20 : 2

          }
        } 
      }
      else{
        setSelectedOns(prev => { return prev.splice(prev.indexOf(2) , 1)})
        Odds = {
          ...Odds ,
          CustomizableProfile : {
            ...Odds.CustomizableProfile , 
            selected : false ,
            Price : user.Plan.Paiment == "Yearly" ? 20 : 2

          }
        } 
      }
      break;
    }
  }


  const handleNext = ()=> {
     
    const odds = Object.keys(Odds)
    
    odds.map(odd => {
      if(Odds[odd].selected){
        const OldOns = []
        user.Odds.map(ons =>{
          OldOns.push(ons.Level);
        })

        if(!OldOns.includes(Odds[odd].Level)){
          dispatch(AddOns(Odds[odd]))
        }
        
      }
    })
   
    setScrolledIndex(prev => prev + 1 )
  }
    

  return (
    <div id='Ons' className=' py-10 pb-20 px-8 md:px-8 lg:px-10 relative h-full  '>
       <div className='flex flex-col gap-y-2 mb-6'>     
          <h1 className='text-4xl font-bold text-Marineblue '>Pick add-ons</h1>
          <p className='text-Coolgray'>Add-ons help enhance your gaming experience</p> 
       </div>  

       <div className='w-full flex flex-col gap-y-4 '>

           <div className={selectedOns.includes(0)? "Ons active" : 'Ons ' }>
              <div className='flex items-center gap-x-8'>
                <input type="checkbox" className='CheckOns' name="" id="Onlineservice"  onChange={ e => handleChange(Odds.Onlineservice , "Onlineservice") } />
                  <div>
                     <h1 className='text-Marineblue font-bold'>Online service</h1>
                     <p className='text-Coolgray'>Access to multiplayer games </p>
                  </div> 
              </div>
            <p className='text-Purplishblue'>+${ user.Plan.Paiment == "Yearly" ? '10' : '1'}/{ user.Plan.Paiment == "Yearly" ? 'yr' : 'mo'}</p> 
           </div>

           <div className={selectedOns.includes(1) ? "Ons active" : 'Ons ' }>
              <div className='flex items-center gap-x-8'>
                <input type="checkbox" className='CheckOns' name="" id="LargeStorage" onChange={ ()=> handleChange(Odds.LargeStorage , 'LargeStorage') }/>
                  <div>
                     <h1 className='text-Marineblue font-bold'>Large storage</h1>
                     <p className='text-Coolgray'>Extra 1TB of could save </p>
                  </div> 
              </div>
            <p className='text-Purplishblue'>+${ user.Plan.Paiment == "Yearly" ? '20' : '2'}/{ user.Plan.Paiment == "Yearly" ? 'yr' : 'mo'}</p> 
           </div>

           <div className={selectedOns.includes(2) ? "Ons active" : 'Ons '}>
              <div className='flex items-center gap-x-8'>
                <input type="checkbox" className='CheckOns' name="" id="CustomizableProfile" onChange={ ()=> handleChange(Odds.CustomizableProfile , "CustomizableProfile") }/>
                  <div>
                     <h1 className='text-Marineblue font-bold'>Customizable profile</h1>
                     <p className='text-Coolgray'>Custom theme on your profile</p>
                  </div> 
              </div>
            <p className='text-Purplishblue'>+${ user.Plan.Paiment == "Yearly" ? '20' : '2'}/{ user.Plan.Paiment == "Yearly" ? 'yr' : 'mo'}</p> 
           </div>

       </div>

       <div className=' w-full absolute bottom-0 right-0 flex justify-between items-center  px-8 lg:px-10  '>
             <span className='text-Coolgray cursor-pointer font-semibold text-xl hover:text-Marineblue' onClick={()=> setScrolledIndex(prev => prev - 1 )}>Go Back</span>
             <button className='w-28 h-12 rounded-lg bg-Marineblue text-white font-bold' onClick={()=> handleNext() }>Next</button>
        </div>

    </div>
  )
}
