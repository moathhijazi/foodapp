import React from 'react'

function Items() {
    const newLocal = "products"
    function scrollItem(position) {
        if(position === 'left') {
            document.querySelector('.items-father').scrollBy({left : -560 , behavior: "smooth"})

        }else{
            document.querySelector('.items-father').scrollBy({left : 560 , behavior: "smooth"})

        }
    }
  return (
    <section className='items'>
      <h2>Popluar Items</h2>

      <div className={newLocal}>
        <button id='scroll-left' onClick={() => {scrollItem('left')}}>
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <ul className='items-father'>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            
            <li id='product'>
                <div className="top">
                    <img src="img/gallery/thai-soup.png" alt="" />
                </div>
                <div className="bottom">
                    <span className='item-title'>Lorem ipsum dolor sit amet.</span>
                    <div className='address'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>your address</span>
                    </div>
                    <span>
                        <i className='fa-solid fa-dollar'></i>
                        <small>13.00</small>
                    </span>
                    <button>Order now</button>
                </div>
            </li>
            


        </ul>
        <button id='scroll-right' onClick={() => {scrollItem('right')}}>
            <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Items
