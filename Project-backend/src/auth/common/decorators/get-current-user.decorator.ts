import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common/decorators";

export const GetCurrentUser = createParamDecorator(
    (data: string | undefined, context: ExecutionContext) => {
        const request: Express.Request = context.switchToHttp().getRequest();
        return request.user[data];
    }
)