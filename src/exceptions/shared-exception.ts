class HttpException extends Error {
  public status: number; // Declare the status property

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
