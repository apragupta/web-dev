import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (

            <ul className="list-group">
            <div className=" list-group-item rounded-top p-2 m-0  ">
                <strong>Who to follow</strong>
            </div>
            
             {
        who.map(who => {
            return(<WhoToFollowListItem who = {who}/>);})}
            </ul>

)}
export default WhoToFollowList;
