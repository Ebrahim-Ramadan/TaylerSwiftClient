import { ImageResponse } from 'next/og';

export async function GET(request) {
  return new ImageResponse(
    (
      <img
        width="100%"
        height="100%"
        src='https://i.pinimg.com/originals/19/32/e2/1932e2224970e57d6bb5d35faebf570d.jpg'
       
      />
    ),
    {
      width: 1200,
      height: 1000,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000', // cache for 1 year
        'Twitter-Card':'summary_large_image',
        'Twitter-Image': 'https://i.pinimg.com/originals/19/32/e2/1932e2224970e57d6bb5d35faebf570d.jpg',
      },
    },
  );
}