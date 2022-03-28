import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path = "/hello"
                           exact = {true}
                           element = {<HelloWorld/>}/>
                    {["/", "/labs"].map(path => (
                        <Route
                            path={path}
                            element={<Labs />}
                        />
                    ))}


                    <Route path = "/tuiter"
                           exact = {true}
                           element = {<Tuiter/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;



