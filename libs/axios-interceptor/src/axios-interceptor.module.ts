import { Module } from '@nestjs/common';
import { AxiosInterceptorService } from './axios-interceptor.service';

@Module({
  providers: [AxiosInterceptorService],
  exports: [AxiosInterceptorService],
})
export class AxiosInterceptorModule {}
