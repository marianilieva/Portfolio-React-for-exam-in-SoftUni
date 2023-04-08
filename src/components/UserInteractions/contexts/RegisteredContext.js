import { useState, createContext } from "react";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState([]); 

    const onRegisterSubmit = (e, localRegister, form) => {
        e.preventDefault();
        if (localRegister.password == localRegister.confirmPass)    {
            setRegisteredState ((state) => { 
                let exists = false;
                for (let i = 0; i < registeredState.length; i++)    {
                    if (localRegister.email == registeredState[i].email)  {
                        exists = true;
                    }
                }
                if (!exists) {
                    fetch('http://localhost:3030/users/register', {
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
                    .then ( r => {return state.concat(r)})
                    .catch(error => console.error('Error:', error))
                }
                else    {
                    alert('Existing e-mail address');
                    return state;
                }
            });
        }
        else {
            alert ("Passwords don't match");
        }console.log(registeredState);
    }

    return (
        <RegisteredContext.Provider value={{
            onRegisterSubmit: onRegisterSubmit
        }}>
            {children}
        </RegisteredContext.Provider>
    );
}