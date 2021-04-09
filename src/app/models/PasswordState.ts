export interface PasswordState {
  passwords: ReadonlyArray<string>;
  errorMessage?: string;
  state: FetchData;
}

export enum FetchData {
  Success = 'SUCCESS',
  Loading = 'LOADING',
  Error = 'ERROR',
}
