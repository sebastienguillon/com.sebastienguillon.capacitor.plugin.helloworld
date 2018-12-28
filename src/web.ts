import { WebPlugin } from '@capacitor/core';
import { HelloWorldPlugin } from './definitions';

export class HelloWorldWeb extends WebPlugin implements HelloWorldPlugin {
  constructor() {
    super({
      name: 'HelloWorld',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const HelloWorld = new HelloWorldWeb();

export { HelloWorld };
