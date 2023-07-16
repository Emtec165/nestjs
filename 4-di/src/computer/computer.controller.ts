import { Controller, Get } from "@nestjs/common";
import { CpuService } from "../cpu/cpu.service";
import { DiskService } from "../disk/disk.service";

@Controller('computer')
export class ComputerController {

  constructor(private cpuService: CpuService, private diskService: DiskService) {
    console.log('ComputerController constructor');
  }

  @Get('run')
  run() {
    return [
      this.cpuService.compute(2, 3),
      this.diskService.getData()
    ]
  }
}
