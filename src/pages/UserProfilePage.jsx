import React from 'react'
// import HeaderComponent from '../components/header/HeaderComponent'
import ProfileCardComponent from '../components/userRelated/ProfileCardComponent'
import { Avatar1 } from '../Designs/base/Avatars'
import { DropdownLine1, DropdownListHeader1, DropdownListHeader2 } from '../Designs/base/Dropdown'
import { ButtonGroup11 } from '../Designs/base/ButtonGroup'
import { Button1, Button4, Button5 } from '../Designs/base/Buttons'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import UserInfo from '../components/userRelated/UserInfo'
import UserMenuTab from '../components/userRelated/UserMenuTab'
import PostComponent from '../components/feed/post/PostComponent'
import { Route, Routes } from 'react-router-dom'
import UserPosts from './UserMenu/UserPosts'
import UserSavePost from './UserMenu/UserSavePost'
import UserSettings from './UserMenu/UserSettings'
import HeaderComponent from '../components/header/HeaderComponent'


const UserProfilePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderComponent/>

            <main className='flex gap-10 py-8 md:px-20 flex-1 mt-13 md:mt-0'>
                <ProfileCardComponent />

                <article className='flex-1 flex flex-col gap-10'>
                    <section className='bg-white border-y-1 md:border-1 border-black/10 md:rounded-lg'>
                        <UserInfo />
                        <DropdownLine1 extra={'bg-black/10 !w-full'} />

                        <UserMenuTab />
                    </section>


                    <section className='flex gap-12'>
                        

                        <Routes>
                            <Route index element={<UserPosts/>} />
                            <Route path="saved" element={<UserSavePost/>} />
                            <Route path="settings" element={<UserSettings/>} />
                        </Routes>


                        {/* <aside className='hidden lg:block'>
                            <section className='' >

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

                            </section>
                        </aside> */}
                    </section>

                </article>
            </main>
        </div>
    )
}

export default UserProfilePage
