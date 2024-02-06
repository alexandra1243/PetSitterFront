import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='mt-10 w-8/12 mx-auto'>
      <div className=''>
        <Slider {...settings}>
          {/* <div className='bg-green-300 h-48'></div>
          <div className='bg-red-300 h-48'></div>
          <div className='bg-cyan-300 h-48'></div>
          <div className='bg-purple-300 h-48'></div>
          <div className='bg-yellow-300 h-48'></div> */}
          <div>
            <img src='https://www.freewebheaders.com/wp-content/gallery/dogs/couple-of-bernese-mountain-dogs-in-floral-field-web-header.jpg' alt='Slide 1' />
          </div>
          <div >
            <img src='https://www.freewebheaders.com/wp-content/gallery/dogs/cute-chinese-pug-dog-website-header.jpg' alt='Slide 2' />
          </div>
          <div>
            <img src='https://www.freewebheaders.com/wp-content/gallery/dogs//german-shepherd-dog-and-puppy-website-header.jpg' alt='Slide 3' />
          </div>
          <div>
            <img src='https://www.freewebheaders.com/wp-content/gallery/dogs//golden-retriever-puppy-relaxing-on-white-cat-web-header.jpg' alt='Slide 4' />
          </div>
        </Slider>
        <div className='flex mt-20 items-center'>
          <div className='w-4/12'>
            <div className='cursor-pointer text-white border border-1 w-fit px-4 py-1 rounded-md my-5 hover:text-cyan-900 hover:bg-white transition-all'>Button 1</div>
            <div className='cursor-pointer text-white border border-1 w-fit px-4 py-1 rounded-md my-5 hover:text-cyan-900 hover:bg-white transition-all'>Button 2</div>
            <div className='cursor-pointer text-white border border-1 w-fit px-4 py-1 rounded-md my-5 hover:text-cyan-900 hover:bg-white transition-all'>Button 3</div>
            <div className='cursor-pointer text-white border border-1 w-fit px-4 py-1 rounded-md my-5 hover:text-cyan-900 hover:bg-white transition-all'>Button 4</div>
            <div className='cursor-pointer text-white border border-1 w-fit px-4 py-1 rounded-md my-5 hover:text-cyan-900 hover:bg-white transition-all'>Button 5</div>
          </div>
          <div className='w-8/12 text-white text-xl font-medium text-center font-protest-riot'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
