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

const NotificationPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderComponent />

            <main className='flex gap-10 py-8 px-3 md:px-20 flex-1 mt-13 md:mt-0'>
                <ProfileCardComponent />

                <article className='flex-1 flex flex-col gap-10'>

                    <section className='bg-white border-1 border-black/10 rounded-md'>
                        <div className='py-4 px-6 border-b-1  border-black/10'>
                            <p className='text-lg font-bold'>Notification</p>
                        </div>

                        <section className='mb-4'>

                            
                            <div className='flex gap-3 justify-between items-center-safe px-4 py-6 border-b-1 border-black/10'>
                                <div className='flex gap-5 items-center-safe'>
                                    <Avatar1
                                        showDefault={false}
                                        images={{ image1: "/src/assets/images/profiles/male1.png" }}
                                        extra={'w-13 h-13'}
                                    />
                                    <div className='font-semibold flex gap-2 md:flex-row flex-col'>
                                        <p className=' text-lg'>Robert Fox </p>
                                        <p className='text-base text-black/40'>start following you.</p>

                                    </div>
                                </div>
                                <p>10 minutes ago</p>
                            </div>
                            <div className='flex gap-3 justify-between items-center-safe px-4 py-6 '>
                                <div className='flex gap-5 items-center-safe'>
                                    <Avatar1
                                        showDefault={false}
                                        images={{ image1: "/src/assets/images/profiles/male1.png" }}
                                        extra={'w-13 h-13'}
                                    />
                                    <div className='font-semibold'>
                                        <p className=' text-lg'>Robert Fox <span className='text-base text-black/40'>start following you.</span></p>

                                    </div>
                                </div>
                                <p>10 minutes ago</p>
                            </div>
                        </section>
                    </section>

                </article>
                <aside className='hidden lg:block'>
                    <section>

                        <div className='bg-white  rounded-xl min-w-90 border-1 border-black/10 rounded-md'>
                            <div className='p-6'>
                                <p className='text-lg font-bold'>Suggested Friends</p>
                            </div>
                            <DropdownLine1 extra={'bg-black/10 !w-full'} />
                            <div className='flex flex-col gap-8 p-6 '>
                                <div className='flex items-center-safe justify-between gap-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/male1.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Robert Fox </p>
                                            <p className='text-black/40'>Software Engineer</p>
                                        </div>
                                    </div>


                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: LuPlus }}
                                        styles={{ icon1: '!fill-white hover:!fill-red-600' }}
                                        extra={'bg-blue-100 !p-1'}
                                    />
                                </div>

                                <div className='flex items-center-safe justify-between gap-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/male2.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Thomas Baker </p>
                                            <p className='text-black/40'>Project Manager</p>
                                        </div>
                                    </div>


                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: LuPlus }}
                                        styles={{ icon1: '!fill-white hover:!fill-red-600' }}
                                        extra={'bg-blue-100 !p-1'}
                                    />
                                </div>

                                <div className='flex items-center-safe justify-between gap-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/female3.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Lily Lee </p>
                                            <p className='text-black/40'>Graphic Designer</p>
                                        </div>
                                    </div>


                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: LuPlus }}
                                        styles={{ icon1: '!fill-white hover:!fill-red-600' }}
                                        extra={'bg-blue-100 !p-1'}
                                    />
                                </div>


                                <div className='flex items-center-safe justify-between gap-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/male6.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Andrew Harris </p>
                                            <p className='text-black/40'>Data Scientist</p>
                                        </div>
                                    </div>


                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: LuPlus }}
                                        styles={{ icon1: '!fill-white hover:!fill-red-600' }}
                                        extra={'bg-blue-100 !p-1'}
                                    />
                                </div>
                            </div>


                        </div>

                        <div className='flex flex-col justify-center-safe items-center-safe mt-8'>
                            <p>&copy; 2026 aqoProjects Dev</p>
                            <ul className='flex gap-3 items-center-safe'>
                                <li>About</li>
                                <li>Help</li>
                                <li>Privacy & Terms</li>
                            </ul>
                        </div>

                    </section>
                </aside>
            </main>
        </div>
    )
}

export default NotificationPage
