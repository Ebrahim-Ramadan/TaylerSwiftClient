'use client'
import React, { useEffect } from 'react';
import { Next, Previous } from './globals/Icons';

export const SliderTemplate = () => {
  useEffect(() => {
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    let currentItemIndex = 0;

    const showItem = (index) => {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('opacity-100');
          item.classList.remove('opacity-0');
        } else {
          item.classList.add('opacity-0');
          item.classList.remove('opacity-100');
        }
      });
    };

    const showNextItem = () => {
      currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
      showItem(currentItemIndex);
    };

    const showPrevItem = () => {
      currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentItemIndex);
    };

    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);

    // Show the initial active item
    showItem(currentItemIndex);

    return () => {
      // Clean up event listeners when component unmounts
      nextButton.removeEventListener('click', showNextItem);
      prevButton.removeEventListener('click', showPrevItem);
    };
  }, []);

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
    <div class="relative  overflow-hidden rounded-lg h-96">
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
    </div>
       <div class="flex justify-center items-center pt-4">
        <button type="button" class="flex justify-center p-2 border rounded-full hover:bg-gray-800 items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <Previous/>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="flex justify-center p-2 border rounded-full hover:bg-gray-800 items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <Next/>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</div>

  )
}

export default SliderTemplate