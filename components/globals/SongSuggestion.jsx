'use client'
import React, { useState } from 'react';
import { Spotify } from './Icons';
import { motion } from 'framer-motion';

export const SongSuggestion = () => {
  const trackIds = [
    '3hUxzQpSfdDqwM3ZTFQY0K',
    '1BxfuPKGuaTgP7aM0Bbdwr',
    '2OzhQlSqBEmt7hmkYxfT6m',
    '18WFFUIsewmA8g31KAeo3e',
    '0V3wPSX9ygBnCm8psDIegu',
    '4R2kfaDFhslZEMJqAFNpdd',
    '1Iq8oo9XkmmvCQiGOfORiz',
  ];

  const getRandomTrackId = () => {
    const randomIndex = Math.floor(Math.random() * trackIds.length);
    return trackIds[randomIndex];
  };

  const [showIframe, setShowIframe] = useState(false);
  const randomTrackId = getRandomTrackId();

  const iconVariants = {
    initial: { scale: 1 },
    animate: { scale: 0 },
  };

  const iframeVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-56 z-10 py-4 justify-center flex bg-gradient-to-t from-black to-transparent p-4">
      <div className="md:w-1/2 w-full flex flex-col justify-end py-4">
        {!showIframe ? (
          <motion.div
            className="cursor-pointer rounded-xl flex justify-center"
              
            onClick={() => setShowIframe(true)}
              
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
              <Spotify />
        </motion.div>
        ) : (
          <motion.iframe
            className={`rounded-xl backdrop-blur-md bg-white/30`}
            src={`https://open.spotify.com/embed/track/${randomTrackId}?utm_source=generator&theme=0&play=1`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            initial="initial"
            animate="animate"
            variants={iframeVariants}
          ></motion.iframe>
        )}
      </div>
    </div>
  );
};