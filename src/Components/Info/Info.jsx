import React, { useContext, useEffect, useState } from 'react'
// import { useDispatch  , useSelector} from 'react-redux'
import { MenuProvider } from '../Container/Container'
import Inputs from './Inputs'
import { useSelector , useDispatch } from 'react-redux'
import { AddContactInfo } from '../../StateManagment/UserInfoSlice'

  let inputs = [
    {
      
      Name : 'Name' ,
      ErrorState : false , 
      ErrorMessage : "This field is required" ,
      attributes : {
         id : "1" , 
         placeholder : 'e.g Stephen King'
      }
    } ,
    {
      Name : 'Email Adress' ,
      ErrorState : false,
      ErrorMessage : "This field is required" ,
      attributes : {
         id : "2" , 
         placeholder : 'e.g ktephenking@loerm.com'
      }
    } ,
    {
      Name : 'Phone Number' ,
      ErrorState : false,
      ErrorMessage : "This field is required" , 
      attributes : {
         id : "3" , 
         placeholder : 'e.g +1 234 567 890'
      }
    } ,
  ]

export default function Info(props) {
   
  const [InputData , setInputData] = useState(inputs) 
  const setScrolledIndex = useContext(MenuProvider);
  const state = useSelector((state) => state.user);
  const [MoveNext , setMoveNext] = useState(false)
  const dispatch = useDispatch();
  const [count , setCount] = useState(0)
  
  const Next = ()=> {
    
    const errorState = []
    InputData.map(input=>{
      if(input.ErrorState ){
        errorState.push(true)
      }})

     if(!errorState.includes(true)){
      const inputValues = []
   
      inputs.map(input =>{
        const InputValue = document.getElementById(input.attributes.id).value ;
        inputValues.push(InputValue)
      }) 
  
      const values = { 
        Name  : inputValues[0] , 
        Email : inputValues[0] , 
        PhoneNumber : inputValues[0]
      };
  
      dispatch(AddContactInfo(values));
      setCount(prev=>prev+1)
      setScrolledIndex(prev => prev +  1)
      setMoveNext(true)
     } 
     else{
       setMoveNext(false)
       setCount(prev => prev + 1)
     }
  }

  useEffect(()=> {
    if(count != 0){
      Next()
    }
  } , [InputData])

  // useEffect(()=> {
  //   if(MoveNext){
  //     console.log(InputData)
  //   }
  // } , [MoveNext])


      
  const handleNext = ()=>{

    setInputData(prev => {
      const newInputs = prev.map(Input => {
        let i = document.getElementById(Input.attributes.id)
        if(i.value.trim() == ""){
          return { ...Input , ErrorState : true }
        }
        return { ...Input , ErrorState : false }
      })
       return newInputs
    });

    setCount(prev => prev +1)

  } 


  return (
    <div  id='Info' className='py-10 px-8 lg:px-20 relative h-full pb-20 lg:pb-20  '>
       <div className='flex flex-col gap-y-2 mb-6'>     
        <h1 className='text-4xl font-bold text-Marineblue '>Personal info</h1>
        <p className='text-Coolgray'>Please provide your name , email address , and phone number</p> 
       </div>
          
          
       {
         InputData.map(Input => {
            return <Inputs key={Input.attributes.id}  values={{...Input}} attributes={{...Input.attributes}}/>
         })
       }

                
             
        <div className='w-full absolute bottom-0 right-0 flex justify-end items-center px-8 lg:px-20  '>
         <button className='w-28 h-12 rounded-lg bg-Marineblue text-white font-bold' onClick={()=>handleNext()}>Next</button>
        </div>
   </div>
  )
}
