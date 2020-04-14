declare interface BuildInfo {
  commitHash: string;
  buildTime: number;
}

declare const __BROWSER__: boolean;
declare const __BUILD_INFO__: BuildInfo;
