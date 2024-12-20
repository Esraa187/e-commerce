import './banner.css'
import banner from '../../../images/radio.png'
function Banner() {
    return (
        <div className="container">
            <div className="row bg-black align-items-center py-3">
                <div className="col-12 col-md-6 ps-5">
                    <p className='top-banner'>Categories</p>
                    <h2 className='text-light banner-title'>Enhance Your Music Experience</h2>
                    <div className='banner-time my-5'>
                        <div>
                            <p className='m-0 num'>23</p>
                            <p>Hours</p>
                        </div>
                        <div>
                            <p className='m-0 num'>05</p>
                            <p>Days</p>
                        </div>
                        <div>
                            <p className='m-0 num'>59</p>
                            <p>Minutes</p>
                        </div>
                        <div>
                            <p className='m-0 num'>35</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button className='buy-now'>Buy Now!</button>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="banner-img ">
                        <img src={banner} alt={`Slide Bnner`} className='img-fluid w-100'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
