import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class SampleJob implements IJob{
    name : string;
    payload : Record<string, unknown>;
    constructor(payload : Record<string, unknown>){
        this.payload = payload;
        this.name = this.constructor.name;

    }
   handle = ()=>{
        console.log("Handler of the job called");
        
    };  

    failed = (job?:Job) =>{
        if(job)
            console.log(job.id);
        else
            console.log("job failed");
            
    };
}