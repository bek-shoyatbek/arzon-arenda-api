import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { RentalApiService } from './rental-api.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { RentalDto } from './dto/rental.dto';

@ApiTags('rentals')
@Controller('rental')
export class RentalApiController {
  constructor(private readonly rentalService: RentalApiService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new rental' })
  @ApiBody({ type: CreateRentDto, description: 'Rental creation data' })
  @ApiResponse({ status: 201, description: 'The rental has been successfully created.', type: RentalDto })
  create(@Body() createRentalDto: Prisma.RentalCreateInput) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rentals' })
  @ApiResponse({ status: 200, description: 'Return all rentals.', type: [RentalDto] })
  findAll(@Query() query: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RentalWhereUniqueInput;
    where?: Prisma.RentalWhereInput;
    orderBy?: Prisma.RentalOrderByWithRelationInput;
  }) {
    return this.rentalService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a rental by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return the rental.', type: RentalDto })
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a rental' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: RentalDto, description: 'Rental update data' })
  @ApiResponse({ status: 200, description: 'The rental has been successfully updated.', type: RentalDto })
  update(@Param('id') id: string, @Body() updateRentalDto: Prisma.RentalUpdateInput) {
    return this.rentalService.update({
      where: { id: Number(id) },
      data: updateRentalDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a rental' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'The rental has been successfully deleted.', type: RentalDto })
  remove(@Param('id') id: string) {
    return this.rentalService.remove({ id: Number(id) });
  }
}