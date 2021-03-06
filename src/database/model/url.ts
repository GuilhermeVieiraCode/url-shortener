import { prop, Typegoose } from '@hasezoey/typegoose';

export class Url extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	shortUrl: string
    
	@prop({ required: true })
	originUrl: string
}

export const UrlModel = new Url().getModelForClass(Url);