const express = require("express");
const expressApp = require('./src/express-app');

const startServer = async () => {
    const app = express();

    await expressApp(app);

    app.listen(7001, () => {
        console.log("Gateway is Listening to Port 7001");
    }).on('error', err => {
        console.log(err);
        process.exit();
    });
}

startServer();


// app.use(cors());
// app.use(express.json());

// app.use('/', (req, res, next) => {
//   return res.send('It works, Products');
// });

