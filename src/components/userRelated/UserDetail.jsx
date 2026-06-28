import React from 'react'
import { Avatar1 } from '../../Designs/base/Avatars'
import { handleProfileRoute } from '../../pathRoutes/UserRoutes'
import { useNavigate } from 'react-router-dom'

const UserDetail = () => {
    const navigate = useNavigate()
    
    return (
        <div className='flex justify-center-safe items-center-safe gap-4'>
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
                <p className=' text-xl'>Robert Fox <span className='text-base text-black/40'>/ @robert</span></p>
                <p className='text-black/40'>Software Engineer</p>
            </div>

        </div>
    )
}

export default UserDetail
