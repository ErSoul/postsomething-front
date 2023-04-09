import { createContext, useContext } from "react";

export type UserProps = {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserProps>({
    accessToken: null,
    setAccessToken: () => null
});

const useAuth = () => {
    return useContext(UserContext)
}

export default useAuth;