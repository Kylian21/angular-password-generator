export interface HttpErrorResponse {
  error: {
    error: boolean;
    message: string;
  };
  message: string;
  name: string;
  status: number;
}
