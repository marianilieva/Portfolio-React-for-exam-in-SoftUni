import { useState, createContext } from "react";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState({});

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('registeredState');
    }

    return (
        <RegisteredContext.Provider value={
            onRegisterSubmit
        }>
            {children}
        </RegisteredContext.Provider>
    );
}