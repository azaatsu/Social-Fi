import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const MessageCard = (props: any) => {
  const { roomname, user } = props;
  const router = useRouter()

  return (
    <div className="p-4 rounded-lg flex justify-between items-center bg-white cursor-pointer hover:bg-slate-100">
      <div className='flex gap-4 items-center w-full'>
        <Image src={user.avatar} width={100} height={100} alt='Icon' className='w-10 rounded-full cursor-pointer hover:bottom-2' onClick={() => { router.push(`/keys/${user._id}`) }} />
        <div className='flex justify-between items-center w-full' onClick={() => { router.push(`/inbox/${user._id}`) }}>
          <h1 className='text-[16px] font-semibold leading-6'>
            {roomname ? roomname : user.username}
          </h1>
          <div className=''>
            <h2 className='text-[12px] font-normal leading-[18px]'>24m</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard