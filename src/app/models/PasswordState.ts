export interface PasswordState {
  passwords: ReadonlyArray<string>;
  errorMessage?: string;
  state: string;
}
