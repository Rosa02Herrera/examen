import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculoService {
  vehiculos = []

  create(createVehiculoDto: CreateVehiculoDto) {
    this.vehiculos.push(createVehiculoDto)
    return 'Vehículo creado con éxito';
  }

  findAll() {
    return this.vehiculos
  }

  findOne(id: string) {
    const vehiculo = this.vehiculos.find(v => v.id === id);
    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con ID ${id} no encontrado`);
    }
    return vehiculo;
    return `This action returns a #${id} vehiculo`;
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(placa: string) {
    const indice = this.vehiculos.findIndex(vehiculo => vehiculo.placa === placa)
    if(indice === -1)
      return `El vehiculo con placa: ${placa}, No existe`
    else{
      this.vehiculos.splice(indice,1)
    }
    return `El vehiculo con placa: ${placa}, fue elimidado`;
  }
}
