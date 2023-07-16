import {Controller, Get} from "@nestjs/common";

@Controller('sample-controller')
export class AppController {

    @Get('hi')
    getHi() {
        return 'hi!'
    }

    @Get('bye')
    getBye() {
        return 'bye!'
    }
}