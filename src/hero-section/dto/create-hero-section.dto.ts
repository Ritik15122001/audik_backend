/* eslint-disable prettier/prettier */
export class CreateHeroSectionDto {
    heading: string;
    subheading: string;
    image: {
        originalname: string;
        filename: string;
        path: string;
    };
}
