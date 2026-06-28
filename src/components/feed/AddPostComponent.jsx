import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TextareaField1 } from '../../Designs/base/Inputs'
import { Button1, Button4 } from '../../Designs/base/Buttons'
import { CiImageOn } from 'react-icons/ci'
import { Avatar1 } from '../../Designs/base/Avatars'
import { handleProfileRoute } from '../../pathRoutes/UserRoutes'

const AddPostComponent = () => {
    const navigate = useNavigate()


    return (
        <section className='bg-white p-5 border-y-1 md:border-1 border-black/10 md:rounded-lg'>
            <div className='flex gap-3 items-start'>

                <Avatar1
                    showDefault={false}
                    images={{ image1: "/src/assets/images/profiles/male1.png" }}
                    extra={'!w-12 !h-auto'}
                    onClick={() => {
                        handleProfileRoute({
                            navigate,
                            username: 'james'
                        })
                    }}
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
    )
}

export default AddPostComponent
