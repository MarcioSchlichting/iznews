import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { UserService } from '../../../services/users-service';

export default NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        authorization: {
          params: {
            scope: 'read:user'
          }
        }
      }),
      // ...add more providers here
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        return UserService.saveUser(user);
      }
    }
})