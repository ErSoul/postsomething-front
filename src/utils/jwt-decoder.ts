import jwt from 'jwt-decode';

export type JwtToken = {
    aud: string;
    email: string;
    /**
     * Expiration date (timestampt)
     */
    exp: number;
    iss: string;
    /**
     * Person Name
     */
    name: string;
    sid: string;
}

export function decodeJWT(token: string | null | undefined){
    return jwt<JwtToken>(token??"")
}