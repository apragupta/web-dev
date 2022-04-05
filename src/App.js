import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/Tuiter/HomeScreen";
function App() {
    return (

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs" exact={true} element={<Labs />} />
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>

                            <Route index
                                   element={<HomeScreen/>}/>

                            <Route path = "home"
                                   exact={true}
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreComponent/>}/>
                            <Route path="notifications"
                                   element={<ExploreComponent/>}/>


                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>


    );
}

export default App;



