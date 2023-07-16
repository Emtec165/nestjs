import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

  constructor() {
    console.log('PowerService constructor');
  }

  supplyPower(watts: number) {
    console.log('Supplying: [' + watts + '] worth of power');
  }
}
