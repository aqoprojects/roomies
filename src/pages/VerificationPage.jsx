import React from 'react'
import { Button1, Button4, GmailButton1 } from '../Designs/base/Buttons'
import { DropdownLine1 } from '../Designs/base/Dropdown'
import { FaUserSecret } from "react-icons/fa";
import { IFB1, InputField1 } from '../Designs/base/Inputs';

const VerificationPage = () => {
  return (
    <div className='flex flex-col h-screen bg-[#FAFBFF]'>
            <header className='flex justify-center-safe items-center-safe py-3'>
                <div className='w-25'>
                    <img src='/Logo.svg' className='w-full '/>
                </div>
            </header>
    
            <main className='flex-1 flex justify-center-safe items-center-safe'>
                <section className='w-100 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-black/10 rounded-md bg-white py-15 px-10 flex flex-col justify-center-safe gap-5'>
    
                       <div className='flex flex-col gap-5 text-center'>
                         <h2 className='font-semibold text-lg'>Enter verification code</h2>
                         <p className='text-black/60'>Code sent to [emiladdress]@gmail.com </p>
                       </div>

                        <div className='flex items-center-safe justify-center-safe gap-5'>
                            <IFB1 
                                styles={{input1: '!text-2xl'}}
                                extra={'!w-10 !h-10'}
                            />
                            <IFB1 
                                styles={{input1: '!text-2xl'}}
                                extra={'!w-10 !h-10'}
                            />
                            <IFB1 
                                styles={{input1: '!text-2xl'}}
                                extra={'!w-10 !h-10'}
                            />
                            <IFB1 
                                styles={{input1: '!text-2xl'}}
                                extra={'!w-10 !h-10'}
                            />
                        </div>

                        <div className='text-center'>
                            <p className='text-black/50'>Resend in <span className='text-black font-bold'>0:45</span> </p>
                        </div>

                        <Button1
                        showDefault={false}
                        texts={{text1: 'Verify'}}
                        extra={'w-full bg-black !font-normal text-base justify-center-safe py-2.5 my-5'}
                        />

                </section>
            </main>
        </div>
  )
}

export default VerificationPage
