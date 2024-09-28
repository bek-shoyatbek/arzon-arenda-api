import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HomeApiService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.HomeCreateInput) {
        return this.prisma.home.create({
            data: {
                ...data,
                rooms: Number(data.rooms),
                square: Number(data.square),
                floor: Number(data.floor),
                price: Number(data.price),
                totalFloors: Number(data.totalFloors),
                locationLatitude: Number(data.locationLatitude),
                locationLongitude: Number(data.locationLongitude),
            },
        });
    }

    findAll(params: {
        skip?: number;
        take?: number;
        where?: Prisma.HomeWhereInput;
        orderBy?: Prisma.HomeOrderByWithRelationInput;
    }) {
        const { skip, take, where, orderBy } = params;
        return this.prisma.home.findMany({
            skip,
            take,
            where,
            orderBy,
        });
    }

    findOne(where: Prisma.HomeWhereUniqueInput) {
        return this.prisma.home.findUnique({
            where,
        });
    }

    update(params: {
        where: Prisma.HomeWhereUniqueInput;
        data: Prisma.HomeUpdateInput;
    }) {
        const { where, data } = params;
        return this.prisma.home.update({
            data,
            where,
        });
    }

    remove(where: Prisma.HomeWhereUniqueInput) {
        return this.prisma.home.delete({
            where,
        });
    }
}