import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { refreshAccessToken } from './utils/api';

export async function middleware(req: NextRequest) {
  const accessToken: string | undefined = req.cookies.get('ACCESS_TOKEN')?.value; 
  if(accessToken === undefined){
    const data = await refreshAccessToken()
    if(data.status === 200){
      const newAccessToken = await data.json();
      const response = NextResponse.next();
      response.cookies.set('ACCESS_TOKEN', 
        newAccessToken, { 
          httpOnly: true, 
          secure: true, 
          maxAge: 3600, // 1 hour in seconds
        });
      return response;
    }
  }
  return NextResponse.next()
}

export const config = {
  // matcher: '/admin/:path*',
  matcher: '/products'
};
