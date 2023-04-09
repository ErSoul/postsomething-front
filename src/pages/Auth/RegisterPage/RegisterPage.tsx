import { useState, useEffect, FormEvent, FormEventHandler } from 'react';
import { Container, TextField, Button, FormHelperText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { registerUser } from 'services/AuthService';
import { useNavigate } from 'react-router-dom';

type ResponseError = {
    code: string;
    description: string;
}

const RegisterPage = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmationPassword, setConfirmationPassword] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('');
    const [errorMessagesResponse, setErrorMessagesResponse] = useState<ResponseError[]>();

    const navigate = useNavigate();

    useEffect(() => {
        errorPassword ?
            setErrorPasswordMessage("The password must match the one above")
        :
            setErrorPasswordMessage('')
    }, [errorPassword]);
    
    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await registerUser(formData);
        const response = await result.json();

        if(result.ok) {
            navigate("/", { state: { username: response.userName }});
        } else {
            setErrorMessagesResponse(response);
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    type="text"
                    fullWidth
                    margin='normal'
                    required
                    onChange={ e => setUsername(e.target.value)}
                    value={username}
                />
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
                    error={errorPassword}
                    onChange={ e => {
                        setPassword(e.target.value)
                        setErrorPassword(e.target.value !== confirmationPassword);
                    }}
                    value={password}
                />
                <TextField
                    label="Confirm Password"
                    name="confirmationPassword"
                    type="password"
                    fullWidth
                    margin='normal'
                    required
                    error={errorPassword}
                    helperText={errorPasswordMessage}
                    onChange={ e => {
                        setConfirmationPassword(e.target.value)
                        setErrorPassword(password !== e.target.value);
                    }}
                    value={confirmationPassword}
                />
                {errorMessagesResponse?.map( (error) => 
                    <FormHelperText error key={error.code}>{error.description}</FormHelperText>
                )}
                <Button type='submit' color='primary' variant='contained' startIcon={<SendIcon />} sx={{marginTop: "10px"}}>Send Form</Button>
            </form>
        </Container>
    );
}

export default RegisterPage;