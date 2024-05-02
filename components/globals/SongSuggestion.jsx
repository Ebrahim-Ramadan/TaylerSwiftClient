'use client'
import React, { useState } from 'react';

export const SongSuggestion = () => {
  const [trackIds, setTrackIds] = useState([
    '3hUxzQpSfdDqwM3ZTFQY0K',
    '1BxfuPKGuaTgP7aM0Bbdwr',
    '2OzhQlSqBEmt7hmkYxfT6m',
    '18WFFUIsewmA8g31KAeo3e',
    '0V3wPSX9ygBnCm8psDIegu',
    '4R2kfaDFhslZEMJqAFNpdd',
    '1Iq8oo9XkmmvCQiGOfORiz',
    // statically rendered tracks ids on spotify
  ]);
  const getRandomTrackId = () => {
    const randomIndex = Math.floor(Math.random() * trackIds.length);
    return trackIds[randomIndex];
  };

  const randomTrackId = getRandomTrackId();
  return (
    <div className="fixed bottom-0 left-0 w-full h-56 z-10 py-4 justify-center flex bg-gradient-to-t from-black to-transparent p-4">
      <div className="md:w-1/2 w-full flex flex-col justify-end py-4">
        <iframe
          className="rounded-xl backdrop-blur-md bg-white/30"
          src={`https://open.spotify.com/embed/track/${randomTrackId}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
