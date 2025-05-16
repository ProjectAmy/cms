const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// konfigurasi static
app.use(express.static(path.join(__dirname, 'public')));

// konfigurasi view js
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts); // aktifkan layout
app.set('layout', 'layout'); // nama file layout.ejs

// konfigurasi route
const supabase = require('./supabaseClient');
// route utama
app.get("/", async (req, res) => {
  // Ambil data articles dari Supabase
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).send('Gagal mengambil data artikel: ' + error.message);
  }

  res.render("index", { title: "Beranda", articles });
});

// about
app.get("/about", (req, res) => {
  res.render("about", { title: "About Me"});
});


// fase 1 : send string
app.get('/fase1', (req, res) => {
    res.send('hello world!')
});

// fase 2 : send file
app.get('/fase2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'old-index.html'))
});

// fase 3 : templating
app.get('/fase3', (req, res) => {
    res.render('index', {nama : 'sidra'})
});

//menjalankan server
app.listen(4000, () => {
    console.log('server berjalan di http://localhost:4000');
});