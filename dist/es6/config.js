class Config {

  /**
   * Instance of httpClient
   *
   * @type {HttpClient}
   */
  httpClient = null;

  /**
   * Url to GraphQL server
   *
   * @type {string}
   */
  baseUri = 'http://dev.greatshot.de/?_url=/graphql/query&XDEBUG_SESSION_START=dbg';

  /**
   * Parser function for GraphQL server response
   *
   * @param response {object}
   * @returns {*}
   */
  responseParser = function parseResponse(response) {
    if (response.error) {
      throw new Error('Graphql query failed');
    }
    return response.data;
  }
}

export const config = new Config();
