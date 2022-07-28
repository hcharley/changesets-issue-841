import * as env from 'env-var';
import { EnvVar } from './env-var.enum';

export class Config {
  static get get() {
    return env.get;
  }

  static get port() {
    return this.get(EnvVar.Port).default(2000).required().asPortNumber();
  }
}
