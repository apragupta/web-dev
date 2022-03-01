import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            
            <div class=" border border-secondary bg-light rounded-top p-1 m-0  ">
                <strong>Who to follow</strong>
            </div>
            
             ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')}
             

            
            
`); }

export default WhoToFollowList;
