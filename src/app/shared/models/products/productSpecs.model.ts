export class Specs {

  constructor(public network: string,
              public launch: string[],
              public body: string[],
              public display: string[],
              public platform: string[],
              public memory: string[],
              public camera: string[],
              private sound?: string[],
              private comms?: string[],
              private features?: string[],
              private battery?: string[],
              private misc?: string[],
              private teset?: string[]) {
  }
}
