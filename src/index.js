const express = require('express');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const jobs = require('./utils/job')
const TicketController = require('./controllers/ticket-controller');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.post('/api/v1/tickets', TicketController.create);
    
    app.listen(PORT, () => {
        console.log(`Listeninng on port: ${PORT}`);
        jobs();
        // const response = sendBasicEmail(
        //     'support@admin.com',
        //     'akshatkba24@gmail.com',
        //     'This is a special testing email',
        //     'Hey, how are you, I hope you like our app'
        // );

        // console.log(response);
        // cron.schedule('* * * * *', () => {
        //     console.log('running a task every minute');
        // });

    })
}

setupAndStartServer();