import NavigationSidebar from "./../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "./../WhoToFollowList";



const ExploreScreen = () => {
    return(
    <div className="row mt-2 text-white">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2 p-3">
            {<NavigationSidebar/>}
        </div>
        <div className="  col-xxl-6  col-xl-6 col-lg-7 col-10 p-3 ">
            {<ExploreComponent/>}

        </div>


        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 p-3">
            {<WhoToFollowList/>}
        </div>

    </div>
    );
}

export default ExploreScreen;

