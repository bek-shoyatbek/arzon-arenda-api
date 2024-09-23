import { ApiProperty } from "@nestjs/swagger";
import { RentalDto } from "src/rental-api/dto/rental.dto";
import { HomeDto } from "./home.dto";
import { ImageDto } from "src/common/dto/image.dto";
import { AmenityDto } from "src/common/dto/amenity.dto";

// Home DTO
export class CreateHomeDto extends HomeDto {
    @ApiProperty()
    id: number;

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
    amenities?: AmenityDto[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({ type: () => RentalDto, isArray: true })
    rentals?: RentalDto[];
}

