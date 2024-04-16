/* eslint-disable prettier/prettier */

import { Prop, Schema } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
})
export class HeroSection {
    @Prop()
    heading: string;


    @Prop()
    subheading: string;

    @Prop({
        type: Object, // Specify the type as Object for the image field
        required: true, // Adjust this based on your requirements
    })
    image: {
        originalname: string;
        filename: string;
        path: string;
    };
}

