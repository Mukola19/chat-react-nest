import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Schema as MongooseSchema, Document } from 'mongoose'
import { User } from 'src/user/user.schema'
export type TokenDocument = Token & Document

@ObjectType()
@Schema({ timestamps: true })
export class Token {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop({ type: String, default: '' })
  refreshToken: string

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: MongooseSchema.Types.ObjectId
}

export const TokenSchema = SchemaFactory.createForClass(Token)
