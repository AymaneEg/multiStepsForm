import React from 'react'
import ThankYou from './icon-thank-you.svg'

export default function Thanks() {
  return (
    <div id='Thanks' className='py-10 px-20 pb-56  relative h-full flex flex-col justify-center items-center gap-y-6'>
            <img src={ThankYou} alt="" />
            <div className='h-12 text-center felx flex-col gap-y-6'>
                <h1 className='text-4xl font-bold text-Marineblue'>Thank you!</h1>
                <div className='  max-w-fit'> 
                <p className='w-96 mt-4'>Thanks for confirming your subscribtion! We hope you have fun using our 
                    platform. if you ever need support, please feel free to email us at  
                    <a href="/"> support@loremgaming.com</a> </p>
                </div>
               
            </div>
           
    </div>
  )
}
 