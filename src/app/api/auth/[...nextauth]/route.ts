import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const handler = async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '00001' };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ];

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

  const callbacks = {
    async signIn({ user, account, profile, email, credentials }: Record<string, any>) {
      console.log('signIn');
      return true;
    },
    async redirect({ url, baseUrl }: Record<string, any>) {
      console.log('redirect');
      console.log(baseUrl);
      return baseUrl;
    },
    async session({ session, user, token }: Record<string, any>) {
      console.log('session');
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: Record<string, any>) {
      console.log('jwt');
      return token;
    },
  };

  return await NextAuth(req, res, {
    providers,
    secret: '1222333',
    logger,
    callbacks,
  });
};
export { handler as GET, handler as POST };
