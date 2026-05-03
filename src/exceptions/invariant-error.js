// InvariantError mewarisi kelas ClientError
// dan digunakan untuk kesalahan bisnis logic pada data yang dikirimkan oleh client.
import ClientError from "../exceptions/client-error.js";
class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "InvariantError";
  }
}
export default InvariantError;
