import React from 'react'
import { DropdownListHeader1 } from '../Designs/base/Dropdown'
import { InputField1 } from '../Designs/base/Inputs'
import { FiSearch } from "react-icons/fi";

const NewMessage = ({setAddNewMessage}) => {

    const cancelNewMessageForm = (e) =>{
        if (e.target === e.currentTarget) {
            setAddNewMessage(false);
        }
    }

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/10 flex justify-center-safe items-center-safe' onClick={ cancelNewMessageForm}>

        <div className='bg-white p-5 rounded-xl'>
            <div>
                <InputField1
                    showDefault={false}
                    extra={'!ring-[#E2E8F0] w-full py-3'}
                    texts={{placeholder1:'New message to:'}}
                    styles={{ input1: '!text-base text-[#707988] flex-1' }}
                    icons={{ icon1: {icon: FiSearch, extra: '!w-13 flex justify-end items-center pr-2', iconStyle: '!w-6 !h-6  !text-[#5D6778]'} }}
                />
            </div>
            <div>
                <DropdownListHeader1 
                    texts={{
                        text1: 'Bessie Cooper', 
                        text2: "Software Engineer"
                    }}
                    images={{image1:'/src/assets/images/profiles/male5.png'}} 
                    styles={{ 
                        text1: '!font-medium', 
                        text2: '!text-base' 
                    }} 
                    extra={'!gap-6 !shadow-none'} 
                />
                
                <DropdownListHeader1 
                    texts={{
                        text1: 'Bessie Cooper', 
                        text2: "Digital Marketer"
                    }}
                    images={{image1:'/src/assets/images/profiles/male6.png'}} 
                    styles={{ 
                        text1: '!font-medium', 
                        text2: '!text-base' 
                    }} 
                    extra={'!gap-6 !shadow-none'} 
                />
                
                <DropdownListHeader1 
                    texts={{
                        text1: 'Bessie Cooper', 
                        text2: "Accountant"
                    }}
                    images={{image1:'/src/assets/images/profiles/female2.png'}} 
                    styles={{ 
                        text1: '!font-medium', 
                        text2: '!text-base' 
                    }} 
                    extra={'!gap-6 !shadow-none'} 
                />
                
                <DropdownListHeader1 
                    texts={{
                        text1: 'Bessie Cooper', 
                        text2: "Accountant"
                    }}
                    images={{image1:'/src/assets/images/profiles/female3.png'}} 
                    styles={{ 
                        text1: '!font-medium', 
                        text2: '!text-base' 
                    }} 
                    extra={'!gap-6 !shadow-none'} 
                />
            </div>
            
            
        </div>
      
    </div>
  )
}

export default NewMessage
