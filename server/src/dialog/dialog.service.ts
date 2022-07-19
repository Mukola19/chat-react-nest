import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Dialog, DialogDocument } from './dialog.schema'

@Injectable()
export class DialogService {
  constructor(
    @InjectModel(Dialog.name) private dialogModel: Model<DialogDocument>
  ) {}

  async requestDialogs(userId: string): Promise<Dialog[]> {
    const objId = new Types.ObjectId(userId)

    const dialogs = await this.dialogModel.find({
      $or: [{ author: objId }, { partner: objId }],
    })

    return dialogs
  }

  async createDialog(authorId: string, partnerId: string): Promise<any> {
    const dialog = await this.dialogModel.findOne({ authorId, partnerId })

    if (dialog) {
      throw new HttpException('Діалог вже існує', HttpStatus.BAD_REQUEST)
    }

    const newDialog = await this.dialogModel.create({ authorId, partnerId })

    return newDialog
  }
}
