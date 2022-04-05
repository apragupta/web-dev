import React from "react"

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    console.log(window.location.pathname)
    return(
        <div>
    <div className="list-group  p-0">
         <a href="./tuit.html" className={`list-group-item list-group-item-action ${active === 'tuit' ? 'active' : ''}`}>
             <i className="fab fa-twitter"></i>
         </a>

         <a href="../tuiter/home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
             <i className="fa fa-home"></i> <span className="d-xl-inline d-none"> Home </span>
         </a>

        <a href="../tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
        <i className="fa fa-hashtag"></i> <span className="d-xl-inline d-none">Explore</span>
        </a>

         <a href="../notifications.html" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
             <i className="fa fa-bell"></i> <span className="d-xl-inline d-none">Notifications</span>
         </a>

        <a href="../messages.html" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
            <i className="fa fa-envelope"></i> <span className="d-xl-inline d-none">Messages</span>
        </a>

        <a href="../bookmarks.html" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
            <i className="fa fa-bookmark"></i> <span className="d-xl-inline d-none">Bookmarks</span>
        </a>

        <a href="../lists.html" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
            <i className="fa fa-list"></i> <span className="d-xl-inline d-none">Lists</span>
        </a>


        <a href="../profile.html" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
            <i className="fa fa-user"></i> <span className="d-xl-inline d-none">Profile</span>
        </a>

        <a href="../more.html" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                                <span className="fa-stack fa-1x" style={{"fontSize": "0.5em"}}>
                                  <i className="fas fa-circle fa-stack-2x"></i>
                                  <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                                </span>
            <span className="d-xl-inline d-none">More</span>
        </a>



    </div>
    <div className="py-2 ">
        <button className="  btn btn-primary btn-block rounded-pill w-100 h-auto mx-auto px-0">
            Tweet
        </button>
    </div>
</div>
        )

};


export default NavigationSidebar;





