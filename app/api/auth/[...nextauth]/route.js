import connect from "@/lib/db";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        console.log("in authorize", credentials);
        const { username, password } = credentials;
        try {
          await connect();
          const user = await User.findOne({ username });

          console.log("in authorize");

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            console.log(user);
            return user;
          }
          return null;
        } catch (error) {
          console.log("Error authorizing user", error);
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...token.user,
          id: token.sub,
        },
      };
    },
    jwt({ token, user }) {
      if (!!user) token.user = user;
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
