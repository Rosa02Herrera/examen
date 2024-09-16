import { IsString } from "class-validator";

export class CreateVehiculoDto {
    @IsString()
    marca : string;
    @IsString()
    placa : string;
    @IsString()
    modelo : number;
}
