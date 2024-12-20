import { FaMobileAlt, FaLaptop, FaTshirt, FaShoePrints, FaTabletAlt } from 'react-icons/fa';
import { GiLipstick, GiDelicatePerfume, GiSoap, GiShoppingCart, GiHighHeel, GiBedLamp, GiCook, GiSmartphone, GiSoccerBall, GiAmpleDress, GiBigDiamondRing, GiSunglasses } from 'react-icons/gi';
import { SlHandbag } from "react-icons/sl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { FaCarRear, FaMotorcycle } from "react-icons/fa6";
import { VscWatch } from "react-icons/vsc";
import { PiWatchDuotone } from "react-icons/pi";


const categoryIcons = {
    beauty: <GiLipstick />,
    fragrances: <GiDelicatePerfume />,
    furniture: <FontAwesomeIcon icon={faChair} />,
    groceries: <GiShoppingCart />,
    "home-decoration": <GiBedLamp />,
    "kitchen-accessories": <GiCook />,
    laptops: <FaLaptop />,
    "mens-shirts": <FaTshirt />,
    "mens-shoes": <FaShoePrints />,
    "mens-watches": <VscWatch />,
    "mobile-accessories": <GiSmartphone />,
    motorcycle: <FaMotorcycle />,
    "skin-care": <GiSoap />,
    smartphones: <FaMobileAlt />,
    "sports-accessories": <GiSoccerBall />,
    sunglasses: < GiSunglasses />,
    tablets: <FaTabletAlt />,
    tops: <FaTshirt />,
    vehicle: <FaCarRear />,
    "womens-bags": <SlHandbag />,
    "womens-dresses": <GiAmpleDress />,
    "womens-jewellery": <GiBigDiamondRing />,
    "womens-shoes": <GiHighHeel />,
    "womens-watches": <PiWatchDuotone />
};
export default categoryIcons;