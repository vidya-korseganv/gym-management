import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';

@Injectable()
export class GymService {
  private gyms: Gym[] = [
    {
      id: 1,
      name: 'Iron Temple Fitness',
      location: 'Hyderabad',
      monthlyFee: 1500,
      isOpen: true,
      createdAt: new Date('2026-06-15T09:00:00.000Z'),
    },
    {
      id: 2,
      name: 'Core Strength Gym',
      location: 'Bengaluru',
      monthlyFee: 2000,
      isOpen: true,
      createdAt: new Date('2026-06-15T09:30:00.000Z'),
    },
  ];
  private nextId = 3;

  findAll(): Gym[] {
    return this.gyms;
  }

  findOne(id: number): Gym {
    const gym = this.gyms.find((item) => item.id === id);

    if (!gym) {
      throw new NotFoundException(`Gym with id ${id} was not found`);
    }

    return gym;
  }

  create(createGymDto: CreateGymDto): Gym {
    const newGym: Gym = {
      id: this.nextId,
      ...createGymDto,
      isOpen: createGymDto.isOpen ?? true,
      createdAt: new Date(),
    };

    this.nextId += 1;
    this.gyms.push(newGym);
    return newGym;
  }

  update(id: number, updateGymDto: UpdateGymDto): Gym {
    const gym = this.findOne(id);

    if (updateGymDto.name !== undefined) {
      gym.name = updateGymDto.name;
    }

    if (updateGymDto.location !== undefined) {
      gym.location = updateGymDto.location;
    }

    if (updateGymDto.monthlyFee !== undefined) {
      gym.monthlyFee = updateGymDto.monthlyFee;
    }

    if (updateGymDto.isOpen !== undefined) {
      gym.isOpen = updateGymDto.isOpen;
    }

    return gym;
  }

  remove(id: number): Gym {
    const gym = this.findOne(id);
    this.gyms = this.gyms.filter((item) => item.id !== id);
    return gym;
  }
}
