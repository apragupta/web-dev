import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <!--Search bar-->
        <div class=" row  m-0">

            <div class=" col-11 px-0  pb-1 ">
            <div class="input-group border border-2 rounded-pill pe-3 bg-white">
                <div class="input-group-prepend border-0">
                    <button  type="button" class="btn "><i class="fa fa-search "></i></button>
                </div>
                <input type="search" placeholder="Search Twitter"  class="form-control  border-0">
            </div>
            </div>
            <div class=" col-1 px-0  d-flex flex-row justify-content-end">
                <button  type="button " class="btn  p-0">
                    <i class="fa fa-cog fa-2x settings-color"  ></i>
                    </i></button>
            </div>
        </div>

        <!--Middle Tab-->
        <div class=" row py-1 m-0">
            <ul class="nav nav-tabs ">
                <li class="nav-item">
                    <a class="nav-link active" href="../for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="../sports.html" >Sports</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link  " href="../entertainment.html" >
                        <div class=" d-none d-md-block">Entertainment</div></a>
                </li>
            </ul>


        </div>

        <!--Image-->
        <div class="pt-1">
            <img class="w-100 h-auto" src="../img/spacex_starship.jpg">
            <h2 class="wd-text-over-img ">
                SpaceX's Starship
            </h2>
        </div>


        <!--List of Tuits-->
        ${PostSummaryList()}`)
}

export default ExploreComponent;