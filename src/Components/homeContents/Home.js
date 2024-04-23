import React, { useState, useEffect } from 'react';
import onepieceLogo from './onpieceLogo.webp';
import onepiece from './onepiece.png';
import cuterLogo from './cuterLogo.png'
import cuter from './cuter.png';
import theWrongWay from './theWrongWay.png';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [onepiece, theWrongWay, cuter];
  const texts = [
    { name: 'Anime1 name',logo:onepieceLogo, genre: 'comedy adventure shonen', description: 'For cultivation prodigy Wang Ling, defeating a demon king at age 6 is nothing compared to fitting in at highschool. And now with supernatural threats on the rise, Wang may have to put his' },
    { name: 'Anime2 name',logo:onepieceLogo, genre: 'comedy fantesy shonen', description: 'For cultivation prodigy Wang Ling, defeating a demon king at age 6 is nothing compared to fitting in at highschool. And now with supernatural threats on the rise, Wang may have to put his' },
    { name: 'Anime3 name',logo:cuterLogo, genre: 'comedy fantesy shonen', description: 'For cultivation prodigy Wang Ling, defeating a demon king at age 6 is nothing compared to fitting in at highschool. And now with supernatural threats on the rise, Wang may have to put his' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <>
      <div className='pt-[5vh]'>
        <div className="flex justify-center sm:justify-normal h-screen w-full" style={{ backgroundImage: `url(${bgImages[bgIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='pt-[45vh] px-[2vw] absolute flex justify-between w-full'>
            <span class="material-symbols-outlined text-white cursor-pointer hover:text-gray-600" onClick={() => setBgIndex((bgIndex + bgImages.length - 1) % bgImages.length)}>
              arrow_back_ios
            </span>
            <span class="material-symbols-outlined text-white cursor-pointer hover:text-gray-600" onClick={() => setBgIndex((bgIndex + 1) % bgImages.length)}>
              arrow_forward_ios
            </span>
          </div>
          <div className='flex justify-center sm:justify-normal flex-col pt-[40vh] sm:pt-[25vh] lg:pt-[20vh] pl-[5vw] '>
            <div className='py-[0.5rem] w-[80vw] sm:w-[30vw] lg:w-[20vw] text-white text-2xl flex justify-center'><img src={texts[bgIndex].logo} alt="onepiece Logo" /></div>
            <div className='py-[0.5rem] w-[60vw] sm:w-[30vw] text-gray-100 text-sm'>{texts[bgIndex].genre}</div>
            <div className='py-[0.5rem] w-[30vw] h-[25vh] text-white text-sm md:text-md hidden lg:block'>
              {texts[bgIndex].description}
            </div>
            <div className='flex my-4'>
              <div className='bg-orange-500 w-[80vw] sm:w-fit  px-2 py-1 font-bold text-sm flex cursor-pointer hover:bg-orange-400'>
                <span class="material-symbols-outlined text-[2rem]">
                play_arrow
                </span>
                <p className='py-1'>START WATCHING S1 E1</p>
              </div>
              <div className='mx-2 w-[2.5rem] border-2 border-orange-500 flex justify-center items-center'>
                <span class="material-symbols-outlined text-orange-400">
                bookmark
                </span>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
