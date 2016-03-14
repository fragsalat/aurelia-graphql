import {HttpClient, json} from 'aurelia-fetch-client';
import {Container} from 'aurelia-framework';
import {config} from './config';

/**
 * Wrapper function to extend target class
 *
 * @param target
 */
export function wrap(target) {
  /**
   * GraphQL wrapper class
   */
  class ViewModelWrapper extends target {

    /**
     * Start graphql query
     */
    constructor() {
      super();
      // Check if a graphql query is defined
      if (target.getQuery) {
        this.query();
      }
    }

    /**
     * Send GraphQL query to server
     */
    query() {
      super.query && super.query();
      // Post body for graphql request
      let body = json({
        query: target.getQuery(),
        variables: this.getVariables && this.getVariables() || {}
      });
      // Get pre-configured or global fetch HttpClient instance
      Promise.resolve(config.httpClient || Container.get(HttpClient))
        .then(httpClient => {
          // Only permit fetch client
          if (httpClient.fetch) {
            return httpClient.fetch(config.baseUri, {
              method: 'post',
              body: body
            });
          }
          throw new Error('Missing fetch function on HttpClient');
        })
        .then(response => response.json())
        .then(response => this.parseResponse(response))
        .then(data => this.handleData(data));
    }

    /**
     * Parse the graphql server response and return only the data
     *
     * @param response
     * @returns {*}
     */
    parseResponse(response) {
      if (typeof config.responseParser === 'function') {
        return config.responseParser.apply(this, arguments);
      }

      return response;
    }

    /**
     * Handle the graphql data and assign it to the view model
     *
     * @param data
     */
    handleData(data) {
      super.handleData && super.handleData(data);
      this.data = data;
    }
  }

  return ViewModelWrapper;
}
