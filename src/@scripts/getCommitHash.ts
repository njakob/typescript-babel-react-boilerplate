import * as childProcess from 'child_process';

export function getCommitHash(): string {
  return childProcess.execSync('git rev-parse HEAD').toString('utf8').trim();
}
