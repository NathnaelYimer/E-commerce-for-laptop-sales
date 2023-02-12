import { Module } from "@nestjs/common/decorators";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductService } from "src/product/product.service";

@Module({
    imports: [PrismaModule],
    controllers: [AdminController],
    providers: [AdminService,
    ProductService]
})
export class AdminModule {

}