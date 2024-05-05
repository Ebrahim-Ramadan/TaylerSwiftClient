import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET(request) {
 
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          background: 'black',
          width: '100%',
          height: '100%',
          
          
        }}
      >
        <img
          width="100%"
          height="100%"
          src='https://news.harvard.edu/wp-content/uploads/2023/07/202307x_swift_1407_AP23198726852529.jpg'
          style={{
            borderRadius: 128,
          }}
        />
       
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}