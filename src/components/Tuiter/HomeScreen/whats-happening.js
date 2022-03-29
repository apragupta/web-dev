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

            <div className = "d-flex">
      <textarea
          // Styling for what's happening insipired by Professor's repo
                value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}
                className="form-control"
                style={{width: "100%", color: "white",
                    padding: "0px",
                    paddingTop: "15px",
                    backgroundColor: "black"}}
                placeholder="What's happening?">
      </textarea>
        <button onClick={tuitClickHandler} className="btn btn-primary align-self-center fa-pull-right rounded-pill h-25">
            Tuit
        </button>
            </div>
    );
}
export default WhatsHappening;

