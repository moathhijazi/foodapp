import React from 'react'



function Ads() {
  return (
    <section className='ads'>
      
      <div className="left">
        <h2>Are you starving?</h2>
        <h4>Within a few clicks, find meals that <br></br>
are accessible near you</h4>

        <div className="card-location">
            <div className="card-head">

                <div className="like-btn">
                    <i class="fa-solid fa-motorcycle"></i>
                    <span>Delivery</span>
                </div>

            </div>
            <div className="card-body">
                <div className="input">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" className="form-control" placeholder='Enter your address'/>
                </div>
                <button id='address-btn'>Send</button>
            </div>
        </div>
      </div>
      <div className="right">
        <img src="img/gallery/hero-header.png" alt="" />
      </div>

    </section>
  )
}

export default Ads
