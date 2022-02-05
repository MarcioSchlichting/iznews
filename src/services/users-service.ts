import { fauna } from './fauna';

import { query as q } from 'faunadb';

export const UserService = {

    saveUser: async (user) => {
        const { email } = user;

        try {
            await fauna.query(
                q.Create(
                    q.Collection('users'),
                    { 
                        data: { email } 
                    }
                )
            )

            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}


