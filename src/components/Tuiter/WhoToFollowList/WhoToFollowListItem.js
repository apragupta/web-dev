const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: './img/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 },



                             }
    ) => {
    return(        
        <li className="list-group-item d-flex  align-items-center m-0 py-0 " >
            <div className="col-xxl-3 col-xl-3 col-lg-3 h-auto " >

                <img src={who.avatarIcon} className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-xxl-6 col-xl-5 col-lg-5 mr-auto p-0 ">
                <p className="fw-bold m-0"> {who.userName}
                    <i className="fas fa-check-circle "></i> </p>
                <p className="wd-fg-color-lightgray m-0">@{who.handle}</p>
            </div>
            
            <div className="col-xxl-3 col-xl-4 col-lg-4 ml-auto ">
                <button className="btn btn-primary  rounded-pill w-100 h-auto">
                    Follow
                </button>

            </div>
        </li>);
}
export default WhoToFollowListItem;