import { useState, createContext } from "react";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState([{}]); 

    const onRegisterSubmit = (e, localRegister) => {
        e.preventDefault();
        if (localRegister.password == localRegister.confirmPass)    {
            let exists = false;
            for (let i = 0; i < registeredState.length; i++)    {
                if (localRegister.email === registeredState[i].email)  {                        
                    exists = true;
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
                    .then (data => {
                        return data.json();
                    })
                    .then (res => {
                        setRegisteredState(state => [...state, {
                            email: res.email,
                            password: res.password,
                            _id: res._id,
                            accessToken: res.accessToken
                    }]); console.log(registeredState);
                    })
                    .catch(error => console.error('Error:', error))
                }
                else    {
                    alert('Existing e-mail address');
                }
            };
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