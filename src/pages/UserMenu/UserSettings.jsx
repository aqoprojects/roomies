import React from 'react'
import { Avatar1 } from '../../Designs/base/Avatars'
import { DropdownLine1, SelectMenuItem3 } from '../../Designs/base/Dropdown'
import { Button1, Button9 } from '../../Designs/base/Buttons'

const UserSettings = () => {
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
                        />

                        <SelectMenuItem3
                            showDefault={false}
                            extra={'w-full !bg-white !p-0 !py-2.5 '}
                            texts={{ text1: 'Account' }}
                            styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 text-black/50' }}
                        />

                        <SelectMenuItem3
                            showDefault={false}
                            extra={'w-full !bg-white !p-0 !py-2.5 '}
                            texts={{ text1: 'Logout' }}
                            styles={{ text1: '!text-base text-black/50 ml-6', icon1: '!w-5 !h-5 ' }}
                        />


                    </div>
                    <div className='pt-11'>
                        {/* <div className='flex flex-col gap-2 w-100'>
                                    <Button4
                                        showDefault={false}
                                        texts={{text1: 'Choose an image for avatar'}}
                                        icons={{icon1: LuCloudUpload}}
                                        styles={{
                                            text1: 'text-black font-normal !text-base',
                                            icon1: 'stroke-black'
                                        }}
                                        extra={'bg-white w-full border-1 border-dashed border-black/40 justify-start gap-4 !px-5'}
                                    />
                                    <InputField1
                                        showDefault={false}
                                        texts={{ placeholder1: 'Full name' }}
                                        inputProps={{
                                            name: 'fullname',
                                            type: 'text',
                                        }}
                                        styles={{
                                            input1: 'w-full px-2 !text-base !font-normal',
                                            text2: '!text-red-800'
                                        }}
                                        extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                                    />


                                    <InputField1
                                        showDefault={false}
                                        texts={{
                                            placeholder1: 'Username',
                                        }}
                                        inputProps={{
                                            name: 'username',
                                            type: 'text',
                                        }}
                                        styles={{
                                            input1: 'w-full px-2 !text-base !font-normal',
                                            text2: '!text-red-800'
                                        }}
                                        extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                                    />


                                    <TextareaField1
                                        showDefault={false}
                                        texts={{
                                            placeholder1: 'Bio',
                                        }}
                                        inputProps={{
                                            name: 'bio',
                                            type: 'text',

                                        }}
                                        styles={{
                                            input1: 'w-full px-2 !text-base !font-normal',
                                            text2: '!text-red-800'
                                        }}
                                        extra={'!ring-1 w-full placeholder:px-2 !font-light ring-[#D5D7DA] focus-within:!ring-black focus-within:!ring-1 rounded-md py-2.5'}
                                    />

                                    <Button1
                                        showDefault={false}
                                        texts={{ text1: 'Save Changes' }}
                                        FieldType='submit'
                                        extra={`bg-black !font-normal text-base justify-center-safe py-2.5 my-9 `}

                                    />
                                </div> */}



                        {/* ACCOUNT TAB */}

                        <div className='flex flex-col justify-center-safe '>
                            <p className='text-lg font-medium'>Delete Account</p>
                            <p className='mb-6'>This action is irreversible and will permanently delete all your data associated with the account.</p>

                            <Button9
                                showDefault={false}
                                texts={{ text1: 'Delete My Account' }}
                                extra={'ring-red-700 text-red-800 !py-2 !px-4'}
                            />
                        </div>
                    </div>
                </section>
            </section>

        </article>
    )
}

export default UserSettings
