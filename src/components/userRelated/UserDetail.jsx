import React from 'react'
import { Avatar1 } from '../../Designs/base/Avatars'
import { handleProfileRoute } from '../../pathRoutes/UserRoutes'
import { useNavigate } from 'react-router-dom'

const UserDetail = () => {
    const navigate = useNavigate()
    
    return (
        <div className='flex  flex-col md:flex-row justify-center-safe md:items-center-safe gap-4'>
            <Avatar1
                showDefault={false}
                images={{ image1: "/src/assets/images/profiles/male1.png" }}
                extra={'w-21 h-21'}
                onClick={() => {
                    handleProfileRoute({
                        navigate,
                        username: 'james'
                    })
                }}
            />
            <div className='font-semibold'>
                <div className='flex gap-2 md:gap-1 text-nowrap items-center-safe mb-1'>
                    <p className=' text-lg md:text-xl'>Robert Fox </p>
                    <p className='text-base text-black/40 hidden md:block'>/ </p>
                    <p className='text-sm text-black/40'>@robert</p>
                </div>
                <p className='text-black/40'>Software Engineer</p>
            </div>

        </div>
    )
}

export default UserDetail
