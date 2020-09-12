import { initAuth0 } from '@auth0/nextjs-auth0'
require('dotenv').config();

export default initAuth0({
  clientId: process.env.DIARY_AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.DIARY_AUTH0_SCOPE || 'openid profile',
  domain: process.env.DIARY_AUTH0_DOMAIN,
  redirectUri:
    process.env.DIARY_REDIRECT_URI ||
    'http://localhost:3000/api/login/callback',
  postLogoutRedirectUri:
    process.env.DIARY_POST_LOGOUT_REDIRECT_URI ||
    'http://localhost:3000/',
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200,
  },
})
