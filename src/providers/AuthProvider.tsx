import { UserContext, UserProps } from 'hooks/useAuth';
import { useMemo, useState } from 'react';
import * as store from 'utils/storageHelper';
import { decodeJWT } from 'utils/jwt-decoder';

type AuthProps = {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
    const [ accessToken, setAccessToken ] = useState<string|null>(() => {
        const currentToken = store.getItem("access_token");

        try {
            const decoded_token = decodeJWT(currentToken);
            if(Date.now() > decoded_token.exp)
                store.unsetItem("access_token");
        } catch (e) {
            console.log(e);
        }

        return currentToken;
    });

    const currentValue : UserProps = useMemo(
        () => ({ accessToken, setAccessToken}),
        [ accessToken ]
    );

    return (
        <UserContext.Provider value={currentValue}>
            { children }
        </UserContext.Provider>
    )
}

export default AuthProvider;