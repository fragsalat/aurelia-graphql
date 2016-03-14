import {config} from './config';

/**
 * Configure this plugin
 *
 * @param aurelia
 * @param configCallback
 */
export function configure(aurelia, configCallback) {
  configCallback(config);
}
