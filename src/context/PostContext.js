import { createContext,useState } from "react";
export const PostContext=createContext(null)

function Post({children}){
    const[postDeatils,setPostDetails]=useState()
    return(
    <PostContext.Provider value={{postDeatils,setPostDetails}}>
       {children} 
    </PostContext.Provider>
    )
}
export default Post
