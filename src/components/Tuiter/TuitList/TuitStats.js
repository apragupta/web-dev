import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment me-1"> {tuit.stats.comments} </i>
            <i className="fas fa-retweet me-1"> { tuit.stats.retuits} </i>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>
            <i className="fas fa-external-link-alt"></i>
        </div>


);
}
export default TuitStats;

