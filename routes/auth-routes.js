const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/user");
    }
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/profile');
});



module.exports = router;
