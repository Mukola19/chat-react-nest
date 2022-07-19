import { Model } from 'mongoose';
import { Dialog, DialogDocument } from './dialog.schema';
export declare class DialogService {
    private dialogModel;
    constructor(dialogModel: Model<DialogDocument>);
    requestDialogs(userId: string): Promise<Dialog[]>;
    createDialog(authorId: string, partnerId: string): Promise<any>;
}
