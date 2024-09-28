import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { HomeApiService } from './home-api.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('home')
export class HomeApiController {
  constructor(private readonly homeService: HomeApiService) { }

  @UseInterceptors(FilesInterceptor("images", 5, {
    storage:
      diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const filename: string = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        }
      })
  }))
  @Post()
  create(@Body() createHomeDto: Omit<Prisma.HomeCreateInput, "status">, @UploadedFiles() images: Express.Multer.File[]) {
    createHomeDto.images = images.map((image) => image.originalname);
    return this.homeService.create(createHomeDto);
  }

  @Get()
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
  findOne(@Param('id') id: string) {
    return this.homeService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDto: Omit<Prisma.HomeUpdateInput, "images">) {
    return this.homeService.update({
      where: { id },
      data: updateHomeDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeService.remove({ id });
  }
}