import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosInterceptorService } from '@app/axios-interceptor';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AxiosInterceptorService],
})
export class AppModule {}
