// This will set up Node.js's Express static paths
const path = require('path');
// This will give access to the express and express-handlebars modules.
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars');
// import routes
const homeRoutes = require('./controller/home-routes');
const postRoutes = require('./routes/post');
// set up express app
const app = express();
const PORT = process.env.PORT || 3001;




// set up Handlebars.js as the template engine
app.engine('handlebars',
    hbs.engine)
    app.set('view engine',
     'hbs');
// set up middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// define routes
app.use('/', homeRoutes);
app.use('/post', postRoutes);





// Turn on routes.
app.use(routes);

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
    // Force false so data doesn't get dropped on every sync.
    app.listen(PORT, () => console.log('Now listening'));
});