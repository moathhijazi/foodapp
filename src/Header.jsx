import React from 'react'




// import Login from './router/Login';

function Header() {
  return (

    <header>

        {/*
            LOGIN MODAL
        */}

        <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>


        {/*
            MOBILE SCREEN BARS
        */}


        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="mobile-header-bar" aria-labelledby="offcanvasScrollingLabel" style={{ width : "100%" }}>
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                <div className="logo">
                <img src="./img/gallery/logo.svg" alt="logo" />
                <span>foodapp</span>
            </div>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div className="search">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" className='form-control' placeholder='Search Food' />
                </div>
                

                <button id='login' data-bs-toggle="modal" data-bs-target="#LoginModal">
                    <i class="fa-solid fa-user"></i>
                    <span>Login</span> 
                </button>
               
            </div>
        </div>

        <nav>
            <div className="logo">
                <img src="./img/gallery/logo.svg" alt="logo" />
                <span>foodapp</span>
            </div>
            <div className="right">
                <div className="search">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" className='form-control' placeholder='Search Food' />
                </div>
                

                <button id='login' data-bs-toggle="modal" data-bs-target="#LoginModal">
                    <i class="fa-solid fa-user"></i>
                    <span>Login</span> 
                </button>
                <button id='slider' data-bs-toggle="offcanvas" data-bs-target="#mobile-header-bar" aria-controls="offcanvasScrolling">

                    <i class="fa-solid fa-bars"></i>                   
                
                </button>
            </div>
        </nav>
      
    
    

    </header>
  )
}

export default Header
