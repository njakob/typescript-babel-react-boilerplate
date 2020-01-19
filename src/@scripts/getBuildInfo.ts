import { getCommitHash } from './getCommitHash';

export function getBuildInfo() {
  return {
    commitHash: getCommitHash(),
    buildTime: Date.now(),
  };
}
