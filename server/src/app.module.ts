import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { DirectiveLocation, GraphQLDirective } from 'graphql'
import { AuthModule } from './auth/auth.module'
import { upperDirectiveTransformer } from './common/directives/upper-case.directive'
import { UserModule } from './user/user.module'
import { TokenModule } from './token/token.module'
import { DialogModule } from './dialog/dialog.module'
import { MessageModule } from './message/message.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mykola:1WOBKUt8tndGToH9@cluster0.poid49k.mongodb.net/chat?retryWrites=true&w=majority`
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
    }),
    UserModule,
    AuthModule,
    TokenModule,
    DialogModule,
    MessageModule,
  ],
})
export class AppModule {}
