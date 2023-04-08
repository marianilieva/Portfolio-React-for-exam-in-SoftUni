import { useState, createContext } from "react";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState([]);

    const onRegisterSubmit = (e, localRegister) => {
        e.preventDefault();
        if (localRegister.password == localRegister.confirmPass)    {
            setRegisteredState (state => { 
                let exists = false;
                for (let i = 0; i < registeredState.length; i++)    {
                    if (localRegister.username == registeredState[i].username)  {
                        exists = true;
                    }
                }
                if (!exists) {
                    return state.concat(localRegister);
                }
                else    {
                    return state;
                }
            });
        }
    }

    return (
        <RegisteredContext.Provider value={
            onRegisterSubmit
        }>
            {children}
        </RegisteredContext.Provider>
    );
}