"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GymService = void 0;
const common_1 = require("@nestjs/common");
let GymService = class GymService {
    gyms = [
        {
            id: 1,
            name: "Iron Temple Fitness",
            location: "Hyderabad",
            monthlyFee: 1500,
            isOpen: true,
            createdAt: new Date("2026-06-15T09:00:00.000Z"),
        },
        {
            id: 2,
            name: "Core Strength Gym",
            location: "Bengaluru",
            monthlyFee: 2000,
            isOpen: true,
            createdAt: new Date("2026-06-15T09:30:00.000Z"),
        },
    ];
    nextId = 3;
    findAll() {
        return this.gyms;
    }
    findOne(id) {
        const gym = this.gyms.find((item) => item.id === id);
        if (!gym) {
            throw new common_1.NotFoundException(`Gym with id ${id} was not found`);
        }
        return gym;
    }
    create(createGymDto) {
        const newGym = {
            id: this.nextId,
            ...createGymDto,
            isOpen: createGymDto.isOpen ?? true,
            createdAt: new Date(),
        };
        this.nextId += 1;
        this.gyms.push(newGym);
        return newGym;
    }
    update(id, updateGymDto) {
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
    remove(id) {
        const gym = this.findOne(id);
        this.gyms = this.gyms.filter((item) => item.id !== id);
        return gym;
    }
};
exports.GymService = GymService;
exports.GymService = GymService = __decorate([
    (0, common_1.Injectable)()
], GymService);
//# sourceMappingURL=gym.service.js.map