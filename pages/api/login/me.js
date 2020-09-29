import auth0 from '../../../src/lib/auth0'

export default auth0.requireAuthentication(async function getMe(req, res) {
  try {
    // await auth0.handleProfile(req, res)
    const session = await auth0.getSession(req)
    if (!session || !session.user) {
      res.redirect(302, 'http://localhost:3000/api/login/login');
      res.end();
      return;
    }
    res.json({sub : session.user.sub});

  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
});
