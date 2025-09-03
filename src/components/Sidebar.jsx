import { useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'

const Sidebar = () => {

    const {user} =useUser();
    const {signOut , openUserProfile} =useClerk();

  return (
    <div className={`w-50 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0    transition-all duration-300 ease-in-out ${Sidebar ? 'translate-x-0 ':'max-sm:-translate-x-full'}`}>
      <div className="my-7 w-full">
        <img src={user.imageUrl} alt="user avatar"  className='w-13 rounded-full mx-auto'/>
        <h1 className="mt-1 text-center">{user.fullName}</h1>
      </div>
    </div>
  )
}

export default Sidebar
