// import { createNextAuthMiddleware } from 'nextjs-basic-auth-middleware';

// export const middleware = createNextAuthMiddleware();

// export const config = {
//   matcher: ['/(.*)'],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_req: NextRequest) {
  // 何もせず、そのまま次へ
  return NextResponse.next();
}

export const config = {
  // どのパスにも認証をかけない
  matcher: [],
};
