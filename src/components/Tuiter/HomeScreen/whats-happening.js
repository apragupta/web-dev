import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";



const WhatsHappening = () => {
    let [newTuit, setNewTuit]
        = useState({
        tuit: ''
    });

    const dispatch = useDispatch();

    return (

        <div className="list-group-item d-flex  py-2 border-0 align-content-end"style={{backgroundColor: "black"}}>
            <div className="col-2 h-auto pt-2 pe-2 rat " >

                <img src="https://i.imgur.com/dUUJ6Gm.jpeg" className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-10 h-auto   ">
                      <textarea
                          // Styling for what's happening insipired by Professor's repo
                          value={newTuit.tuit}
                          onChange={(event) =>
                              setNewTuit({
                                  ...newTuit, tuit: event.target.value
                              })}
                          className="form-control "
                          style={{color: "white",
                              padding: "0px",
                              paddingTop: "20px",
                              backgroundColor: "black",
                              borderBottom: "solid",
                              borderBottomWidth: "1px",
                              borderColor: "rgb(82, 88, 92)"
                              }}
                          placeholder="What's happening?">
                      </textarea>
                    <div className="d-flex justify-content-between  w-100">
                        <div className="d-inline-flex mt-2 align-self-auto p-0">
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </div>
                        <button onClick={() => {createTuit(dispatch,newTuit);
                                                setNewTuit({...newTuit, tuit: ""})}} className="btn btn-primary rounded-pill mt-2">
                            Tuit
                        </button>
                    </div>


                </div>
            </div>



    );
}
export default WhatsHappening;

