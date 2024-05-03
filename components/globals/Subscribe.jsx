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
                  
        <form onSubmit={handleSubmit}>
                      <div className="relative flex flex-grow items-center border rounded-[2rem] px-4">
          <Twitter className="w-12 h-12 text-indigo-600 bg-transparent" />
                          
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-3 pl-4 pr-10 text-sm text-white font-bold placeholder-gray-400  rounded-lg appearance-none  focus:border-transparent bg-transparent border-none outline-none"
              placeholder="Twitter username"
              required
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 py-3 text-sm font-medium text-white  rounded-[2rem] hover:bg-[#AD7974] transition duration-200 rounded-[2rem] bg-[#B2847A]"
            >
                              <p className={`${loading&&'hidden'}`}>Subscribe</p>
                              {loading &&
                              <TinyLoading/>
                              }
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default Subscribe;