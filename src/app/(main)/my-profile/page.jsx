import { auth } from '@/lib/auth';
import { redirect } from 'next/dist/server/api-utils';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyProfilePage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    if (!user) {
    
        return (
            <div>
                <h1>You are not logged in</h1>
                <h4>Click Here to <Link href="/signin" className='text-blue-400'>Login</Link></h4>
            </div>
        );
    }

    // console.log("Session data:", session);
    return (
        <div>
            <h1>My Profile</h1>
        </div>
    );
};

export default MyProfilePage;