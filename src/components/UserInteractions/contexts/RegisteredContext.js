import { useState, createContext } from "react";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState([{
        email: '',
        password: '',
        _id: '',
        accessToken: ''
    }]); 

    const onRegisterSubmit = (e, localRegister) => {
        e.preventDefault();
        if (localRegister.password == localRegister.confirmPass)    {
            setRegisteredState ((state) => { 
                let exists = false;
                let result = state;
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
                    .then (res => console.log(res._id))
                    .catch(error => console.error('Error:', error))
                }
                else    {
                    alert('Existing e-mail address');
                    return result;
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