import React from 'react'

const Test = () => {
  return (
    <div class="menu-wrap">
        <nav class="menu-nav">
            <div class="logo"><a href="index.html"><img src="assets/img/logo/naftmak.svg" alt=""></a></div>
            <div class="header-form">
                <form action="#">
                    <button><i class="flaticon-search"></i></button>
                    <input type="text" placeholder="Search Artwork">
                </form>
            </div>
            <div class="navbar-wrap main-menu d-none d-lg-flex">
                <ul class="navigation">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="nft-marketplace.html">Explore</a></li>
                    <li><a href="collections.html">Collection</a></li>
                    <li class="menu-item-has-children"><a href="#">Pages</a>
                        <ul class="submenu">
                            <li><a href="activity.html">Activity</a></li>
                            <li><a href="category.html">Category</a></li>
                            <li><a href="ranking.html">Ranking</a></li>
                            <li><a href="creators.html">Creators</a></li>
                            <li><a href="market-single.html">Market Single</a></li>
                            <li><a href="nft-live-bidding.html">Live Bidding</a></li>
                            <li><a href="create-item.html">Create Item</a></li>
                            <li><a href="author-profile.html">Author Profile</a></li>
                            <li><a href="login-register.html">Login &amp; Register</a></li>
                        </ul>
                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                    <li class="menu-item-has-children"><a href="#">Blog</a>
                        <ul class="submenu">
                            <li><a href="blog.html">Our Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                </ul>
            </div>
            <div class="header-action d-none d-md-block">
                <ul>
                    <li class="header-btn"><a href="connect-wallets.html" class="btn">Wallet Connect</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Test