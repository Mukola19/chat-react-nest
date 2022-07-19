import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Schema as MongooseSchema, Document } from 'mongoose'
import { Message } from 'src/message/message.schema'
import { User } from 'src/user/user.schema'
export type DialogDocument = Dialog & Document

@ObjectType()
@Schema({ timestamps: true })
export class Dialog {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => User)
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'User' })
  authorId: User

  @Field(() => User)
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'User' })
  partnerId: User

  @Field(() => [Message])
  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Message' }])
  messagesId: Message[] 

  @Field(() => String)
  @Prop({ type: String, default: '' })
  lastMessage: string
}

export const DialogSchema = SchemaFactory.createForClass(Dialog)
