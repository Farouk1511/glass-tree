import React from "react";
import Comment from "./Comment";

const Comments = ({comments}) => {

    return(
        comments.map(({content,author}) => (
            
           <Comment content={content} author={author} key={content}/>
        ))
    )
}

export default Comments