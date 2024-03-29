import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import auth from "../firebase.init";

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(user);
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = { email: email, name: name };
        if (email) {
            fetch(`https://electrix-manufacturer-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
}

export default useToken;