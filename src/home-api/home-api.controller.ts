import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { HomeApiService } from './home-api.service';
import { HomeDto } from './dto/home.dto';

@ApiTags('homes')
@Controller('home')
export class HomeApiController {
  constructor(private readonly homeService: HomeApiService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new home' })
  @ApiBody({
    type: HomeDto, description: 'Home creation data'
  })
  @ApiResponse({ status: 201, description: 'The home has been successfully created.', type: Object })
  create(@Body() createHomeDto: Prisma.HomeCreateInput) {
    return this.homeService.create(createHomeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all homes' })
  @ApiResponse({ status: 200, description: 'Return all homes.', type: [HomeDto] })
  findAll(@Query() query: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HomeWhereUniqueInput;
    where?: Prisma.HomeWhereInput;
    orderBy?: Prisma.HomeOrderByWithRelationInput;
  }) {
    return this.homeService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a home by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return the home.', type: HomeDto })
  findOne(@Param('id') id: string) {
    return this.homeService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a home' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: HomeDto, description: 'Home update data' })
  @ApiResponse({ status: 200, description: 'The home has been successfully updated.', type: HomeDto })
  update(@Param('id') id: string, @Body() updateHomeDto: Prisma.HomeUpdateInput) {
    return this.homeService.update({
      where: { id: Number(id) },
      data: updateHomeDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a home' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'The home has been successfully deleted.', type: HomeDto })
  remove(@Param('id') id: string) {
    return this.homeService.remove({ id: Number(id) });
  }
}