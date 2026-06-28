import React from 'react'

const UserFollowInfo = () => {
    return (
        <div className='font-semibold flex gap-5 items-center-safe justify-center-safe'>
            <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                <p className='text-3xl'>12</p>
                <p className='text-sm text-black/40'>Posts</p>
            </div>

            <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                <p className='text-3xl'>207</p>
                <p className='text-sm text-black/40'>Followers</p>
            </div>

            <div className='flex flex-col justify-center-safe items-center-safe gap-1'>
                <p className='text-3xl'>64</p>
                <p className='text-sm text-black/40'>Following</p>
            </div>
        </div>
    )
}

export default UserFollowInfo
