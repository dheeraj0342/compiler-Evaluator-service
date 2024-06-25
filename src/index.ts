import express ,{Express} from 'express';

import serverConfig from './config/serverConfig';
import SampleQueueProducer from './producers/SampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/SampleQueueWorker';

const app :Express = express();

app.use('/api',apiRouter);

app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`);

    SampleWorker("SampleQueue");

    SampleQueueProducer('SampleJob',{
        name:"Dheeraj",
        location:"Mathura"
    });

    
});




