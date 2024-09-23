import { PartialType } from "@nestjs/mapped-types";
import { HomeDto } from "./home.dto";

export class UpdateHomeDto extends PartialType(HomeDto) { }