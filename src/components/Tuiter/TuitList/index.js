import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";
import {findAllTuits} from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();


    useEffect(() => findAllTuits(dispatch), []); //useEffect is kinda like componentDidMount = it is called when the component first renders

    return (
        <ul className="p-0  list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;

