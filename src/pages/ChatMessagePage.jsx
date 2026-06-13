import React, { useState } from 'react'
import { InputField1 } from '../Designs/base/Inputs'
import { FiSearch } from "react-icons/fi";
import { FaUserSecret } from 'react-icons/fa6';
import { Button1, Button4 } from '../Designs/base/Buttons';
import { IoPersonOutline } from "react-icons/io5";
import { Dropdown1, DropdownLine1, DropdownListHeader1, DropdownListItem1, SelectMenuItem1, SelectMenuItem3 } from '../Designs/base/Dropdown';
import { FiHome } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { LabelBadge1 } from '../Designs/base/Badges';
import { FiEdit } from "react-icons/fi";
import { Avatar1 } from './../Designs/base/Avatars';
import { Tooltip1, Tooltip2, Tooltip3 } from './../Designs/base/Tooltips';
import NewMessage from '../components/NewMessage';


const ChatMessagePage = () => {
    const [addNewMessage, setAddNewManage] = useState(false)
    return (
        <div className="flex flex-col h-screen">
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

            <main className='flex gap-5 p-8 flex-1 overflow-hidden'>

                <aside className=''>
                    <Dropdown1 extra={'!w-80  px-0 py-0 pb-5 bg-white'}>
                        <div>
                            <div className=''>
                                <div className='w-full h-19 bg-[url("/src/assets/images/bg/bgcover1.png")] bg-cover bg-center'></div>
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
                            />
                            <DropdownLine1 extra={'bg-black/10 w-full'} />
                            <SelectMenuItem3
                                showDefault={false}
                                extra={'w-full !bg-white !p-0 !py-3'}
                                icons={{ icon1: IoPersonOutline }}
                                texts={{ text1: 'Profile' }}
                                styles={{ text1: '!text-base text-black/50', icon1: '!w-5 !h-5 text-black/50' }}
                            />
                            <DropdownLine1 extra={'bg-black/10 w-full'} />
                            <SelectMenuItem3
                                showDefault={false}
                                extra={'w-full !bg-white !p-0 !py-3'}
                                icons={{ icon1: SlPaperPlane }}
                                texts={{ text1: 'Messages' }}
                                styles={{ text1: '!text-base text-black', icon1: '!w-5 !h-5 ' }}
                            />
                            <DropdownLine1 extra={'bg-black/10 w-full'} />
                            <SelectMenuItem3
                                showDefault={false}
                                extra={'w-full !bg-white !p-0 !py-3'}
                                icons={{ icon1: LuBell }}
                                texts={{ text1: 'notifications' }}
                                styles={{ text1: '!text-base text-black/50', icon1: '!w-5 !h-5 text-black/50' }}
                            />
                        </div>
                    </Dropdown1>
                </aside>

                <article className='flex-1 flex flex-col  border-1 border-black/10 rounded-lg overflow-hidden'>
                    <section className='flex justify-between border-b-1 border-black/10 p-6'>
                        <div>
                            <p className='font-semibold text-xl'>Messages</p>
                        </div>
                        <div>
                            <LabelBadge1 showDefault={false} texts={{ text1: 'online' }} extra={'bg-white !ring-black/10 font-medium text-lg !px-3'} />
                        </div>
                    </section>


                    <section className='flex flex-1 overflow-hidden'>
                        <div className='flex flex-col h-full border-r-1 border-black/10 h-120'>
                            <div className='flex-1 mt-10 border-b-1 border-black/10 overflow-auto my-2'>
                                <DropdownListHeader1
                                    showDefault={false}
                                    texts={{
                                        text1: 'Bessie Cooper',
                                        text2: "Hi, Robert. I'm facing some challenges"
                                    }}
                                    images={{ image1: '/src/assets/images/profiles/female1.png' }}
                                    styles={{
                                        text1: '!font-medium',
                                        text2: '!text-lg'
                                    }}
                                    extra={'!gap-6 !shadow-none bg-black/5'}
                                />

                                <DropdownListHeader1
                                    showDefault={false}
                                    texts={{
                                        text1: 'Bessie Cooper',
                                        text2: "Hi, Robert. I'm facing some challenges"
                                    }}
                                    images={{ image1: '/src/assets/images/profiles/male2.png' }}
                                    styles={{
                                        text1: '!font-medium',
                                        text2: '!text-lg'
                                    }}
                                    extra={'!gap-6 !shadow-none'}
                                />

                                <DropdownListHeader1
                                    showDefault={false}
                                    texts={{
                                        text1: 'Bessie Cooper',
                                        text2: "Hi, Robert. I'm facing some challenges"
                                    }}
                                    images={{ image1: '/src/assets/images/profiles/male3.png' }}
                                    styles={{
                                        text1: '!font-medium',
                                        text2: '!text-lg'
                                    }}
                                    extra={'!gap-6 !shadow-none'}
                                />

                                <DropdownListHeader1 showDefault={false}
                                    texts={{
                                        text1: 'Bessie Cooper',
                                        text2: "Hi, Robert. I'm facing some challenges"
                                    }}
                                    images={{ image1: '/src/assets/images/profiles/male4.png' }}
                                    styles={{
                                        text1: '!font-medium',
                                        text2: '!text-lg'
                                    }}
                                    extra={'!gap-6 !shadow-none'}
                                />


                            </div>

                            <div>
                                <Button1
                                    showDefault={false}
                                    texts={{ text1: 'New Message' }}
                                    icons={{ icon1: FiEdit }}
                                    styles={{
                                        text: 'font-medium !text-lg text-black/70'
                                    }}
                                    extra={'bg-transparent !text-black  justify-center-safe mx-5'}

                                    onClick={() => newMessageCreateBtn()}
                                />
                            </div>
                        </div>

                        <div className='flex-1 p-5 flex flex-col overflow-auto'>
                            <div className='flex-1  flex flex-col gap-8 overflow-scroll'>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{image1: '/src/assets/images/profiles/female1.png' }} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1 
                                            extra={'bg-transparent !w-full !p-0 !items-center'} 
                                            texts={{
                                                text1: 'Bessie', 
                                                text2: 'Marketing Manager'
                                            }} 
                                            styles={{ 
                                                text1: 'font-medium', 
                                                text2: '!text-base' 
                                            }} 
                                        />
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{image1: '/src/assets/images/profiles/female1.png' }} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1  
                                            texts={{
                                                text1: 'Bessie', 
                                                text2: 'Marketing Manager'
                                            }} 
                                            styles={{ 
                                                text1: 'font-medium', 
                                                text2: '!text-base' 
                                            }}  
                                            extra={'bg-transparent !w-full !p-0 !items-center'} 
                                        />
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{image1: '/src/assets/images/profiles/female1.png' }} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1 
                                            texts={{
                                                text1: 'Bessie', 
                                                text2: 'Marketing Manager'
                                            }} 
                                            styles={{ 
                                                text1: 'font-medium', 
                                                text2: '!text-base' 
                                            }}
                                            extra={'bg-transparent !w-full !p-0 !items-center'}   
                                        />
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{image1: '/src/assets/images/profiles/female1.png' }} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1 
                                            texts={{
                                                text1: 'Bessie', 
                                                text2: 'Marketing Manager'
                                            }} 
                                            styles={{ 
                                                text1: 'font-medium', 
                                                text2: '!text-base' 
                                            }}
                                            extra={'bg-transparent !w-full !p-0 !items-center'}   
                                        />
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{image1: '/src/assets/images/profiles/female1.png' }} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1 
                                            texts={{
                                                text1: 'Bessie', 
                                                text2: 'Marketing Manager'
                                            }} 
                                            styles={{ 
                                                text1: 'font-medium', 
                                                text2: '!text-base' 
                                            }}
                                            extra={'bg-transparent !w-full !p-0 !items-center'}   
                                        />
                                        <p>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p>Hi, Robert. I'm facing some cha2llenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right'>12:04</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center-safe items-center-safe p-2 gap-3'>
                                <Avatar1 images={{image1: '/src/assets/images/profiles/male1.png'}} />
                                <div className='flex-1'>
                                    <InputField1
                                        showDefault={false}
                                        texts={{placeholder1: 'Message...'}}
                                        icons={{ 
                                            icon2: {
                                                icon: SlPaperPlane, 
                                                iconStyle: '!w-6 !h-6  !text-[#5D6778]',
                                                extra: '!w-13 flex justify-end items-center pr-4', 
                                            } 
                                        }}
                                        styles={{ input1: '!text-base text-[#707988] flex-1 px-3' }}
                                        extra={'!ring-[#E2E8F0] w-full py-3'}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <div className={`${addNewMessage ? 'block' : 'hidden'}`}>
                <NewMessage />
            </div>
        </div>
    )
}

export default ChatMessagePage
