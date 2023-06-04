import React from 'react'


export default function Inputs(props) {
  return (
    <div>
      {/* <div className='leading-10'> 
            <div className='flex justify-between'> 
               <p>Name</p> 
               <p className='text-red-500 font-bold' style={{display : inputs[0].ErrorState ? "flex" : "none"}}>
                  {inputs[0].ErrorMessage}
               </p>
            </div>
            <Input id={inputs[0].id} placeholder='e.g. Stephen King' className={inputs[0].ErrorState ? "Input required" : "Input"} required  ></Input>
      </div> */} 

        <div className='leading-10'> 
            <div className='flex justify-between'> 
               <p className='font-bold text-Marineblue'>  {props.values.Name}</p> 
               <p className='text-red-500 font-bold'  style={{display : props.values.ErrorState ? "flex" : "none"}} >
                {props.values.ErrorMessage}
               </p>
            </div>
            <input type="text" 
             {...props.attributes}  required className={props.values.ErrorState ? "Input required" : "Input"} />
      </div>
    </div>
  )
}
