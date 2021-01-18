import React, {useEffect, useState} from 'react';

function TalenProfile() {
    const [user, setUser] = useState([]);
    useEffect( ()=>{
        var userInformations = localStorage.getItem('userInformations');
        setUser(JSON.parse(userInformations));
    },[])

    return(
        <div>
            <h1>Welcome {user.name} {user.surname}</h1>
        </div>
    )
}

export default TalenProfile;