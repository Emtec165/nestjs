import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {

  constructor(public repository: MessageRepository) {
  }

  create(content: string) {
    return this.repository.create(content);
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  findAll() {
    return this.repository.findAll();
  }
}