import React from 'react'
import { Button1 } from '../../Designs/base/Buttons'
import { LuLayoutGrid } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { useNavigate, useParams } from 'react-router-dom';
import { handleProfileRoute, handleUserPostRoute, handleUserSavedPostRoute, handleUserSettingsRoute } from '../../pathRoutes/UserRoutes';

const UserMenuTab = () => {
    const navigate = useNavigate()
    const { username } = useParams();

    return (
        <div className='flex p-3 justify-around items-center-safe md:justify-normal'>
            <Button1
                showDefault={false}
                texts={{ text1: 'My Posts' }}
                icons={{ icon1: LuLayoutGrid }}
                styles={{ text1: 'hidden md:block', icon1: 'block md:hidden hover:fill-black' }}
                extra={'bg-transparent !text-black'}
                onClick={() => {
                    handleUserPostRoute({
                        navigate,
                        username
                    })
                }}
            />
            <Button1
                showDefault={false}
                texts={{ text1: 'Saved Posts' }}
                icons={{ icon1: LuBookmark }}
                styles={{ text1: 'hidden md:block', icon1: 'block md:hidden hover:fill-black' }}
                extra={'bg-transparent !text-black'}
                onClick={() => {
                    handleUserSavedPostRoute({
                        navigate,
                        username
                    })
                }}
            />
            <Button1
                showDefault={false}
                texts={{ text1: 'Settings' }}
                icons={{ icon1: LuSettings }}
                styles={{ text1: 'hidden md:block', icon1: 'block md:hidden hover:fill-black' }}
                extra={'bg-transparent !text-black'}
                onClick={() => {
                    handleUserSettingsRoute({
                        navigate,
                        username
                    })
                }}
            />
        </div>
    )
}

export default UserMenuTab
