import React from 'react'
import { SelectMenuItem1 } from '../../../Designs/base/Dropdown'
import { Avatar1 } from '../../../Designs/base/Avatars'

export const PeopleMessageBar = () => {
    return (
        <div className='flex gap-3 justify-start'>
            <Avatar1 images={{ image1: '../../../src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
            <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                <SelectMenuItem1
                    extra={'bg-transparent !w-full !p-0 !items-center'}
                    texts={{
                        text1: 'Bessie',
                        text2: 'Marketing Manager'
                    }}
                    styles={{
                        text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                        text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                    }}
                />
                <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
            </div>
        </div>
    )
}



export const MyMessageBar = () => {
    return (
        <div className='flex gap-3 justify-end '>
            <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
            </div>
        </div>
    )
}
