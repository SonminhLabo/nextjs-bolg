import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function AdminUser() {
    const router = useRouter();
    console.log(router.query.id)
    const handleClick = (e) => {
        router.push('/login')
    }
    return (
        <>
                <Head>
                    <title>User Detail</title>
                </Head>
                <h1>Admin - User Page - { router.query.id}</h1>
                <Link href="/">
                    <button className="active">Go to home</button>
                </Link>
                <button onClick={handleClick}>Click Me</button>
        </>
        
    )
}
