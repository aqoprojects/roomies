import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputField1 } from '../../Designs/base/Inputs'
import { Button1 } from '../../Designs/base/Buttons'
import { IoPersonOutline } from 'react-icons/io5'

const HeaderComponent = () => {
  return (
    <header className='py-2 md:px-10 bg-white'>

        <nav className='flex justify-between items-center-safe gap-3 py-1'>
          <div className='min-w-25 w-25 md:mx-5'>
            <img src='/Logo.svg' className='w-full ' />
          </div>

          <div className='min-w-50 w-70 md:w-full max-w-150 shrink'>
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
            showDefault={true}
            texts={{ text1: 'Login' }}
            icons={{ icon2: IoPersonOutline }}
            styles={{
              icon1: 'hidden',
              icon2: '!fill-black',
              text1: 'font-normal !text-base'
            }}
            extra={'bg-transparent !text-black  justify-center-safe mx-5'}
          />
        </nav>
      </header>
  )
}

export default HeaderComponent
