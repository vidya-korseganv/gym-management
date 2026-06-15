import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateGymDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsNumber()
  @Min(1)
  monthlyFee: number;

  @IsOptional()
  @IsBoolean()
  isOpen?: boolean;
}
