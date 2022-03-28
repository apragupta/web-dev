import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";
import React from "react";


const PostSummaryList = () => {
    return(

        <ul className="list-group  p-0">
            {
                post.map(post => {
                    return (<PostSummaryItem post={post}/>);
                })
            }
        </ul>
    )
};

export default PostSummaryList;
