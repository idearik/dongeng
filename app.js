const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for dongeng
const dongengs = [
  {
    title: "Legenda Timun Mas",
    cover: "/images/Cover1.webp",
    audio: "/audio/kancil.mp3",
    audioCreditUrl: "https://example.com/audio-creator",
    audioCreditName: "Audio Creator",
    illustrationCreditUrl: "https://example.com/illustrator",
    illustrationCreditName: "Illustrator Name",
    slides: [
      { image: "/images/TA-Image1.webp", audio: "/audio/TA-Audio1.mp3" },
      { image: "/images/TA-Image2.webp", audio: "/audio/TA-Audio2.mp3" },
      { image: "/images/TA-Image3.webp", audio: "/audio/TA-Audio3.mp3" },
      { image: "/images/TA-Image4.webp", audio: "/audio/TA-Audio4.mp3" },
      { image: "/images/TA-Image5.webp", audio: "/audio/TA-Audio5.mp3" }
    ]
  },
  {
    title: "Cerita Malin Kundang",
    cover: "/images/Cover2.webp",
    audio: "/audio/kancil.mp3",
    audioCreditUrl: "https://example.com/audio-creator",
    audioCreditName: "Audio Creator",
    illustrationCreditUrl: "https://example.com/illustrator",
    illustrationCreditName: "Illustrator Name",
    slides: [
      { image: "/images/MK-Image1.webp", audio: "/audio/MK-Audio1.mp3" },
      { image: "/images/MK-Image2.webp", audio: "/audio/MK-Audio2.mp3" },
      { image: "/images/MK-Image3.webp", audio: "/audio/MK-Audio3.mp3" },
      { image: "/images/MK-Image4.webp", audio: "/audio/MK-Audio4.mp3" },
      { image: "/images/MK-Image5.webp", audio: "/audio/MK-Audio5.mp3" }
    ]
  },
  {
    title: "Si Kancil & Buaya",
    cover: "/images/KancilCover.webp",
    audio: "/audio/kancil.mp3",
    audioCreditUrl: "https://www.instagram.com/valentinangeliq/",
    audioCreditName: "Valentina Angelique",
    illustrationCreditUrl: "https://example.com/illustrator",
    illustrationCreditName: "Illustrator Name",
    slides: [
      { image: "/images/Kancil1.webp", audio: "/audio/Kancil1.m4a" },
      { image: "/images/Kancil2.webp", audio: "/audio/Kancil2.m4a" },
      { image: "/images/Kancil3.webp", audio: "/audio/Kancil3.m4a" },
      { image: "/images/Kancil4.webp", audio: "/audio/Kancil4.m4a" },
      { image: "/images/Kancil5.webp", audio: "/audio/Kancil5.m4a" },
      { image: "/images/Kancil6.webp", audio: "/audio/Kancil6.m4a" },
      { image: "/images/Kancil7.webp", audio: "/audio/Kancil7.m4a" }
    ]
  },
  // Add more dongengs here
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { dongengs });
});

// Rute untuk halaman About
app.get('/about', (req, res) => {
    res.render('about'); // Render halaman about.ejs
});

// Rute untuk halaman dongeng
app.get('/dongeng/:id', (req, res) => {
  const dongeng = dongengs[req.params.id];
  res.render('dongeng', { dongeng, dongengs }); // Kirimkan juga array dongengs
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
