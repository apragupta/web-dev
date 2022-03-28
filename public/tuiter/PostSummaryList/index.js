import post from "./post.js"
import postSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return(

        `<ul class="list-group  p-0">
        ${
            post.map(post => {
                return(postSummaryItem(post));
            }).join('')}
        </ul>`
    )
}

export default PostSummaryList;
