import { UserTokenDto } from 'src/token/dto/user-token.dto';
import { Dialog } from './dialog.schema';
import { DialogService } from './dialog.service';
import { CreateDialogDto } from './dto/create-dialog.dto';
export declare class DialogResolver {
    private readonly dialogService;
    constructor(dialogService: DialogService);
    requestDialogs(user: UserTokenDto): Promise<Dialog[]>;
    createDialog(input: CreateDialogDto, user: UserTokenDto): Promise<any>;
}
