import React from 'react'
import { Button1, Button4 } from '../../Designs/base/Buttons'
import { InputField1, TextareaField1 } from '../../Designs/base/Inputs'
import { LuCloudUpload } from 'react-icons/lu'

const UserGeneral = () => {
    return (
        <div className='flex flex-col gap-2 w-100'>
            <Button4
                showDefault={false}
                texts={{ text1: 'Choose an image for avatar' }}
                icons={{ icon1: LuCloudUpload }}
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
        </div>
    )
}

export default UserGeneral
