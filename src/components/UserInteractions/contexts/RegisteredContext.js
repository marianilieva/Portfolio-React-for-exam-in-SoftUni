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
                    if (localRegister.email == registeredState[i].email)  {
                        exists = true;
                    }
                }
                if (!exists) {
                    const response = async (localRegister) => {
                        await fetch('http://localhost:3030/users/register', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify ({
                                email : localRegister.email,
                                password : localRegister.password
                            })
                        })
                        .then (data => data.json())
                        .then (res => console.log(res))
                        {/*}.then ( r => return state.concat(localRegister));*/}
                    }
                }
                else    {
                    alert('Existing e-mail address');
                    return state;
                }
            });
        }
        else {
            alert ("Passwords don't match");
        }
    }

    return (
        <RegisteredContext.Provider value={{
            onRegisterSubmit: onRegisterSubmit
        }}>
            {children}
        </RegisteredContext.Provider>
    );
}