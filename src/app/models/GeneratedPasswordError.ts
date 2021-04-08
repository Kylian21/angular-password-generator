export class GeneratedPasswordError {
  private readonly _message: string;
  private readonly _status?: number;

  constructor(message: string, status?: number) {
    this._message = message;
    this._status = status;
  }

  get message(): string {
    return this._message;
  }

  get status(): number {
    if (this._status) {
      return this._status;
    } else {
      return 0;
    }
  }
}
