export interface PasswordState {
  passwords: ReadonlyArray<string>;
  errorMessage?: string;
  state: State;
}

export enum State {
  Success = 'SUCCESS',
  Loading = 'LOADING',
  Error = 'ERROR',
}
