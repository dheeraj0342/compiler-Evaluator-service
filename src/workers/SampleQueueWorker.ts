import { Job, Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/SampleJob";

export default function SampleWorker(queueName:string){
    new Worker(queueName,
        async(job: Job) =>{            
            if(job.name ==="SampleJob"){
                console.log(job.data);
                
                const sampleJobInstane = new SampleJob(job.data);
                sampleJobInstane.handle();

                return true;
            }
        },
        {connection:redisConnection}
    );
}