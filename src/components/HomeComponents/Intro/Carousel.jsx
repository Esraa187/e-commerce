import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phone from '../../../images/ph.jpeg';
import su from '../../../images/sub.png';
import i1 from '../../../images/i1-removebg-preview.png'
import i3 from '../../../images/i3-removebg-preview.png'
import i4 from '../../../images/i4-removebg-preview.png'
import './Carousel.css';

const slides = [
    { src: phone, subImg: su, title: "Up to 10% off Voucher", text: "iPhone 14 Series", shop: "Shop Now" },
    { src: i1, subImg: su, title: "Up to 20% off Voucher", text: "Over-Ear Headphones", shop: "Shop Now" },
    { src: i3, subImg: su, title: "Up to 5% off Voucher", text: "Gaming Mouse", shop: "Shop Now" },
    { src: i4, subImg: su, title: "Up to 15% off Voucher", text: "4k Old Monitor", shop: "Shop Now" },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, autoplaySpeed: 1500 } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: false } },
    ],
};

function Carousel() {
    return (
        <div className='col-md-8 col-lg-9 border-start pt-4 '>
            <Slider {...settings} className=' mx-auto slider pt-4'>
                {slides.map((slideitem, i) => (
                    <div key={i} className="container">
                        <div className="row g-0 bg-black align-items-center">
                            <div className="col-12 col-md-6 text-light ps-5 py-3">
                                <div className="d-flex align-items-center">
                                    <img src={slideitem.subImg} className="subImg me-1 me-lg-3" alt="Sub" />
                                    <span>{slideitem.text}</span>
                                </div>
                                <h1 className="py-3 w-100 fs-sm-4 fs-md-1 ">{slideitem.title}</h1>
                                <p href="#" className="d-inline-flex align-items-center">
                                    <span className='border-bottom'>{slideitem.shop}</span> <i className="fa-solid fa-arrow-right ps-2"></i>
                                </p>
                            </div>
                            <div className="col-12 col-md-6  my-auto ">
                                <div className="carousel-image-container">
                                    <img src={slideitem.src} alt={`Slide ${i + 1}`} loading="lazy" className='img-fluid w-100 h-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
