// Login.js
import { loginSuccess, loginFailure } from "../redux/Auth/authAction";
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            const res = await fetch(`https://reqres.in/api/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username, password })
            });
            if (res.ok) {
                const data = await res.json();
                loginSuccess(data.token);
                console.log(data.token);
                navigate('/quiz');
            } else {
                loginFailure();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' value={username} onChange={(e) => setUsername(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={login}>Submit</Button>
        </FormControl>
    )
}
