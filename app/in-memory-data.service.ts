import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Task } from './todo/task';

export class InMemoryDataService implements InMemoryDbService {
    
    createDb() {
        let tasks = [
            new Task('Wake up to 5:00 am', 1),
            new Task('Bush teeth and work out during 1 hour', 2),
            new Task('Go to work at 8:00 am', 3),
        ];
        return {tasks: tasks};
    }
}