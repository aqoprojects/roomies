
export const handleChatListRoute = (navigate) => {
  navigate('/chats')
}


export const handleChatMessageRoute = ({navigate, chatId}) => {
  navigate(`/chats/${chatId}`)
}