import { WebPlugin } from '@capacitor/core';
import { HelloWorldPlugin } from './definitions';
export declare class HelloWorldWeb extends WebPlugin implements HelloWorldPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const HelloWorld: HelloWorldWeb;
export { HelloWorld };
