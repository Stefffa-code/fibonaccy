const express = require('express');
const config = require('config');
const sequelize = require('./api/database/db');

const app = express();
const PORT = config.get('port') || 5000;

app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (requ, resp) => {
    // allowed XHR methods
    resp.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    resp.send();
  });
});

app.use('/api/fibonacci', require('./api/routes/fib.routes'));
app.use('/api/history', require('./api/routes/history.routes'));


async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
    console.log('SServer error ', e.message);
    process.exit(1);
  }
}


start();
