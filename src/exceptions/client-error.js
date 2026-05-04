// ClientError mewarisi (extends) kelas Error bawaan JavaScript
// dan digunakan untuk menangani error yang berasal dari client/pengguna.
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = "ClientError";
    this.statusCode = statusCode;
  }
}
export default ClientError;
