import React from 'react'
import UserFollowInfo from './UserFollowInfo'
import UserDetail from './UserDetail'

const UserInfo = () => {

    return (
        <div className='flex justify-between items-start md:items-center-safe p-11'>
            <UserDetail/>
            <UserFollowInfo/>
        </div>
    )
}

export default UserInfo
