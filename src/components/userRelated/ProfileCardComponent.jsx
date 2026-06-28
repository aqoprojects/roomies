import React from 'react'
import { Dropdown1, DropdownLine1, SelectMenuItem3 } from '../../Designs/base/Dropdown';
import { IoPersonOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { handleFeedRoute } from '../../pathRoutes/GlobalRoutes';
import { useNavigate } from 'react-router-dom';
import { handleProfileRoute, handleUserNotificationgRoute } from '../../pathRoutes/UserRoutes';
import { handleChatListRoute } from '../../pathRoutes/ChatRoutes';

const ProfileCardComponent = () => {
    const navigate = useNavigate()
    return (
        <aside className='hidden xl:block rounded-t-sm'>
            <Dropdown1 extra={'!w-80  px-0 py-0 pb-5 bg-white !shadow-none border-1 border-black/10'}>
                <div>
                    <div>
                        <div className='w-full h-16 bg-[url("/src/assets/images/bg/bgcover1.png")] bg-cover bg-center rounded-t-sm'></div>
                        <div className='relative px-10'>
                            <img src="/src/assets/images/profiles/male1.png" alt="bgcover" className='w-15 absolute -bottom-7  rounded-full ring-1 ring-white ' />
                        </div>
                    </div>

                    <div className='px-10 mt-15'>
                        <p className='font-semibold'>Robert Fox</p>
                        <p className='text-black/50'>Software Engineer</p>
                    </div>
                </div>
                <div className='w-full px-10  mt-12'>
                    <SelectMenuItem3
                        showDefault={false}
                        extra={'w-full !bg-white !p-0 !py-3'}
                        texts={{ text1: 'Home' }}
                        icons={{ icon1: FiHome }}
                        styles={{ text1: '!text-base text-black/50', icon1: '!w-5 !h-5 text-black/50' }}
                        onClick={() => handleFeedRoute(navigate)}
                    />
                    <DropdownLine1 extra={'bg-black/10 w-full'} />
                    <SelectMenuItem3
                        showDefault={false}
                        extra={'w-full !bg-white !p-0 !py-3'}
                        icons={{ icon1: IoPersonOutline }}
                        texts={{ text1: 'Profile' }}
                        styles={{ text1: '!text-base text-black/50', icon1: '!w-5 !h-5 text-black/50' }}
                        onClick={() => handleProfileRoute({
                            navigate,
                            username: 'james'
                        })}
                    />
                    <DropdownLine1 extra={'bg-black/10 w-full'} />
                    <SelectMenuItem3
                        showDefault={false}
                        extra={'w-full !bg-white !p-0 !py-3'}
                        icons={{ icon1: SlPaperPlane }}
                        texts={{ text1: 'Messages' }}
                        styles={{ text1: '!text-base text-black', icon1: '!w-5 !h-5 ' }}
                        onClick={() => handleChatListRoute(navigate)}
                    />
                    <DropdownLine1 extra={'bg-black/10 w-full'} />
                    <SelectMenuItem3
                        showDefault={false}
                        extra={'w-full !bg-white !p-0 !py-3'}
                        icons={{ icon1: LuBell }}
                        texts={{ text1: 'notifications' }}
                        styles={{ text1: '!text-base text-black/50', icon1: '!w-5 !h-5 text-black/50' }}
                        onClick={() => handleUserNotificationgRoute(navigate)}
                    />
                </div>
            </Dropdown1>
        </aside>
    )
}

export default ProfileCardComponent
