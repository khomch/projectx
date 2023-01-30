export type TBuildMode = 'production' | 'development';

export type TBuildPath = {
  entry: string;
  build: string;
  html: string;
}

export type TBuildEnv = {
  mode: TBuildMode,
  port: number
}

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPath;
  isDev: boolean;
  port: number;
}
