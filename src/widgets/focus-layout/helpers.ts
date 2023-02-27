import type { CustomHTMLElement } from './types';

export const requestFullscreen = async () => {
    const $html = document.documentElement as CustomHTMLElement;

    if ($html.requestFullscreen) {
        await $html.requestFullscreen();
    } else if ($html.webkitRequestFullscreen) {
        await $html.webkitRequestFullscreen();
    } else if ($html.msRequestFullscreen) {
        await $html.msRequestFullscreen();
    }
};
