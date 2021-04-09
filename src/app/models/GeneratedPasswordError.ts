export class GeneratedPasswordError extends Error {
  constructor(message: string, status?: number) {
    super((message = message));
  }

  get message(): string {
    return super.message;
  }
}
