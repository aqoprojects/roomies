import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputField1 } from '../../Designs/base/Inputs'
import { Button1 } from '../../Designs/base/Buttons'
import { IoPersonOutline } from 'react-icons/io5'
import { SlPaperPlane } from 'react-icons/sl'

const HeaderComponent = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-10 md:static py-2 px-4 md:px-10 bg-white'>

        <nav className='flex justify-between items-center-safe gap-3 py-1'>
          <div className='min-w-25 w-25 md:mx-5'>
            <img src='/Logo.svg' className='w-full ' />
          </div>

          <div className=' hidden md:block min-w-50 w-70 md:w-full max-w-150 shrink'>
            <InputField1
              showDefault={false}
              icons={{
                icon1: {
                  icon: FiSearch,
                  iconStyle: '!w-6 !h-6  !text-[#5D6778]',
                  extra: '!w-13 flex justify-end items-center pr-2'
                }
              }}
              texts={{ placeholder1: 'Search' }}
              styles={{ input1: '!text-base text-[#707988] flex-1' }}
              extra={'!ring-[#E2E8F0] w-full'}
            />
          </div>


          <Button1
            showDefault={false}
            texts={{ text1: 'Login' }}
            icons={{ icon2: IoPersonOutline }}
            styles={{
              icon2: '!fill-black',
              text1: 'font-normal !text-base'
            }}
            extra={' hidden md:flex bg-transparent !text-black  justify-center-safe mx-5'}
          />
          <Button1
            showDefault={false}
            icons={{ icon2: SlPaperPlane }}
            styles={{
              icon2: '!fill-black',
              text1: 'font-normal !text-base'
            }}
            extra={' block md:hidden  bg-transparent !text-black  justify-center-safe '}
          />
        </nav>
      </header>
  )
}

export default HeaderComponent
