import express, {Request, Response} from 'express';

const PORT = 3000;
const app = express();

app
  .get('/', (request: Request<null>, response: Response<string, null>) => {
    response.send('hello world');
  })
  .listen(PORT, () => console.log(`App is running on ${PORT} port`));
