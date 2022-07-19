import mongoose, { Schema as MongooseSchema, Document } from 'mongoose';
export declare type TokenDocument = Token & Document;
export declare class Token {
    _id: MongooseSchema.Types.ObjectId;
    refreshToken: string;
    userId: MongooseSchema.Types.ObjectId;
}
export declare const TokenSchema: mongoose.Schema<Token, mongoose.Model<Token, any, any, any, any>, {}, {}, any, {}, "type", Token>;
