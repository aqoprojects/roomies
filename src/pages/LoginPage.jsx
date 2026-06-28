import React from 'react'
import { Button1, Button4, GmailButton1 } from '../Designs/base/Buttons'
import { DropdownLine1 } from '../Designs/base/Dropdown'
import { FaUserSecret } from "react-icons/fa";
import { InputField1 } from '../Designs/base/Inputs';
import { NavLink, useNavigate } from 'react-router-dom';
import { handleFeedRoute } from '../pathRoutes/GlobalRoutes';
import HeaderComponent from '../components/header/HeaderComponent';


const LoginPage = () => {
    const navigate = useNavigate()

  return (
    <div className='flex flex-col h-screen bg-white md:bg-[#FAFBFF]'>
        <HeaderComponent/>

        <main className='flex-1 flex justify-center-safe items-center-safe'>
            <section className='w-100 md:shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-black/10 rounded-md bg-white py-15 px-10'>

                    <div className='flex flex-col gap-4'>
                        <GmailButton1 
                            texts={{ text1: 'Log in with Google'}}
                            extra={'w-full justify-center-safe text-[#5D6778] '} 
                        />

                        <Button4  
                            texts={{text1: 'Enter as Guest'}}
                            icons={{icon1: FaUserSecret}} 
                            styles={{icon1: '!fill-black', text1: 'text-[#5D6778] !font-normal !text-base'}} 
                            extra={'bg-transparent ring-1 ring-[#D5D7DA] w-full justify-center-safe mb-5'}
                        />

                         <div className='flex items-center-safe '>
                        <DropdownLine1  
                            extra={'flex-1 !w-auto !bg-[#D5D7DA]'}
                        />
                        <span className='px-3'>OR</span>
                        <DropdownLine1 
                            extra={'flex-1 !w-auto !bg-[#D5D7DA]'}
                        />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <InputField1 
                            showDefault={false}
                            texts={{placeholder1: 'Email'}}
                            styles={{input1: 'w-full px-2 !text-base !font-normal'}}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />
                        
                        <InputField1 
                            showDefault={false}
                            texts={{placeholder1: 'Password'}}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                            styles={{input1: 'w-full px-2 !text-base !font-normal'}}
                        />

                        <p className='text-sm font-medium text-[#5D6778] flex justify-end-safe'>Forget Password?</p>
                    </div>

                    <Button1
                        showDefault={false}
                        texts={{text1: 'Login'}}
                        extra={'w-full bg-black !font-normal text-sm justify-center-safe py-3 my-9'}
                        onClick={()=> handleFeedRoute(navigate)}
                    />

                    <p className='text-center text-[#5D6778]'>Don't have an account? <NavLink to={'/signup'} className='text-black/50 font-semibold'>Sign up</NavLink></p>

            </section>
        </main>
    </div>
  )
}

export default LoginPage
