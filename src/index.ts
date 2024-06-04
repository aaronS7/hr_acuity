import express from 'express';
import axios from 'axios';

const db: {[key: number]: any} = {};
let idCounter = 1;
const port = 4444;

function main() {

    const app = express();
    app.use(express.json());

    app.get('/todo/:id', (req, resp) => {
        const id = parseInt(req.params["id"]);

        if (isNaN(id)) {
            resp.status(400).send("Id needs to be a integer");
        } else if (!(id in db)) {
            resp.status(400).send("Id was not in database");
        } else {
            resp.status(200).send(db[id]);
        } 


    });

/**
 * {
 * task: "Some task",
 * completed: false
 * }
 */
    app.post('/todo', (req, resp) => {

        console.log(`req body ${JSON.stringify(req.body, null, 2)}`);
        if (!req.body?.task?.length) {
            resp.status(400).send('Requires task');
        } else {
            const data = {
                id: idCounter,
                task: req.body.task,
                completed: Boolean(req.body.completed),
            };
            db[idCounter] = data;
            idCounter++;
            console.log(`resp is ${JSON.stringify(data, null, 2)}`);
            resp.status(200).send(data);
        }

    });


    app.get('/quote', async (req, resp) => {

        try {
            const quoteData = await axios.get('https://api.quotable.io/random');
            const quote = quoteData.data.content;

            resp.status(200).send({ quote });
        } catch(error) {
            resp.status(500).send('Failed to retrieve quote');
        }

    });

    app.listen(port, () => {
        console.log(`starting server on port ${port}`)
    });
}

main();