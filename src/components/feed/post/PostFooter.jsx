import React from 'react'
import { Button4, Button5 } from '../../../Designs/base/Buttons'
import { BsChat } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'

const PostFooter = () => {
    return (
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
    )
}

export default PostFooter
