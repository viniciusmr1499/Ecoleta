import express from 'express';

const routes = express();

routes.get('/', (req, res) => {
    return res.json({message: 'hello world'});
});

export default routes;