import { ApiProperty } from "@nestjs/swagger";

// Image DTO
export class ImageDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    uri: string;

    @ApiProperty()
    rentalId: number;
}