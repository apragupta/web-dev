import React from "react"
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats.js";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        <div className="list-group-item d-flex   m-0 py-2 ">
            <div className="col-xxl-1 h-auto " >

                <img src={tuit["avatar-image"]} className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-xxl-11 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                <div>
                    <p>
                    <span className="fw-bold m-0"> {tuit.postedBy.username}
                    <span> </span>
                    </span>
                    <span className="m-0" style={{color: "rgb(82, 88, 92)"}}>@{tuit.handle}</span>
                    </p>
                </div>


                <button onClick={() =>
                    deleteTuit(tuit)} className="btn btn-danger align-self-center fa-pull-right rounded-pill p-0"
                        style={{"background-color":"transparent", "border": "0"}}>
                    x
                </button>


            </div>

                <p>
                    {tuit.tuit}
                </p>
                <TuitStats tuit = {tuit}/>





            </div>
                {/*Todo - likes,comments etc maybe image/embedding-*/}




        </div>);
};

export default TuitListItem;