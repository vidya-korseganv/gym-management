import { CreateGymDto } from "./dto/create-gym.dto";
import { UpdateGymDto } from "./dto/update-gym.dto";
import { Gym } from "./entities/gym.entity";
export declare class GymService {
    private gyms;
    private nextId;
    findAll(): Gym[];
    findOne(id: number): Gym;
    create(createGymDto: CreateGymDto): Gym;
    update(id: number, updateGymDto: UpdateGymDto): Gym;
    remove(id: number): Gym;
}
