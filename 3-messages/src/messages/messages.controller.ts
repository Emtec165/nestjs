import { Body, Controller, Get, Param, Post, NotFoundException } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {

  constructor(public service: MessagesService) {
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get("/:id")
  async get(@Param("id") id: string) {
    const message = await this.service.findOne(id);
    if (!message) {
      throw new NotFoundException("Message with id: [" + id + "] not found");
    }
    return message;
  }
}
