import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as https from 'node:https';
import qs from 'qs';

@Injectable()
export default class HttpServiceConfig implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: 'https://localhost:5500/api',
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, {
          encode: false,
          allowDots: true,
        });
      },
    };
  }
}
