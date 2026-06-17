"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => {
            const validationErrors = errors.map((error) => ({
                field: error.property,
                messages: Object.values(error.constraints ?? {}),
            }));
            return new common_1.BadRequestException({
                statusCode: 400,
                error: "Bad Request",
                message: "Validation failed",
                validationErrors,
            });
        },
    }));
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`Gym Management API is running on http://localhost:${port}/api`);
}
void bootstrap();
//# sourceMappingURL=main.js.map