declare class Server {
    private app;
    constructor();
    private appUse;
    bootstrap(): import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
}
declare const _default: Server;
export default _default;
