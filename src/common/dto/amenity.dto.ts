import { ApiProperty } from "@nestjs/swagger";
import { RentalDto } from "src/rental-api/dto/rental.dto";

// Amenity DTO
export class AmenityDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ type: () => RentalDto, isArray: true })
    rentals: RentalDto[];
}

