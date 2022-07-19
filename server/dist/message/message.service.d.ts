import { Model } from 'mongoose';
import { DialogDocument } from 'src/dialog/dialog.schema';
export declare class MessageService {
    private messageModel;
    constructor(messageModel: Model<DialogDocument>);
}
