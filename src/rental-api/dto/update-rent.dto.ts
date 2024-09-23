import { PartialType } from "@nestjs/mapped-types";
import { RentalDto } from "./rental.dto";

export class UpdateRentDto extends PartialType(RentalDto) { }