import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { GymService } from './gym.service';
export declare class GymController {
    private readonly gymService;
    constructor(gymService: GymService);
    getAllGyms(): Gym[];
    getGymById(id: number): Gym;
    createGym(createGymDto: CreateGymDto): Gym;
    updateGym(id: number, updateGymDto: UpdateGymDto): Gym;
    deleteGym(id: number): Gym;
}
