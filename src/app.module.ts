import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ContentModule } from './modules/content/content.module';
import { CollaborationModule } from './modules/collaboration/collaboration.module';

@Module({
  imports: [UserModule, ContentModule, CollaborationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
