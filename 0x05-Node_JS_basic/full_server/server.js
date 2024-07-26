import express from 'express'
import routes from './routes/index'

const app = express();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

app.use((req, res, next) => {
  req.DB_FILE = DB_FILE;
  next();
});

app.use(routes);

app.listen(1245, () => console.log('Server running on port 1245'));
