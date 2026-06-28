import React from 'react'
import { DropdownLine1 } from '../../../Designs/base/Dropdown'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Avatar1 } from '../../../Designs/base/Avatars'
import { InputField1 } from '../../../Designs/base/Inputs'

const PostComponent = () => {
    return (
        <section className='bg-white md:border-1 border-black/10'>
            <PostHeader />
            <DropdownLine1 extra={'bg-black/10 w-full'} />
            <div className='p-7'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint voluptatibus id assumenda. Corporis dolores necessitatibus, consequatur ratione aspernatur doloremque minus ipsa voluptates commodi, distinctio error sint voluptas culpa. Vero veritatis similique ipsum, at quaerat eaque magnam repellendus voluptatum minima consectetur aspernatur impedit velit quo distinctio nulla ducimus nihil mollitia?</p>
            </div>

            <PostFooter />

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
    )
}

export default PostComponent
