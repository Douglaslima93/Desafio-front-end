import { createContext, useState } from "react";
import React from "react";

export const UserNameContext = createContext({});

export function UserNameProvider({children}) {
    const [name, setName] = useState('')
    const [acertos, setAcertos] = useState(0)

    function handleSetname(name) {
        setName(name)
    }

    function handleSetacertos() {
        if(acertos < 5) {
            setAcertos((prev) => prev + 1)
        }
    }

    useState(() => {
        setAcertos(0)
    },[])

    return (
        <UserNameContext.Provider value={{name, handleSetname, acertos, handleSetacertos}}>
            {children}
        </UserNameContext.Provider>
    )
}