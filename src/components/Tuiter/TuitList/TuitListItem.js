import React from "react"
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats.js";
import {deleteTuit} from "../../../actions/tuits-actions";


const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();


    return(
        <div className="list-group-item d-flex   m-0 py-2 ">
            <div className="col-2 h-auto pe-2" >

                <img src={tuit["avatar-image"]} className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-10 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                <div>
                    <p>
                    <span className="fw-bold m-0"> {tuit.postedBy && tuit.postedBy.username}
                    <span> </span>
                    </span>
                    <span className="m-0" style={{color: "rgb(82, 88, 92)"}}>@{tuit.handle && tuit.handle}</span>
                    </p>
                </div>


                <button onClick={() =>
                    deleteTuit(dispatch,tuit)} className="btn btn-danger align-self-center fa-pull-right rounded-pill p-0"
                        style={{"backgroundColor":"transparent", "border": "0"}}>
                    x
                </button>


            </div>

                <p>
                    {tuit.tuit}
                </p>
                <TuitStats tuit = {tuit}/>





            </div>
                {/*Todo - image/embedding-*/}




        </div>);
};

export default TuitListItem;