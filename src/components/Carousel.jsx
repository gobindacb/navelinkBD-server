
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../assets/Coxs-Bazar1.jpg';
import image2 from '../assets/jaflong2.jpg';
import image3 from '../assets/rangamati1.jpg';
import image4 from '../assets/munshiganj1.jpg';
import image5 from '../assets/kantoji1.jpg';
import image6 from '../assets/Sundarban2.jpg';
import image7 from '../assets/saint1.jpg';
import image8 from '../assets/sajek1.jpg';
import image9 from '../assets/kustia2.jpg';
import image10 from '../assets/panchagarh1.jpg';
import image11 from '../assets/dhaka1.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


export default function Carousel() {


  return (
    <div className='container px-6 py-2 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1} text='CoxsBazar'/></SwiperSlide>
        <SwiperSlide><Slide image={image2} text='Jaflong'/></SwiperSlide>
        <SwiperSlide><Slide image={image3} text='Rangamati'/></SwiperSlide>
        <SwiperSlide><Slide image={image4} text='Munshiganj'/></SwiperSlide>
        <SwiperSlide><Slide image={image5} text='Kantojir Mandir'/></SwiperSlide>
        <SwiperSlide><Slide image={image6} text='Sundarban'/></SwiperSlide>
        <SwiperSlide><Slide image={image7} text='Saint Martin'/></SwiperSlide>
        <SwiperSlide><Slide image={image8} text='Sajek'/></SwiperSlide>
        <SwiperSlide><Slide image={image9} text='Kustia'/></SwiperSlide>
        <SwiperSlide><Slide image={image10} text='Panchagar'/></SwiperSlide>
        <SwiperSlide><Slide image={image11} text='Dhaka'/></SwiperSlide>
      </Swiper>
    </div>
  );
}