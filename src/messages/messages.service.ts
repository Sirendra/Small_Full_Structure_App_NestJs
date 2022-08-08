import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}
  findOne = (id: string) => this.messageRepo.findOne(id);
  findAll = () => this.messageRepo.findAll();
  create = (content: string) => this.messageRepo.create(content);
}
