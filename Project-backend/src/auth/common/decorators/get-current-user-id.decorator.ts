import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetCurrentUserId = createParamDecorator(
    (data: string | undefined, context: ExecutionContext) => {
        const request: Express.Request = context.switchToHttp().getRequest();
        if (data){
            return request.user[data]
        }
        return request.user;
        // console.log(request)
        // return request.user['sub'];
    }
)