import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const databaseResponse = await sql`
        SELECT id, email, password, full_name AS "fullName" FROM users WHERE email=${credentials?.email}`;

        const user = databaseResponse.rows[0];

        const isPasswordCorrect = await compare(credentials?.password || "", user.password);

        if (isPasswordCorrect) {
          return {
            id: user.id,
            email: user.email,
            name: user.fullName,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.sub as string;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
