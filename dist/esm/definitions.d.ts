declare global {
    interface PluginRegistry {
        HelloWorld?: HelloWorldPlugin;
    }
}
export interface HelloWorldPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
