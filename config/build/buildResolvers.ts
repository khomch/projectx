import webpack from 'webpack';
import { TBuildOptions } from './types/config';

export function buildResolvers(options: TBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
        },
    };
}
