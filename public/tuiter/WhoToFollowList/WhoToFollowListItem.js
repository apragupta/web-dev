const WhoToFollowListItem = (who) => {
    return(`        
        <div class="list-group-item d-flex  align-items-center m-0 py-0 ">
            <div class="col-xxl-3 col-xl-3 col-lg-3 h-auto  " >

                <img src="${who.avatarIcon}" class = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" >
            </div>
            <div class="col-xxl-6 col-xl-5 col-lg-5 mr-auto p-0 ">
                <p class="fw-bold m-0"> ${who.userName}
                    <i class="fas fa-check-circle "></i> </p>
                <p class="wd-fg-color-lightgray m-0">@${who.handle}</p>
            </div>
            
            <div class="col-xxl-3 col-xl-4 col-lg-4 ml-auto ">
                <button class="btn btn-primary  rounded-pill w-100 h-auto">
                    Follow
                </button>

            </div>
        </div>`);
}
export default WhoToFollowListItem;