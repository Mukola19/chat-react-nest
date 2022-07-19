import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Schema as MongooseSchema, Document } from 'mongoose'
export type UserDocument = User & Document

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop({ type: String, require: true, unique: true })
  email: string

  @Prop({ type: String, required: true })
  password: string

  @Field(() => String)
  @Prop({ type: String, required: true })
  firstName: string

  @Field(() => String)
  @Prop({ type: String, required: true })
  lastName: string

  @Field(() => String)
  @Prop({ type: String, default: '' })
  photoName: string

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: false })
  isActiveted: boolean

  @Field(() => String)
  @Prop({ type: String })
  linkActivate: string

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: false })
  isBlocked: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
