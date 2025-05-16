module.exports = {
  proxy: "localhost:4000", // Ganti port jika server Anda berbeda
  files: ["views/**/*.ejs", "public/**/*.*"], // Pantau perubahan pada file ejs dan public
  port: 3000, // Port browser-sync
  open: false, // Tidak membuka browser otomatis
  notify: false // Nonaktifkan notifikasi browser-sync
};
