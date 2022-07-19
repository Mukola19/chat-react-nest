import { UseGuards, ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthGuard } from 'src/auth/auth.guard'
import { UserCurrent } from 'src/auth/user-current.decorator'
import { UserTokenDto } from 'src/token/dto/user-token.dto'
import { Dialog } from './dialog.schema'
import { DialogService } from './dialog.service'
import { CreateDialogDto } from './dto/create-dialog.dto'

@Resolver((of) => Dialog)
export class DialogResolver {
  constructor(private readonly dialogService: DialogService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => [Dialog])
  async requestDialogs(@UserCurrent() user: UserTokenDto) {
    const dialogs = await this.dialogService.requestDialogs(user._id)
    console.log(dialogs);
    
    return dialogs
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Dialog)
  async createDialog(
    @Args('input', new ValidationPipe()) input: CreateDialogDto,
    @UserCurrent() user: UserTokenDto
  ) {
    const dialog = await this.dialogService.createDialog(
      user._id,
      input.parnterId
    )

    return dialog
  }
}
