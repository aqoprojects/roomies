import React from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
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


const UserProfilePage = () => {
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


                    <section className='flex gap-12'>
                        <article className='flex flex-col gap-7'>
                            <section className='bg-white border-1 border-black/10'>
                                <div className='flex justify-between items-center-safe p-5'>
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
                                    <div className='flex flex-col  items-end-safe'>
                                        <Button5
                                            showDefault={false}
                                            icons={{ icon1: HiOutlineDotsHorizontal }}
                                            styles={{ icon1: '!fill-black' }}
                                            extra={'bg-transparent !p-2'}
                                        />
                                        <p className='text-black/40'>3 days ago</p>
                                    </div>
                                </div>
                                <DropdownLine1 extra={'bg-black/10 w-full'} />
                                <div className='p-7'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint voluptatibus id assumenda. Corporis dolores necessitatibus, consequatur ratione aspernatur doloremque minus ipsa voluptates commodi, distinctio error sint voluptas culpa. Vero veritatis similique ipsum, at quaerat eaque magnam repellendus voluptatum minima consectetur aspernatur impedit velit quo distinctio nulla ducimus nihil mollitia?</p>
                                </div>

                                <div className='flex justify-between items-center-safe p-8 '>
                                    <Button4
                                        texts={{ text1: 'Comment' }}
                                        icons={{ icon1: BsChat }}
                                        styles={{
                                            text1: 'text-black !text-base',
                                            icon1: '!fill-black'
                                        }}
                                        extra={'bg-transparent !p-0'}
                                    />

                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: AiFillLike }}
                                        styles={{ icon1: '!fill-white drop-shadow-[0_0_1px_black] size-6 hover:!fill-red-600' }}
                                        extra={'bg-transparent !p-1'}
                                    />
                                </div>
                            </section>

                            <section className='bg-white border-1 border-black/10'>
                                <div className='flex justify-between items-center-safe p-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/male2.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Robert Fox </p>
                                            <p className='text-black/40'>Software Engineer</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col  items-end-safe'>
                                        <Button5
                                            showDefault={false}
                                            icons={{ icon1: HiOutlineDotsHorizontal }}
                                            styles={{ icon1: '!fill-black' }}
                                            extra={'bg-transparent !p-2'}
                                        />
                                        <p className='text-black/40'>3 days ago</p>
                                    </div>
                                </div>
                                <DropdownLine1 extra={'bg-black/10 w-full'} />
                                <div className='p-7'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint voluptatibus id assumenda. Corporis dolores necessitatibus, consequatur ratione aspernatur doloremque minus ipsa voluptates commodi, distinctio error sint voluptas culpa.</p>
                                </div>

                                <div className='flex justify-between items-center-safe p-8 '>
                                    <Button4
                                        texts={{ text1: 'Comment' }}
                                        icons={{ icon1: BsChat }}
                                        styles={{
                                            text1: 'text-black !text-base',
                                            icon1: '!fill-black'
                                        }}
                                        extra={'bg-transparent !p-0'}
                                    />

                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: AiFillLike }}
                                        styles={{ icon1: '!fill-white drop-shadow-[0_0_1px_black] size-6 hover:!fill-red-600' }}
                                        extra={'bg-transparent !p-1'}
                                    />
                                </div>
                            </section>

                            <section className='bg-white border-1 border-black/10'>
                                <div className='flex justify-between items-center-safe p-5'>
                                    <div className='flex gap-5'>
                                        <Avatar1
                                            showDefault={false}
                                            images={{ image1: "/src/assets/images/profiles/female1.png" }}
                                            extra={'w-13 h-13'}
                                        />
                                        <div className='font-semibold'>
                                            <p className=' text-lg'>Robert Fox </p>
                                            <p className='text-black/40'>Software Engineer</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col  items-end-safe'>
                                        <Button5
                                            showDefault={false}
                                            icons={{ icon1: HiOutlineDotsHorizontal }}
                                            styles={{ icon1: '!fill-black' }}
                                            extra={'bg-transparent !p-2'}
                                        />
                                        <p className='text-black/40'>3 days ago</p>
                                    </div>
                                </div>
                                <DropdownLine1 extra={'bg-black/10 w-full'} />
                                <div className='p-7'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>

                                <div className='flex justify-between items-center-safe p-8 '>
                                    <Button4
                                        texts={{ text1: 'Comment' }}
                                        icons={{ icon1: BsChat }}
                                        styles={{
                                            text1: 'text-black !text-base',
                                            icon1: '!fill-black'
                                        }}
                                        extra={'bg-transparent !p-0'}
                                    />

                                    <Button5
                                        showDefault={false}
                                        icons={{ icon1: AiFillLike }}
                                        styles={{ icon1: '!fill-white drop-shadow-[0_0_1px_black] size-6 hover:!fill-red-600' }}
                                        extra={'bg-transparent !p-1'}
                                    />
                                </div>
                            </section>

                        </article>
                        <aside>
                            <section className='' >

                                <div className='bg-white  rounded-xl min-w-90 border-1 border-black/10 rounded-md'>
                                    <div className='p-6'>
                                    <p className='text-lg font-bold'>Suggested Friends</p>
                                    </div>
                                    <DropdownLine1 extra={'bg-black/10 !w-full'}/>
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
                        </aside>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default UserProfilePage
