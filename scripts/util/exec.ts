import { exec as fsExec } from "child_process";

/**
 * Executes a command and returns a promise of it's Out/Error buffers
 * @param command - The command to run, with space-separated arguments.
 * @param options - Object containing fsExec options (https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
 * @returns Promise
 */
export default function exec(command: string, options?: {}): Promise<unknown> {
  return new Promise((resolve, reject) => {
    fsExec(command, options, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      } else {
        return resolve([stdout, stderr]);
      }
    });
  });
}
