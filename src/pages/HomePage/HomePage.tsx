import { Alert, Container, Snackbar } from '@mui/material';
import { PostCard } from 'components';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "hooks/useAuth";

const HomePage = () => {
    const { state } = useLocation();
    const { accessToken } = useAuth();
    const [toastOpened, setToastOpened ] = useState<boolean>(!!state?.username);

    const closeToast = () => {
        setToastOpened(false);
        delete state.username;
    }

    return (
        <Container sx={{ marginTop: "20px"}}>
            <Snackbar open={toastOpened} onClose={closeToast} autoHideDuration={2000}>
                <Alert severity="success">User {state?.username} created.</Alert>
            </Snackbar>
            <PostCard title="Title Placeholder" description="Very long text" image='' />
            <p style={{textAlign: "center"}}>No posts to display</p>
        </Container>
    );
};

export default HomePage;