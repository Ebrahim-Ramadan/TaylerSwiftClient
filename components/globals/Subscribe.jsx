'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter , CheckedIcon, TinyLoading} from './Icons';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setloading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setloading(true)
    // Simulate an API call to subscribe to the newsletter
    setTimeout(() => {
      setSubscribed(true);
      window.location.href = 'https://open.spotify.com/playlist/1cjPVUxEXtPeKpptLS8zTN?si=5cc8493cda7648b3&pt=1ab64e6f75f1dca7740a86c5305f8b90';
    setloading(false)
        
    }, 2000);
    };
    
 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="pb-72 relative flex flex-col items-center justify-center w-full max-w-sm  mx-auto my-16 rounded-lg shadow-lg "
    >
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      collaborate with us on this playlist
      </p>
     
      {subscribed ? (
              <motion.div className="flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
          <CheckedIcon/>
          <button
            onClick={() => setSubscribed(false)}
            className="px-4 py-2 text-sm font-medium text-white  hover:bg-[#AD7974] transition duration-200 rounded-[2rem] bg-[#B2847A]"
          >
            Subscribe Again
          </button>
        </motion.div>
          ) : (
                  
          <div className='flex flex-col justify-center gap-2 font-bold'>
             <p className="mx-auto max-w-[700px] text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
  Add Your <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#ffe6f9] to-[#7a1662]">Taste</span>
</p>

            <a href='https://open.spotify.com/playlist/1cjPVUxEXtPeKpptLS8zTN?si=5cc8493cda7648b3&pt=1ab64e6f75f1dca7740a86c5305f8b90' className='text-center bg-[#B2847A] px-2 py-1 rounded-[2rem] hover:bg-[#AD7974] transition duration-200 '>
              Open Spotify
            </a>
         </div>
      )}
    </motion.div>
  );
};

export default Subscribe;