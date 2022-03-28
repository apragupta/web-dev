import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <div class=" list-group-item rounded-top p-2 m-0  ">
                <strong>Who to follow</strong>
            </div>
            
             ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')}
             </ul>

            
            
`); }

export default WhoToFollowList;
