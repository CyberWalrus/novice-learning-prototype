export type CustomHTMLElement = HTMLElement & {
    msRequestFullscreen: () => Promise<void>;
    webkitRequestFullscreen: () => Promise<void>;
};
