import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateGymDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  monthlyFee?: number;

  @IsBoolean()
  @IsOptional()
  isOpen?: boolean;
}
