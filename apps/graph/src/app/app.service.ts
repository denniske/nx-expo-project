import { Injectable } from '@nestjs/common';
import {myTodoList} from "@nex/data";

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to graph! len:' + myTodoList.length };
  }
}
