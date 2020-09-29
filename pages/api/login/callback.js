import auth0 from '../../../src/lib/auth0'
import UtilServer from '../../../src/util/UtilServer'

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      onUserLoaded: async (req, res, session, state) => {
        const user = await UtilServer.getUser(session.user.sub);
        return {
          ...session,
          user: {
            ...user,
            sub: session.user.sub
          }
        }
      }
    })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
