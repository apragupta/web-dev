import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const calcLikes = (tuit) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        if(tuit.liked){
            return tuit.stats.likes -1
        }
        else{
            return tuit.stats.likes + 1
        }

    }

    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment me-1"> { tuit.stats && tuit.stats.comments} </i>
            <i className="fas fa-retweet me-1"> { tuit.stats && tuit.stats.retuits} </i>
            <span onClick={() => updateTuit(dispatch, {
                    ...tuit, stats: {...tuit.stats, likes: calcLikes(tuit)}, liked: !tuit.liked}
             )}>
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

