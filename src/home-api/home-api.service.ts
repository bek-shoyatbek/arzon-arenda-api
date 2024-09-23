import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HomeApiService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.HomeCreateInput) {
        return this.prisma.home.create({
            data,
            include: {
                images: true,
            }
        });
    }

    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.HomeWhereUniqueInput;
        where?: Prisma.HomeWhereInput;
        orderBy?: Prisma.HomeOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.home.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                images: true,
            }
        });
    }

    findOne(where: Prisma.HomeWhereUniqueInput) {
        return this.prisma.home.findUnique({
            where,
            include: {
                images: true,
            },
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