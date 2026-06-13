import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import { Avatar3 } from '../Designs/base/Avatars';


const MsuccessPage = () => {
    return (
        <div className='flex flex-col h-screen bg-[#FAFBFF]'>
            <header className='flex justify-center-safe items-center-safe py-3'>
                <div className='w-25'>
                    <img src='/Logo.svg' className='w-full ' />
                </div>
            </header>

            <main className='flex-1 flex justify-center-safe mt-10'>

                <section className='w-100 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-black/10 rounded-md bg-white py-15 px-10  flex flex-col gap-5 h-fit'>
                    <div className='flex justify-center-safe items-center-safe'>
                        <Avatar3
                            icons={{icon1: FcCheckmark}}
                            styles={{icon1: '!size-6 !fill-green-800'}}
                            extra={'!bg-[#D4E3D6]'}
                        />
                    </div>
                    

                    <div className='flex flex-col gap-5 text-center '>
                        <h2 className='font-semibold text-lg'>Check your inbox!</h2>
                        <p className='text-black/60'>Simply open your inbox and click the link to access your account. no passwords required!</p>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default MsuccessPage
