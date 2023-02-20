export interface Config {
  baseURL: string;
  connectionsURL: string;
}
export const config: Config = {
  baseURL: 'http://transport.opendata.ch/v1/',
  connectionsURL: 'http://transport.opendata.ch/v1/connections',
};
