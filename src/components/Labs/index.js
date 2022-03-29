import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";
const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>


            <h2> LAB 7 </h2>
            <ReduxExamples/>
            <h2> LAB 6 </h2>

            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>

        </>
    )
};

export default Labs;
