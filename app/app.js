import app from './application/main';

app.listen(process.env.PORT, process.env.HOST);
module.exports = app;