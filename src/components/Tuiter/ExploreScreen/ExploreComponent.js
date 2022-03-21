import React from "react";
import PostSummaryList from "./../PostSummaryList";



const ExploreComponent = () => {
    return(

        <div>
            <div className=" row  m-0">
    
                <div className=" col-11 px-0  pb-1 ">
                <div className="input-group border border-2 rounded-pill pe-3 bg-white">
                    <div className="input-group-prepend border-0">
                        <button  type="button" className="btn "><i className="fa fa-search "></i></button>
                    </div>
                    <input type="search" placeholder="Search Twitter"  className="form-control  border-0"/>
                </div>
                </div>
                <div className=" col-1 px-0  d-flex flex-row justify-content-end">
                    <button  type="button " className="btn  p-0">
                        <i className="fa fa-cog fa-2x settings-color"  ></i>
                        </button>
                </div>
            </div>
    

            <div className=" row py-1 m-0">
                <ul className="nav nav-tabs ">
                    <li className="nav-item">
                        <a className="nav-link active" href="../for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="../sports.html" >Sports</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link  " href="../entertainment.html" >
                            <div className=" d-none d-md-block">Entertainment</div></a>
                    </li>
                </ul>
    
    
            </div>



            <div className="pt-1">
                <img className="w-100 h-auto" src="./img/spacex_starship.jpg"/>
                <h2 className="wd-text-over-img ">
                    SpaceX's Starship
                </h2>
            </div>
            
    
    

            {PostSummaryList()}
        </div>
)
}

export default ExploreComponent;