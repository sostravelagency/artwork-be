var jwt = require("jsonwebtoken");

var Token = require("./config");

module.exports = {
  cookieAuthenticated: function (req, res, next) {
    const sess = req.session;  //initialize session variable
    const errorMessage = req.session.errorMessage || '';
    const userName = sess.userName || '';
    sess.errorMessage = '';
    sess.userName = '';
    if (req.cookies.accessToken) {
      try {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);

      } catch (err) {
        return res.render('view/login/login', {
          login: false,
          errorMessage,
          userName
        })
      }
      if (checkTokenValid) {
        return next();
      }
    }
    res.render('view/login/login', {
      login: false,
      errorMessage,
      userName
    })
  },
};
