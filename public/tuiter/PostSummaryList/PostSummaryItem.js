const PostSummaryItem = (post) => {
    return(`<div class="row border border-1  border-secondary bg-light p-2 m-0">
            <div class="col-xxl-10 col-9 ">
                <p class="wd-topic-time-num-tweets">
                    ${post.topic}
                </p>
                <p class="wd-account-name">
                    ${post.userName}
                    <i class="fas fa-check-circle "></i>
                    <span class="wd-topic-time-num-tweets">
                        - ${post.time}
                    </span>
                </p>
                <p class="wd-account-summary">
                ${post.title}
                </p>
            </div>
            <div class="col-xxl-2 col-3 p-1">
                <img class = "rounded-3 w-100 h-auto" src="${post.image}">
            </div>

        </div>`);
}

export default PostSummaryItem;