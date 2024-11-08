import React ,{ createContext} from "react";

const UserNameContext = createContext();

export default UserNameContext;



// Import this context on the top 

import UserNameContext from 'UserNameContext';

function HomePage(){
    return(
        <UserNameContext.Provider value="Arun">
            <Header/>
            {/* 
            here you can call multiple component and this value automatially passed to those component 
             */}
        </UserNameContext.Provider>
    )
}

import { useContext } from "react";
// import UserNameContext from 'UserNameContext'

function Header(){
    const userName = useContext(UserNameContext)
    return(<div>
        Welcome {userName} 
    </div>)
}


