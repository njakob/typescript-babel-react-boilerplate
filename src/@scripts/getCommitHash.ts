
import * as childProcess from 'child_process';

export default function getCommitHash(): string {
  return childProcess.execSync('git rev-parse HEAD').toString('utf8').trim();
}
