import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (

            <ul className="list-group">
            <li className=" list-group-item rounded-top p-2 m-0  " key = {0}>
                <strong>Who to follow</strong>
            </li>
            
             {
        who.map((who,index) => {
            return(<WhoToFollowListItem who = {who} key = {index}/>);})}
            </ul>

)}
export default WhoToFollowList;
