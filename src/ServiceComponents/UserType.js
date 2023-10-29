import React from 'react'
import { Link } from 'react-router-dom'

const UserType = () => {
  return (
    <>
        <div className="h-[85vh] px-5 py-24 mx-auto flex flex-wrap flex-col items-center justify-center">
            <Link className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none w-60 hover:bg-indigo-600 rounded text-center text-sm" to='/login'>Login as User</Link>
            <Link className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none w-60 hover:bg-indigo-600 rounded text-center text-sm" to='/serviceLogin'>Login as Service Provider</Link>
        </div>
    </>
  )
}

export default UserType