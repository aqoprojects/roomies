import React from 'react'
import PostComponent from '../../components/feed/post/PostComponent'
import { Avatar1 } from '../../Designs/base/Avatars'
import { Button4, Button5 } from '../../Designs/base/Buttons'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { DropdownLine1 } from '../../Designs/base/Dropdown'
import { BsChat } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'


const UserPosts = () => {
    return (
        <article className='flex flex-col gap-7'>
            <PostComponent />

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
    )
}

export default UserPosts
