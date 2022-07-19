import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TokenModule } from 'src/token/token.module'
import { DialogResolver } from './dialog.resolver'
import { Dialog, DialogSchema } from './dialog.schema'
import { DialogService } from './dialog.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dialog.name, schema: DialogSchema }]),
    TokenModule,
  ],
  providers: [DialogResolver, DialogService],
})
export class DialogModule {}
