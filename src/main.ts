import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { useContainer } from '@nestjs/class-validator';
import { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

export async function createApp(
  expressApp: Express,
): Promise<INestApplication> {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
    { cors: true },
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  return app;
}

// Aquí agregamos el código para escuchar el servidor en modo local
if (process.env.NODE_ENV !== 'lambda') {
  // Código para entorno local
  async function bootstrap() {
    const expressApp = express();
    const app = await createApp(expressApp);

    const PORT = process.env.PORT || 3000; // Puerto para la ejecución local
    await app.listen(PORT, () => {
      console.log(`Application is running on http://localhost:${PORT}`);
    });
  }

  bootstrap();
}
