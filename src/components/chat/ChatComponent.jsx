import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DropdownListHeader1 } from '../../Designs/base/Dropdown'
import { handleChatMessageRoute } from '../../pathRoutes/ChatRoutes'

const ChatComponent = () => {
    const navigate = useNavigate()

    return (
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
            extra={'!gap-6 !shadow-none bg-black/5 w-full'}
            onClick={() => {
                handleChatMessageRoute({
                    navigate,
                    chatId: '223555'
                })
            }}
        />
    )
}

export default ChatComponent
