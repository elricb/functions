import {rm} from "fs";

export default function (directory: string): Promise<void> {
  return new Promise((resolve, reject) => {
    rm(directory, {recursive: true, force: true}, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
}
