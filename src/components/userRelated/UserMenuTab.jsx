import React from 'react'
import { Button1 } from '../../Designs/base/Buttons'

const UserMenuTab = () => {
    return (
        <div className='flex p-3'>
            <Button1
                showDefault={false}
                texts={{ text1: 'My Posts' }}
                extra={'bg-transparent !text-black'}
            />
            <Button1
                showDefault={false}
                texts={{ text1: 'Saved Posts' }}
                extra={'bg-transparent !text-black/40'}
            />
            <Button1
                showDefault={false}
                texts={{ text1: 'Settings' }}
                extra={'bg-transparent !text-black/40'}
            />
        </div>
    )
}

export default UserMenuTab
