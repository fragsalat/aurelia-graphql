import {wrap} from './wrapper';

/**
 * Annotation to wrap ViewModel's into a GraphQL wrapper
 *
 * @param target
 * @returns {*}
 */
export function GraphQL(target) {
  return wrap(target);
}
