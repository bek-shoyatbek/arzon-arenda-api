import { ApiProperty } from '@nestjs/swagger';
import { AmenityDto } from 'src/common/dto/amenity.dto';
import { ImageDto } from 'src/common/dto/image.dto';

// Rental DTO
export class RentalDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    homeId: number;
}