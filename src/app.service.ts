import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getHello(): Promise<any> {
    return this.httpService
      .post('https://postman-echo.com/post', {
        message: 'Hello, World!',
      })
      .pipe(map((response) => response.data.data.message));
  }
}
