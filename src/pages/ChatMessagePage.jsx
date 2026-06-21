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
import HeaderComponent from '../components/header/HeaderComponent';
import ProfileCardComponent from '../components/userRelated/ProfileCardComponent';


const ChatMessagePage = () => {
    const [addNewMessage, setAddNewManage] = useState(false)
    return (
        <div className="flex flex-col h-screen">
            {/* <HeaderComponent/> */}

            <main className='flex gap-5 md:p-8 flex-1 overflow-hidden'>

                {/* <ProfileCardComponent /> */}

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

                        <div className='hidden flex-1 md:flex flex-col-reverse md:flex-col h-full md:border-r-1 border-black/10 h-120 w-auto shrink grow-0 min-w-80'>
                            <div className='flex-1 md:mt-10 md:border-b-1 border-black/10 overflow-auto md:my-2'>
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
                                    extra={'!gap-6 !shadow-none bg-black/5 !w-auto'}
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
                                    extra={'!gap-6 !shadow-none !w-auto'}
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
                                    extra={'!gap-6 !shadow-none !w-auto'}
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
                                    extra={'!gap-6 !shadow-none !w-auto'}
                                />


                            </div>

                            <div className='border-y-1 md:border-0 border-black/10'>
                                <Button1
                                    showDefault={false}
                                    texts={{ text1: 'New Message' }}
                                    icons={{ icon1: FiEdit }}
                                    styles={{
                                        text: 'font-medium !text-lg text-black/70'
                                    }}
                                    extra={'bg-transparent !text-black !py-4 md:p-3 justify-center-safe mx-5'}

                                    onClick={() => newMessageCreateBtn()}
                                />
                            </div>
                        </div>

                        <div className='p-5 flex-1 flex flex-col overflow-auto shrink-0 grow'>
                            <div className='flex-1 flex flex-col gap-8 overflow-scroll shrink-0 grow'>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1
                                            extra={'bg-transparent !w-full !p-0 !items-center'}
                                            texts={{
                                                text1: 'Bessie',
                                                text2: 'Marketing Manager'
                                            }}
                                            styles={{
                                                text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                                                text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                                            }}
                                        />
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1
                                            extra={'bg-transparent !w-full !p-0 !items-center'}
                                            texts={{
                                                text1: 'Bessie',
                                                text2: 'Marketing Manager'
                                            }}
                                            styles={{
                                                text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                                                text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                                            }}
                                        />
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1
                                            extra={'bg-transparent !w-full !p-0 !items-center'}
                                            texts={{
                                                text1: 'Bessie',
                                                text2: 'Marketing Manager'
                                            }}
                                            styles={{
                                                text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                                                text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                                            }}
                                        />
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1
                                            extra={'bg-transparent !w-full !p-0 !items-center'}
                                            texts={{
                                                text1: 'Bessie',
                                                text2: 'Marketing Manager'
                                            }}
                                            styles={{
                                                text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                                                text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                                            }}
                                        />
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-start'>
                                    <Avatar1 images={{ image1: '/src/assets/images/profiles/female1.png' }} extra={'min-w-10 !h-10 md:!h-12'} />
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3'>
                                        <SelectMenuItem1
                                            extra={'bg-transparent !w-full !p-0 !items-center'}
                                            texts={{
                                                text1: 'Bessie',
                                                text2: 'Marketing Manager'
                                            }}
                                            styles={{
                                                text1: 'font-medium text-[clamp(16px,3vw,1.3vw)]',
                                                text2: ' text-[clamp(14px,3vw,1vw)] hidden md:block'
                                            }}
                                        />
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-end '>
                                    <div className='bg-black/5 w-[clamp(380px,3vw,450px)] p-3 rounded-lg flex flex-col gap-3 bg-indigo-300'>
                                        <p className='text-[clamp(14px,3vw,1vw)]'>Hi, Robert. I'm facing some cha2llenges in optimizing my code for performance. Can you help?</p>
                                        <p className='text-right text-[clamp(14px,3vw,1vw)]'>12:04</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center-safe items-center-safe p-2 gap-3 '>
                                <Avatar1 images={{ image1: '/src/assets/images/profiles/male1.png' }} extra={'min-w-11'}/>
                                <div className='flex-1'>
                                    <InputField1
                                        showDefault={false}
                                        texts={{ placeholder1: 'Message...' }}
                                        icons={{
                                            icon2: {
                                                icon: SlPaperPlane,
                                                iconStyle: '!w-6 !h-6  !text-[#5D6778]',
                                                extra: '!w-auto md:!w-13 flex justify-end items-center !p-0 md:pr-4',
                                            }
                                        }}
                                        styles={{ input1: '!text-base text-[#707988] flex-1 px-3 ' }}
                                        extra={'!ring-[#E2E8F0] !w-full py-3'}
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
