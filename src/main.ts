import {
  BadRequestException,
  ValidationPipe,
  type ValidationError,
} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const validationErrors = errors.map((error) => ({
          field: error.property,
          messages: Object.values(error.constraints ?? {}),
        }));

        return new BadRequestException({
          statusCode: 400,
          error: "Bad Request",
          message: "Validation failed",
          validationErrors,
        });
      },
    }),
  );

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  console.log(`Gym Management API is running on http://localhost:${port}/api`);
}

void bootstrap();
