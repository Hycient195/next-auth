/** Securing Pages client-side, and working with client-side authentication */

import { getSession, signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function Dashboard (){
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{   
        const securePage = async () =>{
            const session = await getSession()
            if(!session){
                signIn();
            }else{
                setLoading(false)
            }
        }
        securePage()
    },[])


    if(loading){
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <div>
            <h3 style={{textAlign : 'center'}}>Securing pages client-side and working with client-side authentication</h3>
            <h2>This the Dashboard page</h2>
        </div>
    )
}