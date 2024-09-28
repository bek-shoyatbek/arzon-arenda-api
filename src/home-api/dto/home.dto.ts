import { ApiProperty } from "@nestjs/swagger";


// Home DTO
export class HomeDto {

    type: string;


    title: string;


    description: string;


    condition: string;


    rooms: number;


    square: number;


    floor: number;


    totalFloors: number;


    region: string;


    district: string;


    address: string;


    situation: string;


    locationAddress: string;


    locationLatitude: number;


    locationLongitude: number;


    images?: string[];


    amities?: string;

}

