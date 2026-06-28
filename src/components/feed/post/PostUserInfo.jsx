import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleProfileRoute } from '../../../pathRoutes/UserRoutes'
import { Avatar1 } from '../../../Designs/base/Avatars'

const PostUserInfo = () => {
    const navigate = useNavigate()

    return (
        <div className='flex gap-5'>
            <Avatar1
                showDefault={false}
                images={{ image1: "/src/assets/images/profiles/male1.png" }}
                extra={'w-13 h-13'}
                onClick={() => {
                    handleProfileRoute({
                        navigate,
                        username: 'james'
                    })
                }}
            />
            <div className='font-semibold'>
                <p className=' text-lg'
                    onClick={() => {
                        handleProfileRoute({
                            navigate,
                            username: 'james'
                        })
                    }}>
                    Robert Fox
                </p>
                <p className='text-black/40'>Software Engineer</p>
            </div>
        </div>
    )
}

export default PostUserInfo
