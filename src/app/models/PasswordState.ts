export interface PasswordState {
  passwords: ReadonlyArray<string>;
  errorMessage?: string;
  state: FetchPasswordData;
}

export enum FetchPasswordData {
  Success = 'SUCCESS',
  Loading = 'LOADING',
  Error = 'ERROR',
}
