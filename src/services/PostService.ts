export const getPosts = async (authorize: string | undefined) => {
    const posts = await fetch(process.env.REACT_APP_API_URL as string + "/");
}