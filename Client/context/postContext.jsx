import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//context
const postContext = createContext();

const PostProvider = ({ children }) => {
    //state
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([]);


    // get posts
    const getPosts = async () => {
        setLoading(false);
        try {

            const { data } = await axios.get("/posts/all");
            setLoading(false);
            setPosts(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    //initial post
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <postContext.Provider value={{ posts, setPosts }}>   {children}
        </postContext.Provider>
    );
}





export { PostProvider, postContext } 