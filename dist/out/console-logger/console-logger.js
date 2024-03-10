"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    log(...args) {
        console.log(args);
    }
    error(...args) {
        console.error(args);
    }
    end() {
        console.log('Операция завершена успешно');
    }
}
const consoleLogger = new ConsoleLogger();
