
declare interface BuildInfo {
  commitHash: string;
  buildTime: number;
}

// eslint-disable-next-line no-underscore-dangle
declare const __BROWSER__: boolean;
// eslint-disable-next-line no-underscore-dangle
declare const __BUILD_INFO__: BuildInfo;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
}
