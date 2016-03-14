import {config} from './config';
export {GraphQL} from './decorators';
export {wrap} from './wrapper';
export {config};

/**
 * Configure this plugin
 *
 * @param aurelia
 * @param configCallback
 */
export function configure(aurelia, configCallback) {
  configCallback(config);
}
