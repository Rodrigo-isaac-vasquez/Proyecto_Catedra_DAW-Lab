const { response } = require("express");

module.exports = (app, passport) => {
    app.get('/', (req,res) => {
        res.render('index');
    });

    app.get('/login', (req,res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });
    
    app.get('/principal', (req,res) => {
        res.render('principal', {
            message: req.flash('loginMessage')
        });
    });


    //app.post('/login', passport.authenticate('/'));


    app.post('/singup', passport.authenticate('local-singup', {
        successRedirect: '/profile',
        failureRedirect: '/singup',
        failreFlash: true
    }));


    app.get('/profile', (req,res) => {
        res.render('profile', {
            user: req.user
        });
    });


    app.get('/singup', (req,res) => {

        res.render('singup', {
            message: req.flash('singupMessage')
        })
    });
};