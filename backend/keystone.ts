import { createAuth} from '@keystone-next/auth';
import { User } from './schemas/User';
import { config, createSchema } from '@keystone-next/keystone/schema/dist/keystone.cjs';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-store';


const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  }
});

export default withAuth(config({
    // @ts-ignore
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: Add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
        User
    }),
    ui: {
        // TODO: Change this for roles
        isAccessAllowed: () => true,
    },
    session: withItemData(statelessSessions(sessionConfig). {
        User: `id`
    })
  })
);