import React from 'react'

function UserProfile({params}: any) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='m-4'>UserProfile</h1>
        <hr/>
        <p className='text-4xl m-2'>Profile page of <span className='p-2 rounded bg-green-700'>{params.id}</span>
        </p>
    </div>
  )
}

export default UserProfile;