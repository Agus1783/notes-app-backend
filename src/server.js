// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Express
import server from "./server/index.js";

const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
