"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import axios from 'axios';

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignup = async () => {

    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-2xl'>Login</h1>
            <hr />
            <div className='flex flex-col items-center justify-center mt-3'>
                <label htmlFor='username'>Email</label>
                <input
                    className='p-2 border border-gray-300 text-black rounded-lg mb-4 focus: outline-none focus:border-gray-600'
                    id='email'
                    type='text'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder='email'
                />
                {/* // */}
                <label htmlFor='username'>Password</label>
                <input
                    className='p-2 border border-gray-300 text-black rounded-lg mb-4 focus: outline-none focus:border-gray-600'
                    id='password'
                    type='text'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='password'
                />
                <button 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                onClick={onSignup}
                >
                    Login here
                </button>
                <Link href='/signup'>Visit signup page</Link>
            </div>
        </div>
    )
}