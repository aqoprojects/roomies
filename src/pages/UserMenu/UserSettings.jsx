import React from 'react'
import { Avatar1 } from '../../Designs/base/Avatars'
import { DropdownLine1, SelectMenuItem3 } from '../../Designs/base/Dropdown'
import { Button1, Button9 } from '../../Designs/base/Buttons'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import UserGeneral from '../UserSettings/UserGeneral'
import UserAccountDeletion from '../UserSettings/UserAccountDeletion'
import { handleUserAccountSettingRoute, handleUserSettingsRoute } from '../../pathRoutes/UserRoutes'

const UserSettings = () => {
    const navigate = useNavigate()
    const {username} = useParams()
    return (
        <article className='flex-1 flex flex-col gap-10'>
            <section className='bg-white border-1 border-black/10 rounded-md'>
                <div className='py-4 px-6 border-b-1  border-black/10'>
                    <p className='text-lg font-bold'>Settings</p>
                </div>

                <section className='flex gap-15'>
                    <div className='min-w-60 min-h-70 border-r-1 border-black/10 pt-11'>
                        <SelectMenuItem3
                            showDefault={false}
                            texts={{ text1: 'General' }}
                            styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 text-black/50' }}
                            extra={'w-full bg-black/10 rounded-none !p-0 !py-2.5 '}
                            onClick={()=> handleUserSettingsRoute({
                                navigate,
                                username
                            })}
                        />

                        <SelectMenuItem3
                            showDefault={false}
                            extra={'w-full !bg-white !p-0 !py-2.5 '}
                            texts={{ text1: 'Account' }}
                            styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 text-black/50' }}
                            onClick={()=> handleUserAccountSettingRoute({
                                navigate,
                                username
                            })}
                        />

                        <SelectMenuItem3
                            showDefault={false}
                            extra={'w-full !bg-white !p-0 !py-2.5 '}
                            texts={{ text1: 'Logout' }}
                            styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 ' }}
                        />


                    </div>
                    <div className='pt-11'>
                         <Routes>
                            <Route index element={<UserGeneral/>} />
                            <Route path='account' element={<UserAccountDeletion/>} />
                        </Routes>
                        
                    </div>
                </section>
            </section>

        </article>
    )
}

export default UserSettings
