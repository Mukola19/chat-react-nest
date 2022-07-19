import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Schema as MongooseSchema, Document } from 'mongoose'
import { Dialog } from 'src/dialog/dialog.schema'
import { User } from 'src/user/user.schema'
export type MessageDocument = Message & Document

@ObjectType()
@Schema({ timestamps: true })
export class Message {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop({ type: String, default: '' })
  text: string

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: false })
  readed: boolean

  @Field(() => String)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  senderId: User

  @Field(() => String)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Dialog' })
  dialogId: Dialog
}

export const MessageSchema = SchemaFactory.createForClass(Message)
