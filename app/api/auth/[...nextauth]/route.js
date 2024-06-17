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
        const { username, password } = credentials;
        try {
          await connect();
          const user = await User.findOne({ username });

          console.log("in authorize");

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) return null;
          return user;
        } catch (error) {
          console.log("Error authorizing user", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  jwt: {
    maxAge: 30,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
