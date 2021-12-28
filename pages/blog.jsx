/** Working with server-side authentication and securing pages server-side */
 
/** Session can either be passed as props or accessed using the useSession hook. 
 * The later is more preferable and recommended though
 */

import { getSession, useSession } from 'next-auth/react'

export default function Blog (){
    const { data } = useSession()
    return(
        <div>
            <h2 style={{textAlign : 'center'}}>Working with server-side authentication, and securing pages server-side</h2>
            <hr/>

            <h2>The Blog page</h2>
            <h3>A user is authenticated and his details are</h3>
            <h3>Name : { data && data.user.name}</h3>
            <h3>Email : { data && data.user.email}</h3>
        </div>
    )
}

export const getServerSideProps = async (context) =>{
    const session = await getSession(context)

    if(!session){
        return{
            redirect : {
                destination : `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent : false
            }
        }
    }
    return{
        props : {
            session
        }
    }
}