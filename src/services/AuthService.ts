export function registerUser(data: FormData) {
    return fetch(process.env.REACT_APP_API_URL as string + "/register", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data.entries()))
    });
}

export function loginUser(data: FormData) {
    return fetch(process.env.REACT_APP_API_URL as string + "/login", {
        method: "POST",
        body: data
    });
}

export function confirmAccount(userId: string, code: string) {
    return fetch(process.env.REACT_APP_API_URL as string + `/confirmation?userId=${userId}&code=${encodeURIComponent(code)}`);
}

export function logout() {
    localStorage.removeItem("access_token");
}

// export function logout(token: string) {
//     return fetch(process.env.REACT_APP_API_URL as string + "/logout", {
//         method: "POST",
//         headers: {
//             Authorization: "Bearer " + token
//         }
//     });
// }