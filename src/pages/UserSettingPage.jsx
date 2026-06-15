import React from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
import ProfileCardComponent from '../components/userRelated/ProfileCardComponent'
import { Avatar1 } from '../Designs/base/Avatars'
import { DropdownLine1, DropdownListHeader1, DropdownListHeader2, DropdownListItem5, SelectMenuItem3 } from '../Designs/base/Dropdown'
import { ButtonGroup11 } from '../Designs/base/ButtonGroup'
import { Button1, Button4, Button5, Button9 } from '../Designs/base/Buttons'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import { InputField1, TextareaField1 } from '../Designs/base/Inputs'
import { LuCloudUpload } from "react-icons/lu";



const UserSettingPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderComponent />

            <main className='flex gap-10 py-8 px-20 flex-1'>
                <ProfileCardComponent />

                <article className='flex-1 flex flex-col gap-10'>
                    <section className='bg-white border-1 border-black/10 rounded-lg'>
                        <div className='flex justify-between items-center-safe p-11'>
                            <div className='flex justify-center-safe items-center-safe gap-4'>
                                <Avatar1
                                    showDefault={false}
                                    images={{ image1: "/src/assets/images/profiles/male1.png" }}
                                    extra={'w-21 h-21'}
                                />
                                <div className='font-semibold'>
                                    <p className=' text-xl'>Robert Fox <span className='text-base text-black/40'>/ @robert</span></p>
                                    <p className='text-black/40'>Software Engineer</p>
                                </div>

                            </div>

                            <div className='font-semibold flex gap-5 items-center-safe justify-center-safe'>
                                <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                                    <p className='text-3xl'>12</p>
                                    <p className='text-sm text-black/40'>Posts</p>
                                </div>

                                <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                                    <p className='text-3xl'>207</p>
                                    <p className='text-sm text-black/40'>Followers</p>
                                </div>

                                <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                                    <p className='text-3xl'>64</p>
                                    <p className='text-sm text-black/40'>Following</p>
                                </div>
                            </div>
                        </div>
                        <DropdownLine1 extra={'bg-black/10 !w-full'} />

                        <div className='flex p-3'>
                            <Button1
                                showDefault={false}
                                texts={{ text1: 'My Posts' }}
                                extra={'bg-transparent !text-black'}
                            />
                            <Button1
                                showDefault={false}
                                texts={{ text1: 'Saved Posts' }}
                                extra={'bg-transparent !text-black/40'}
                            />
                            <Button1
                                showDefault={false}
                                texts={{ text1: 'Settings' }}
                                extra={'bg-transparent !text-black/40'}
                            />
                        </div>
                    </section>


                    <section className='bg-white border-1 border-black/10 rounded-md'>
                        <div className='py-4 px-6 border-b-1  border-black/10'>
                            <p className='text-lg font-bold'>Settings</p>
                        </div>

                        <section className='flex gap-15'>
                            <div className='min-w-60 min-h-70 border-r-1 border-black/10 pt-11'>
                                <SelectMenuItem3
                                    showDefault={false}
                                    texts={{ text1: 'General' }}
                                    styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 text-black/50' }}
                                    extra={'w-full bg-black/10 rounded-none !p-0 !py-2.5 '}
                                />

                                <SelectMenuItem3
                                    showDefault={false}
                                    extra={'w-full !bg-white !p-0 !py-2.5 '}
                                    texts={{ text1: 'Account' }}
                                    styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 text-black/50' }}
                                />

                                <SelectMenuItem3
                                    showDefault={false}
                                    extra={'w-full !bg-white !p-0 !py-2.5 '}
                                    texts={{ text1: 'Logout' }}
                                    styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 ' }}
                                />


                            </div>
                            <div className='pt-11'>
                                {/* <div className='flex flex-col gap-2 w-100'>
                                    <Button4
                                        showDefault={false}
                                        texts={{text1: 'Choose an image for avatar'}}
                                        icons={{icon1: LuCloudUpload}}
                                        styles={{
                                            text1: 'text-black font-normal !text-base',
                                            icon1: 'stroke-black'
                                        }}
                                        extra={'bg-white w-full border-1 border-dashed border-black/40 justify-start gap-4 !px-5'}
                                    />
                                    <InputField1
                                        showDefault={false}
                                        texts={{ placeholder1: 'Full name' }}
                                        inputProps={{
                                            name: 'fullname',
                                            type: 'text',
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
                                            placeholder1: 'Username',
                                        }}
                                        inputProps={{
                                            name: 'username',
                                            type: 'text',
                                        }}
                                        styles={{
                                            input1: 'w-full px-2 !text-base !font-normal',
                                            text2: '!text-red-800'
                                        }}
                                        extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                                    />


                                    <TextareaField1
                                        showDefault={false}
                                        texts={{
                                            placeholder1: 'Bio',
                                        }}
                                        inputProps={{
                                            name: 'bio',
                                            type: 'text',

                                        }}
                                        styles={{
                                            input1: 'w-full px-2 !text-base !font-normal',
                                            text2: '!text-red-800'
                                        }}
                                        extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                                    />

                                    <Button1
                                        showDefault={false}
                                        texts={{ text1: 'Save Changes' }}
                                        FieldType='submit'
                                        extra={`bg-black !font-normal text-base justify-center-safe py-2.5 my-9 `}

                                    />
                                </div> */}



                                {/* ACCOUNT TAB */}

                                <div className='flex flex-col justify-center-safe '>
                                    <p className='text-lg font-medium'>Delete Account</p>
                                    <p className='mb-6'>This action is irreversible and will permanently delete all your data associated with the account.</p>

                                    <Button9
                                        showDefault={false}
                                        texts={{text1: 'Delete My Account'}}
                                        extra={'ring-red-700 text-red-800 !py-2 !px-4'}
                                    />
                                </div>
                            </div>
                        </section>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default UserSettingPage
