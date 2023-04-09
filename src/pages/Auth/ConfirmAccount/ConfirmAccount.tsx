import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import { confirmAccount } from "services/AuthService";

export const ConfirmAccount = () => {
    const [ searchParams ] = useSearchParams();
    const navigate = useNavigate();
    const [ counter, setCounter ] = useState<number>(3);
    const [ allowRedirect, setAllowRedirect ] = useState<boolean>(false);

    useEffect( () => {
        confirmAccount(
            searchParams.get("userId")!,
            searchParams.get("code")!
        ).then((response) => {
            setAllowRedirect(response.ok);
        });
    }, [searchParams]);

    useEffect(() => {
        counter > 0 && setTimeout(() =>
            setCounter(counter-1)
            , 1000);

        counter <= 0 && allowRedirect && navigate("/home");
    }, [counter, allowRedirect, navigate])

    return (
        <Container>
            <h1>Redireccionando en {counter}...</h1>
        </Container>
    )
}