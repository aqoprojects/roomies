import React from 'react'
import { Button1, Button4, GmailButton1 } from '../Designs/base/Buttons'
import { DropdownLine1 } from '../Designs/base/Dropdown'
import { FaUserSecret } from "react-icons/fa";
import { InputField1 } from '../Designs/base/Inputs';


const ForgetpasswordPage = () => {
    return (
        <div className='flex flex-col h-screen bg-[#FAFBFF]'>
            <header className='flex justify-center-safe items-center-safe py-3'>
                <div className='w-25'>
                    <img src='/Logo.svg' className='w-full ' />
                </div>
            </header>

            <main className='flex-1 flex justify-center-safe items-center-safe'>
                <section className='w-100 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-black/10 rounded-md bg-white py-15 px-10'>

                    <div className='flex flex-col gap-5 text-center mb-8'>
                        <h2 className='font-semibold text-lg'>Forget Password</h2>
                        <p className='text-black/60'>Enter your email to reset password and access your account.</p>
                    </div>


                    <div className='flex flex-col gap-2'>
                        <InputField1
                            showDefault={false}
                            texts={{placeholder1: 'Email'}}
                            styles={{ input1: 'w-full px-2 !text-base !font-normal' }}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />

                    </div>

                    <Button1
                        showDefault={false}
                        texts={{text1: 'Send reset link'}}
                        extra={'w-full bg-black !font-normal text-sm justify-center-safe py-3 my-5'}
                    />


                </section>
            </main>
        </div>
    )
}

export default ForgetpasswordPage
