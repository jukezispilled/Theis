import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { HorizontalTicker } from "react-infinite-ticker";
import monkeyImage from './gigi.png'; // Import the monkey image
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import DT from './dextools.svg';
import './App.css';
import TweetButton from './TweetButton';
import Marquee from "react-fast-marquee";
import theis3 from './theis3.png'; // Import theis3 image
import theis4 from './theis4.png'; // Import theis4 image

function App() {
  const [copied, setCopied] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const newBackgroundImage = window.innerWidth >= 1024 ? theis3 : theis4;
      setBackgroundImage(newBackgroundImage);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
      <Marquee speed={150}>
        <div className='h-16 flex items-center text-[20px] lg:text-4xl font-semibold whitespace-nowrap border-y-2 border-black'>
          Megainfluencer Luke "Belmar" EXPOSED. Read more&nbsp;
          <a className="text-blue-600 underline" href="">here</a>.
          &nbsp;Megainfluencer Luke "Belmar" EXPOSED. Read more&nbsp;
          <a className="text-blue-600 underline" href="">here</a>.
          &nbsp;Megainfluencer Luke "Belmar" EXPOSED. Read more&nbsp;
          <a className="text-blue-600 underline" href="">here</a>.
          &nbsp;
        </div>
      </Marquee>
      <div
        className="bg-black h-[94vh] md:min-h-[95vh] w-screen flex justify-center items-center bg-cover bg-center relative overflow-clip z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=''>
          <div className='text-center font-custom font-bold mb-[5%] text-amber-400'>
            <h1 className='leading-none text-[150px] md:text-[180px] lg:text-[220px] 2xl:text-[260px]'></h1>
          </div>
          <div className='flex justify-center'>
            <div className='absolute bottom-[15%] grid content-center z-40'>
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/7y3KMHA91JEBoQ67P3mEJtVvXLg62FjWR1VDHhEFSX8Z?t=1715720852830"
                className='font-bold text-4xl md:text-5xl lg:text-6xl bg-red-600 p-6 border-2 border-black hover:scale-105 transition ease-in-out duration-200'
              >
                BUY
              </a>
              <div className='pt-8 text-center font-custom text-2xl flex justify-center -mt-3'>
                <a href="https://twitter.com/theiscoin" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
                  <img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img>
                </a>
                <a href="https://t.me/theiscoin" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
                  <img src={TG} alt='Tg logo' className='w-12 h-12'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/*<TweetButton className="mt-2" tweetText="It's a doge, it's a cat, it'...@dogecatonsol $DOGECAT" solAddress="<input SOL address here>"/>
<motion.div className="pt-8 flex items-center gap-2">
  <motion.div
    initial={{ y: -3 }} // Adjusted initial position
    animate={{
      y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
      transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
    }}
  >
    <div className="text-3xl font-custom">
      <a href="https://x.com/dogecatonsol" target="_blank" rel="noopener noreferrer" className="block p-2">
        FOLLOW ON
      </a>
    </div>
  </motion.div>
  <a href="https://x.com/dogecatonsol" target="_blank" rel="noopener noreferrer">
    <motion.img
      src={Xlogo}
      alt="X Logo"
      className="w-9 h-9 -mt-1 rounded-md"
      initial={{ y: -3 }} // Adjusted initial position
      animate={{
        y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
        transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
      }}
    />
  </a>
</motion.div>*/