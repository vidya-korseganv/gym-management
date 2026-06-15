import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { GymService } from './gym.service';

@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getAllGyms(): Gym[] {
    return this.gymService.findAll();
  }

  @Get(':id')
  getGymById(@Param('id', ParseIntPipe) id: number): Gym {
    console.log('Route parameter id:', id);
    return this.gymService.findOne(id);
  }

  @Post()
  createGym(@Body() createGymDto: CreateGymDto): Gym {
    console.log('Request body:', createGymDto);
    return this.gymService.create(createGymDto);
  }

  @Patch(':id')
  updateGym(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGymDto: UpdateGymDto,
  ): Gym {
    console.log('Update gym id:', id);
    console.log('Update body:', updateGymDto);
    return this.gymService.update(id, updateGymDto);
  }

  @Delete(':id')
  deleteGym(@Param('id', ParseIntPipe) id: number): Gym {
    console.log('Delete gym id:', id);
    return this.gymService.remove(id);
  }
}
