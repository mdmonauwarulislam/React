import React, {useContext} from 'react'
import ContextUser from '../context/ContextUser'

function Profile() {
    const {user} = useContext(ContextUser)

    if(!user) return <div>Please Login</div>
    
    return <div>Welcome {user.username} </div>
}

export default Profile