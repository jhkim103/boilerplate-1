import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TMenuData, buildPageRouteByRole } from './role';

export type TAuthInfo = {
  username?: string;
  role: string;
  route?: { menu: TMenuData[]; enabled: string[] };
};

const handler = async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    CredentialsProvider({
      id: 'email-password-credential',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const result: TAuthInfo = {
          username: credentials?.username,
          role: '',
        };
        if (result.username === 'superuser') {
          result.role = 'superuser';
        }

        const routeData = buildPageRouteByRole({ role: result.role });
        result.route = routeData;
        if (result) {
          return result as any;
        } else {
          return null;
        }
      },
    }),
  ];

  const callbacks = {
    async signIn({ user, account, profile, email, credentials }: Record<string, any>) {
      return true;
    },
    async redirect({ url, baseUrl }: Record<string, any>) {
      return baseUrl;
    },
    async session({ session, user, token }: Record<string, any>) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
        session.user.route = token.route;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: Record<string, any>) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
        token.route = user.route;
      }
      return token;
    },
  };
  const pages = {
    signIn: '/auth/login',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  };
  const logger = {
    error(code: any, metadata: any) {
      console.error(code, metadata);
    },
    warn(code: any) {
      console.warn(code);
    },
    debug(code: any, metadata: any) {
      console.debug(code, metadata);
    },
  };

  return await NextAuth(req, res, {
    providers,
    logger,
    callbacks,
    pages,
    secret: 'SEC@ET',
    session: {
      strategy: 'jwt',
    },
  });
};
export { handler as GET, handler as POST };
