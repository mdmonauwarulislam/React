import React from "react"
import ContextUser from "./ContextUser"

const ContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <ContextUser.Provider value={{user, setUser}}>
            {children}
        </ContextUser.Provider>
    )
}

export default ContextProvider