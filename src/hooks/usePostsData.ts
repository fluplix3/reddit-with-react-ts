import axios from "axios";
import { useState, useEffect } from "react";

interface IPostsData {
    postsData?: []
}

export function usePostsData() {
    const [data, setData] = useState<IPostsData>({});

    useEffect(() => {
        axios.get('https://www.reddit.com/r/redditdev/best.json?limit=5&sr_detail=true')
            .then((resp) => {
                const postsData = resp.data.data.children;
                setData({ postsData: postsData });
            })
            .catch(console.log);
    }, [])

    return [data]
}
