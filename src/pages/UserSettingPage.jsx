import React from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
import ProfileCardComponent from '../components/userRelated/ProfileCardComponent'
import { Avatar1 } from '../Designs/base/Avatars'
import { DropdownLine1, DropdownListHeader1, DropdownListHeader2, DropdownListItem5, SelectMenuItem3 } from '../Designs/base/Dropdown'
import { ButtonGroup11 } from '../Designs/base/ButtonGroup'
import { Button1, Button4, Button5, Button9 } from '../Designs/base/Buttons'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import { InputField1, TextareaField1 } from '../Designs/base/Inputs'
import { LuCloudUpload } from "react-icons/lu";



const UserSettingPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderComponent />

            <main className='flex gap-10 py-8 px-20 flex-1'>
                <ProfileCardComponent />

                
            </main>
        </div>
    )
}

export default UserSettingPage
