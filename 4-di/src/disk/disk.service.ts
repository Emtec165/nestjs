import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";

@Injectable()
export class DiskService {

  constructor(private powerService: PowerService) {
    console.log('PowerService constructor');
  }

  getData() {
    console.log('Drawing 20 watts of power from PowerService')
    this.powerService.supplyPower(20)
    return 'data!'
  }
}
