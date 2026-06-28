import React, { useState } from 'react'
import { InputField1 } from '../Designs/base/Inputs'
import { FiSearch } from "react-icons/fi";
import { Button1, Button4 } from '../Designs/base/Buttons';
import { IoPersonOutline } from "react-icons/io5";
import { Dropdown1, DropdownLine1, DropdownListHeader1, SelectMenuItem3 } from '../Designs/base/Dropdown';
import { FiHome } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { LabelBadge1 } from '../Designs/base/Badges';
import { FiEdit } from "react-icons/fi";
import { HiOutlineInbox } from "react-icons/hi2";
import { Avatar3 } from '../Designs/base/Avatars';
import NewMessage from '../components/NewMessage';
import ProfileCardComponent from '../components/userRelated/ProfileCardComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import { NavLink } from 'react-router-dom';
import ChatComponent from '../components/chat/ChatComponent';


const ChatListPage = () => {
  const [addNewMessage, setAddNewMessage] = useState(false)
  const newMessageCreateBtn = () => {
    setAddNewMessage(true)
  }
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent/>

      <main className='flex gap-5 mt-15 md:mt-0 md:p-8 flex-1 overflow-hidden'>

        <ProfileCardComponent/>

        <article className='flex-1 flex flex-col  md:border-1 border-black/10 md:rounded-lg overflow-hidden'>
          <section className='hidden md:flex justify-between border-b-1 border-black/10 p-6'>
            <div>
              <p className='font-semibold text-xl'>Messages</p>
            </div>
            <div>
              <LabelBadge1 showDefault={false} texts={{ text1: 'online' }} extra={'bg-white !ring-black/10 font-medium text-lg !px-3'} />
            </div>
          </section>


          <section className='flex flex-1 overflow-hidden'>
            <div className='flex flex-col-reverse md:flex-col h-full md:border-r-1 border-black/10 h-120 w-full'>
              <div className='flex-1 md:mt-10 md:border-b-1 border-black/10 overflow-auto md:my-2'>
                <ChatComponent/>

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
                  extra={'!gap-6 !shadow-none w-full'}
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
                  extra={'!gap-6 !shadow-none w-full'}
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
                  extra={'!gap-6 !shadow-none w-full'}
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

            <div className='hidden flex-1 p-5 lg:flex flex-col justify-center-safe items-center-safe'>
              <Avatar3
                icons={{ icon1: HiOutlineInbox }}
                extra={'bg-transparent w-20 h-20'}
              />

              <div className='flex flex-col gap-3 justify-center-safe items-center-safe'>
                <p className='text-2xl font-medium'>Your messages</p>
                <p className='text-xl font-medium text-black/50'>Select a person to display their chat or start a new conversation</p>

                <div >
                  <Button1
                    showDefault={false}
                    texts={{ text1: 'New message' }}
                    extra={'!rounded-full text-xl !font-normal !px-7 mt-5'}

                    onClick={() => newMessageCreateBtn()}
                  />
                </div>
              </div>
            </div>
          </section>
        </article>

      </main>
      <div className={`${addNewMessage ? 'block' : 'hidden'}`} >
        <NewMessage setAddNewMessage={setAddNewMessage} />
      </div>
    </div>
  )
}

export default ChatListPage
