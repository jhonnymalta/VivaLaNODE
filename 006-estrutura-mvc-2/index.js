const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();


const conn = require('./db/conn')

//MODELS
const Ademodels = require('./models/AdeModels');

//Modulos das rotas
const adeRoutes = require('./routes/adesRoutes');
//Modulo controllers
const AdeController = require('./controllers/AdeController');


app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');


app.set(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//session middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }

    })
)

//flash messages
app.use(flash())

//set session to res

app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next()
})

//ROTAS
app.use('/ade', adeRoutes)

app.get('/', AdeController.showAde)


conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor subiu')
    })
}
).catch((err) => {
    console.log(err)
})