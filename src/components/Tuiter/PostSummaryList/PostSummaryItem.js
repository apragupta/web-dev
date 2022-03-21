import React from "react"

const PostSummaryItem = (
    {
        post = {
            "topic" : "Web Developement",
            "userName" : "ReactJS",
            "time" : "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image" : "./img/reactjs.jpg"
        }
    }
) => {
    return(
        <div className="list-group-item d-flex justify-content-between  p-2 m-0">
            <div className="col-xxl-10 col-9 ">
                <p className="wd-topic-time-num-tweets">
                    {post.topic}
                </p>
                <p className="wd-account-name">
                    {post.userName}
                    <i className="fas fa-check-circle "></i>
                    <span className="wd-topic-time-num-tweets">
                        - {post.time}
                    </span>
                </p>
                <p className="wd-account-summary">
                {post.title}
                </p>
            </div>
            <div className="col-xxl-2 col-3 p-1">
                <img className = "rounded-3 w-100 h-auto" src={post.image}/>
            </div>

        </div>);
};

export default PostSummaryItem;