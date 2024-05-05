import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
import { og } from '@/public/og.jpg'
 
export async function GET(request) {
   
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={og}
          style={{
            borderRadius: 128,
          }}
        />
        <p>taylorswifit</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}