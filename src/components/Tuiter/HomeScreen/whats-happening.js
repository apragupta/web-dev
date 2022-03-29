import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });

    }
    return (

        <div className="list-group-item d-flex   m-0 py-2 "style={{backgroundColor: "black"}}>
            <div className="col-xxl-1 col-sm-1 pt-2 " >

                <img src="https://imgur.com/VP0MS6H.png" className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-xxl-11 col-sm-1 mr-auto p-0 ">
                      <textarea
                          // Styling for what's happening insipired by Professor's repo
                          value={whatsHappening}
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}
                          className="form-control"
                          style={{width: "100%", color: "white",
                              padding: "0px",
                              paddingTop: "15px",
                              backgroundColor: "black",
                              borderBottom: "solid",
                              borderBottomWidth: "1px",
                              borderColor: "rgb(82, 88, 92)"
                              }}
                          placeholder="What's happening?">
                      </textarea>
                    <button onClick={tuitClickHandler} className="btn btn-primary align-self-center fa-pull-right rounded-pill my-2">
                        Tuit
                    </button>
                </div>
            </div>



    );
}
export default WhatsHappening;

