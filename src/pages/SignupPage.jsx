import React, { useActionState } from 'react'
import { Button1, Button4, GmailButton1 } from '../Designs/base/Buttons'
import { DropdownLine1, DropdownListItem5 } from '../Designs/base/Dropdown'
import { FaUserSecret } from "react-icons/fa";
import { InputField1 } from '../Designs/base/Inputs';
import { userRegisterApi } from '../api/Auth';
import Validator from '../Validators/FormValidator'
import { NavLink, useNavigate } from 'react-router-dom';
import { handleVerificationRoute } from '../pathRoutes/AuthRoutes';
import HeaderComponent from '../components/header/HeaderComponent';


const SignupPage = () => {
    const navigate = useNavigate()


    async function registerUser(prevState, formData) {
        const fullname = formData.get('fullname');
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const validator = new Validator();
        const userInfo = {username, email, password}
        try {
            const userData = validator.validate(userInfo)
            if (userData.errors) return { success: false, user: userInfo, error: userData.errors }

            const response = await userRegisterApi.post('/auth/register', userData)
            const user = await response.data
            return { success: true, user, error: null }
        } catch (err) {
            return {
                success: false,
                user: null,
                error:  "Somthing went wrong"
            };
        }
    }

    const [state, formAction, isPending] = useActionState(
        registerUser,
        { success: null, user: null, error: null }
    )
    return (
        <div className='flex flex-col gap-10 h-screen bg-white md:bg-[#FAFBFF]'>
            <HeaderComponent/>

            <main className='flex-1 flex justify-center-safe items-center-safe'>
                <section className='w-105 md:shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-black/10 rounded-md bg-white py-15 px-10'>

                    <div className='flex flex-col gap-4'>
                        <GmailButton1 
                            texts={{text1: 'Sign up with Google'}} 
                            extra={'w-full justify-center-safe text-[#5D6778]'} 
                        />

                        <Button4
                            texts={{text1: 'Enter as Guest'}}
                            icons={{icon1: FaUserSecret}}
                            styles={{ icon1: '!fill-black', 
                                      text1: '!text-[#5D6778] !font-normal !text-base'
                                    }}
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

                    <form action={formAction} className='flex flex-col gap-2 mt-8'>
                        <InputField1
                            showDefault={false}
                            texts={{text2: state.error?.name, placeholder1: 'Name'}}
                            inputProps={{
                                name: 'fullname',
                                type: 'text',
                                defaultValue: state.user?.name          
                            }}
                            styles={{ 
                                input1: 'w-full px-2 !text-base !font-normal', 
                                text2: '!text-red-800' 
                            }}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />

                        <InputField1
                            showDefault={false}
                            texts={{
                                text2: state.error?.email, 
                                placeholder1: 'Email'
                            }}
                            inputProps={{
                                name: 'email',
                                type: 'email',
                                defaultValue: state.user?.email          
                            }}
                            styles={{ 
                                input1: 'w-full px-2 !text-base !font-normal', 
                                text2: '!text-red-800' 
                            }}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />
                        
                        
                        
                        <InputField1
                            showDefault={false}
                            texts={{
                                text2: state.error?.username,
                                placeholder1: 'Username',
                            }}
                            inputProps={{
                                name: 'username',
                                type: 'text',
                                defaultValue: state.user?.username          
                            }}
                            styles={{ 
                                input1: 'w-full px-2 !text-base !font-normal', 
                                text2: '!text-red-800' 
                            }}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />

                        
                        <InputField1
                            showDefault={false}
                            texts={{
                                text2: state.error?.password, 
                                placeholder1: 'Password',
                            }}
                            inputProps={{
                                name: 'password',
                                type: 'password',
                                defaultValue: state.user?.password          
                            }}
                            styles={{ 
                                input1: 'w-full px-2 !text-base !font-normal', 
                                text2: '!text-red-800' 
                            }}
                            extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                        />
                        


                        <DropdownListItem5
                            showDefault={false}
                            texts={{text1: 'I agree to the termms and privacy policy.'}}
                            checkboxProps={{required: true}}
                            styles={{ text1: '!font-normal !text-[clamp(14px,3vw,1vw)]' }}
                            extra={'w-full !p-0'}
                        />

                        <Button1
                            showDefault={false}
                            texts={{text1: 'Continue'}}
                            FieldType='submit'
                            disabled={isPending}
                            extra={` w-full bg-black !font-normal text-base justify-center-safe py-2.5 my-9 ${isPending ? 'opacity-50 cursor-not-allowed': 'opacity-100'} `}
                            onClick={()=> handleVerificationRoute(navigate)}
                        />
                    </form>


                    <p className='text-center text-[#5D6778] '>Have an account? <NavLink to={'/login'} className='text-black font-semibold'>Log in</NavLink></p>

                </section>
            </main>
        </div>
    )
}

export default SignupPage
