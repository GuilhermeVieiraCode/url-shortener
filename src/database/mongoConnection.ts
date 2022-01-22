import { config } from '../config/constants';
import mongoose from 'mongoose';

export class MongoConnection{
    public async connect(): Promise<void>{
        try {
            const options =  { useNewUrlParser: true, useUnifiedTopology: true };
            await mongoose.connect(config.MONGO_CONNECTION, options);
            console.log('Mongo database connected');
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}