import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalApiService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.RentalCreateInput) {
        return this.prisma.rental.create({
            data,
            include: {
                home: true,
            },
        });
    }

    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RentalWhereUniqueInput;
        where?: Prisma.RentalWhereInput;
        orderBy?: Prisma.RentalOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.rental.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                home: true,
            },
        });
    }

    findOne(where: Prisma.RentalWhereUniqueInput) {
        return this.prisma.rental.findUnique({
            where,
            include: {
                home: true,
            },
        });
    }

    update(params: {
        where: Prisma.RentalWhereUniqueInput;
        data: Prisma.RentalUpdateInput;
    }) {
        const { where, data } = params;
        return this.prisma.rental.update({
            data,
            where,
            include: {
                home: true,
            },
        });
    }

    remove(where: Prisma.RentalWhereUniqueInput) {
        return this.prisma.rental.delete({
            where,
        });
    }
}