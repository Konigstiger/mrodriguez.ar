import { IConfig } from "./types";
import Axios from "axios";

const loader = new Promise<IConfig>((resolve, reject) => {
  Axios.get('/config.json')
    .then(o => resolve(o.data as IConfig))
    .catch(err => {
      console.log('Error loading config:', err);
      reject(err);
    });
});

export const retrieveConfig = (): Promise<IConfig> => loader;
