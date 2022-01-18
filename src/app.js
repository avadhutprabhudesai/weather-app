const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Set up directory paths for static assets and views
const publicDirPath = path.join(__dirname, './public');
const viewsDirPath = path.join(__dirname, '../templates/views');
const partialsDirPath = path.join(__dirname, '../templates/partials');

// Express settings for handlerbar views
app.set('view engine', 'hbs');
app.set('views', viewsDirPath);
hbs.registerPartials(partialsDirPath);

// Set up static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Avadhut',
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Avadhut',
  });
});
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Avadhut',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help',
    name: 'Avadhut',
    errorMessage: 'Help article not found',
  });
});
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found',
  });
});

app.listen(3000, () => {
  console.log('\n\n----An express server listening on port 3000');
});
