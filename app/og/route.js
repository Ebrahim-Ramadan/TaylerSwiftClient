import { ImageResponse } from 'next/og';
import taylor from '@/public/taylor.jpg'


export async function GET(request) {
  return new ImageResponse(
    (
      <img
        width="100%"
        height="100%"
        src='taylor.jpg'
       
      />
    ),
    {
     headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000', // cache for 1 year
        'Twitter-Card':'summary_large_image',
        'Twitter-Image': 'taylor.jpg',
      },
    },
  );
}