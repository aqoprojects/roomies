import React from 'react'
import { Avatar1 } from '../../../Designs/base/Avatars'
import { Button5 } from '../../../Designs/base/Buttons'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import PostUserInfo from './PostUserInfo'

const PostHeader = () => {
    return (
        <div className='flex justify-between items-center-safe p-5'>
            <PostUserInfo/>
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
    )
}

export default PostHeader
