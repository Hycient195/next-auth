/** Working with client-side authentication */

import Link from 'next/link';
import styles from './navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar (){
    const { data , status } = useSession();
    console.log(data, status)
    return(
        <nav className={styles.nav}>
            <h2 className={styles.title}>Next Auth</h2>

            <ul className={styles.ul}>

                <li className={styles.li}>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>

                <li className={styles.li}>
                    <Link href="/dashboard"><a>Dashboard</a></Link>
                </li>

                {
                    !data && status === 'unauthenticated' &&                   
                    <li className={styles.li}>
                        <Link href="/api/auth/signin"><a
                            onClick={e =>{
                                e.preventDefault()
                                signIn('github')
                            }}
                        >Sign In</a></Link>
                    </li> 
                }

                {
                   
                    data && status === 'authenticated' &&
                    <>        
                        <li className={styles.li}>
                            <Link href="/api/auth/signout"><a
                                onClick={e =>{
                                    e.preventDefault();
                                    signOut();
                                }}
                            >Sign Out</a></Link>
                        </li>
                        <img src={data.user.image} height="30" width="30"/>
                    </>
                }

            </ul>
        </nav>
    )
}