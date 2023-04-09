import { Alert, Button, Container, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { FormEvent, useState } from 'react';
import { loginUser } from "services/AuthService";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import * as storage from 'utils/storageHelper';

const LoginPage = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ errorMessage, setErrorMessage ] = useState<string>();
    const { setAccessToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await loginUser(formData);
        const response = await result.json();
    
        if(result.ok){
            setAccessToken(response.token);
            storage.setItem("access_token", response.token, true);
            navigate('/home');
        } else
            setErrorMessage(response.message);
    }

    return (
        <Container>
            <form method="post" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin='normal'
                    required
                    onChange={ e => setEmail(e.target.value)}
                    value={email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    required
                    onChange={ e => {setPassword(e.target.value)}}
                    value={password}
                />
                <Button type='submit' color='primary' variant='contained' startIcon={<SendIcon />} sx={{marginTop: "10px"}}>Send Form</Button>
                {
                    errorMessage && 
                    <Alert severity="error" sx={{marginTop: "10px"}}>{errorMessage}</Alert>
                }
            </form>
        </Container>
)};

export default LoginPage;