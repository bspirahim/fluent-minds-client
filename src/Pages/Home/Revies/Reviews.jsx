import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Reviews.css'

const Reviews = () => {
    return (
        <div className=''>
            
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/review/Review_bg.jpg")' }}
                    >
                        <div className='text-center max-w-screen-lg mx-auto text-white'>
                            <div className='w-28 mx-auto border-2 border-[#F9AE39] rounded-full'>
                                <img className='w-28 mx-auto' src="/images/customers/player-1.png" alt="" />
                            </div>
                            <div>
                                <div className='py-4'>
                                    <p className='font-bold text-xl'>Mujahid</p>
                                    <p>Data Scientist</p>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquam perspiciatis repellendus asperiores soluta temporibus incidunt odit similique quod illo, iusto amet vitae cum quo sit quaerat reprehenderit at! Ea!</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/review/Review_bg.jpg")' }}
                    >
                        <div className='text-center max-w-screen-lg mx-auto text-white'>
                            <div className='w-28 mx-auto border-2 border-[#F9AE39] rounded-full'>
                                <img className='w-28 mx-auto' src="/images/customers/player-3.png" alt="" />
                            </div>
                            <div>
                                <div className='py-4'>
                                    <p className='font-bold text-xl'>Abu Sufian </p>
                                    <p>Graphic Designer</p>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquam perspiciatis repellendus asperiores soluta temporibus incidunt odit similique quod illo, iusto amet vitae cum quo sit quaerat reprehenderit at! Ea!</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/review/Review_bg.jpg")' }}
                    >
                        <div className='text-center max-w-screen-lg mx-auto text-white'>
                            <div className='w-28 mx-auto border-2 border-[#F9AE39] rounded-full'>
                                <img className='w-28 mx-auto' src="/images/customers/player-5.png" alt="" />
                            </div>
                            <div>
                                <div className='py-4'>
                                    <p className='font-bold text-xl'>Jhon Doe </p>
                                    <p>Web Developer</p>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquam perspiciatis repellendus asperiores soluta temporibus incidunt odit similique quod illo, iusto amet vitae cum quo sit quaerat reprehenderit at! Ea!</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/review/Review_bg.jpg")' }}
                    >
                        <div className='text-center max-w-screen-lg mx-auto text-white'>
                            <div className='w-28 mx-auto border-2 border-[#F9AE39] rounded-full'>
                                <img className='w-28 mx-auto' src="/images/customers/player-6.png" alt="" />
                            </div>
                            <div>
                                <div className='py-4'>
                                    <p className='font-bold text-xl'>Maruf Ahmed </p>
                                    <p>Web Developer</p>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquam perspiciatis repellendus asperiores soluta temporibus incidunt odit similique quod illo, iusto amet vitae cum quo sit quaerat reprehenderit at! Ea!</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Reviews;