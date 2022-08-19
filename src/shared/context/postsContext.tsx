import React from "react";
import { usePostsData } from "../../hooks/usePostsData"; 

export interface IPostsContextData {
    postsData?: [] 
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider( {children} : { children: React.ReactNode }){
    const [data] = usePostsData();

    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    );
}