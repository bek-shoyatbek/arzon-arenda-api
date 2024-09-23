import { ApiProperty } from "@nestjs/swagger";
import { AmenityDto } from "src/common/dto/amenity.dto";
import { ImageDto } from "src/common/dto/image.dto";

// Home DTO
export class HomeDto {

    @ApiProperty()
    type: string;

    @ApiProperty()
    rooms: number;

    @ApiProperty()
    square: number;

    @ApiProperty()
    floor: number;

    @ApiProperty()
    totalFloors: number;

    @ApiProperty()
    region: string;

    @ApiProperty()
    district: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    situation: string;

    @ApiProperty()
    locationAddress: string;

    @ApiProperty()
    locationLatitude: number;

    @ApiProperty()
    locationLongitude: number;

    @ApiProperty()
    images?: ImageDto[];

    @ApiProperty()
    amities?: AmenityDto[];

}

