import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository {
  async create(content: string) {
    const messages = await this.findAll();
    const id = Math.floor(Math.random() * 999);
    const newMessage = { id, content: content }
    messages[id] = newMessage;
    await writeFile("messages.json", JSON.stringify(messages));
    return newMessage
  }

  async findOne(id: string) {
    const messages = await this.findAll()
    return messages[id];
  }

  async findAll() {
    return readFile("messages.json", "utf8")
      .then(x => JSON.parse(x));
  }
}