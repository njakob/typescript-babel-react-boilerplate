
import getCommitHash from './getCommitHash';

export default function getBuildInfo(): BuildInfo {
  return {
    commitHash: getCommitHash(),
    buildTime: Date.now(),
  };
}
