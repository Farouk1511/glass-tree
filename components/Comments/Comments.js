import React from "react";
import Comment from "./Comment";

const Comments = ({comments}) => {

    return(
        comments.map(({text,user}) => (
           <Comment text={text} user={user} key={text}/>
        ))
    )
}

export default Comments