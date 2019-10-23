import { Config } from '@stencil/core';
import { OutputTargetDist } from '@stencil/core/dist/declarations/output-targets';
import { sass } from '@stencil/sass';

const targetDist: OutputTargetDist = {
    type: 'dist',
    copy: [{ src: '../lwc.config.json' }],
};

export const config: Config = {
    namespace: 'test-webcomponent-lwc-components',
    outputTargets: [targetDist],
    plugins: [sass()],
    testing: {
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    tsconfig: './tsconfig.dev.json',
};
