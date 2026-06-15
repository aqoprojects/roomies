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
import { InputField1, TextareaField1 } from '../Designs/base/Inputs'
import { CiImageOn } from "react-icons/ci";
import { SlPaperPlane } from 'react-icons/sl'


const FeedPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderComponent />

            <main className='flex gap-10 py-8 px-20 flex-1'>
                {/* <ProfileCardComponent /> */}

                <article className='flex-1 flex flex-col gap-10'>
                    <section className='bg-white p-5 border-1 border-black/10 rounded-lg'>
                        <div className='flex gap-3 items-start'>
                            <Avatar1
                                showDefault={false}
                                images={{ image1: "/src/assets/images/profiles/male1.png" }}
                                extra={'!w-12 !h-auto'}
                            />
                            <div className='w-full'>
                                <TextareaField1
                                    showDefault={false}
                                    texts={{ placeholder1: "What's on your mind?" }}
                                    styles={{ textarea1: '!border-0 !border-b-1 !p-1 !h-auto max-h-70 resize-none outline-0 rounded-none !w-full' }}
                                    extra={'flex-1 min-w-50 h-auto mb-2'}

                                />

                                <div className='flex justify-between items-center-safe'>
                                    <Button4
                                        texts={{ text1: 'Add Media' }}
                                        icons={{ icon1: CiImageOn }}
                                        styles={{ text1: 'text-black font-normal !text-base', icon1: '!fill-black' }}
                                        extra={'bg-white'}
                                    />
                                    <Button1
                                        showDefault={false}
                                        texts={{ text1: 'Post' }}
                                        styles={{ text1: 'text-white font-normal !text-base', icon1: '!fill-black' }}
                                        extra={'bg-indigo-400 !px-6 !rounded-full'}
                                    />
                                </div>
                            </div>

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

                                <div className='flex justify-center-safe items-center-safe p-8  gap-3'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/male1.png' }} />
                                    <div className='flex-1'>
                                        <InputField1
                                            showDefault={false}
                                            texts={{ placeholder1: 'Share your thoughts here...' }}
                                            styles={{ input1: '!text-base text-[#707988] flex-1 px-3' }}
                                            extra={'!ring-[#E2E8F0] w-full py-3'}
                                        />
                                    </div>
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

                    </section>



                </article>

                <aside>
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

export default FeedPage
