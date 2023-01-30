import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { TBuildOptions } from './types/config';

export function buildPlugins({ paths }: TBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
  ]
}