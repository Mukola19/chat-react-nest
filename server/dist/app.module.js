"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const apollo_1 = require("@nestjs/apollo");
const graphql_2 = require("graphql");
const auth_module_1 = require("./auth/auth.module");
const upper_case_directive_1 = require("./common/directives/upper-case.directive");
const user_module_1 = require("./user/user.module");
const token_module_1 = require("./token/token.module");
const dialog_module_1 = require("./dialog/dialog.module");
const message_module_1 = require("./message/message.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://mykola:1WOBKUt8tndGToH9@cluster0.poid49k.mongodb.net/chat?retryWrites=true&w=majority`),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'schema.gql',
                context: ({ req, res }) => ({ req, res }),
                transformSchema: (schema) => (0, upper_case_directive_1.upperDirectiveTransformer)(schema, 'upper'),
                installSubscriptionHandlers: true,
                buildSchemaOptions: {
                    directives: [
                        new graphql_2.GraphQLDirective({
                            name: 'upper',
                            locations: [graphql_2.DirectiveLocation.FIELD_DEFINITION],
                        }),
                    ],
                },
                cors: {
                    origin: 'http://localhost:3000',
                    credentials: true,
                },
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            token_module_1.TokenModule,
            dialog_module_1.DialogModule,
            message_module_1.MessageModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map