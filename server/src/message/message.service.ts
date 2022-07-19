import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { DialogDocument } from 'src/dialog/dialog.schema'
import { Message } from './message.schema'

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<DialogDocument>
  ) {}





}
