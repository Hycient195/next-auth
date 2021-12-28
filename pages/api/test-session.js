/** Working with securing API routes */

import { getSession } from 'next-auth/react'

export default async function ( req, res ){
    const session = await getSession({ req })

    if(!session){
        res.status(401).json({ message : 'User is unauthenticated while working with securing API routes'})
    }else{
        res.status(200).json({ message : 'authentication succuss in securing API routes', session})
    }
}