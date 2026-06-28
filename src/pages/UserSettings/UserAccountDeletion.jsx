import React from 'react'
import { Button9 } from '../../Designs/base/Buttons'

const UserAccountDeletion = () => {
    return (
        <div className='flex flex-col justify-center-safe '>
            <p className='text-lg font-medium'>Delete Account</p>
            <p className='mb-6'>This action is irreversible and will permanently delete all your data associated with the account.</p>

            <Button9
                showDefault={false}
                texts={{ text1: 'Delete My Account' }}
                extra={'ring-red-700 text-red-800 !py-2 !px-4'}
            />
        </div>
    )
}

export default UserAccountDeletion
