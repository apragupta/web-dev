const NavigationSidebar = () => {
    return(`
        <div class="list-group  p-0">


                <a href="../tuit.html" class=" list-group-item list-group-item-action " aria-current="true">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item list-group-item-action  ">
                    <i class="fa fa-home"></i> <span class="d-xl-inline d-none"> Home </span>


                </a>
                <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-xl-inline d-none">Explore</span>
                </a>
                <a href="../notifications.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-xl-inline d-none">Notifications</span>
                </a>
                <a href="../messages.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-xl-inline d-none">Messages</span>
                </a>
                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-xl-inline d-none">Bookmarks</span>
                </a>
                <a href="../lists.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-xl-inline d-none">Lists</span>
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-xl-inline d-none">Profile</span>
                </a>
                <a href="../more.html" class="list-group-item list-group-item-action">
                
                    <span class="fa-stack fa-1x" style= "font-size: 0.5em">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="d-xl-inline d-none">More</span>
                </a>
        </div>
        <div class="py-2 ">
            <button class="  btn btn-primary btn-block rounded-pill w-100 h-auto mx-auto px-0">
                Tweet
            </button>
        </div>
    `);
}
export default NavigationSidebar;
