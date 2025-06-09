// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    trailingSlash: 'never',
    build: {
        assets: 'assets',
        assetsPrefix: './',
        format: 'file',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use '@/styles/vars.scss' as *;
                    `,
                },
            },
        },
    },
});
