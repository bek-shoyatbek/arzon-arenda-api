import { ApiProperty } from "@nestjs/swagger";
import { RentalDto } from "src/rental-api/dto/rental.dto";

// Home DTO
export class HomeDto {
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
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({ type: () => RentalDto, isArray: true })
    rentals: RentalDto[];
}

