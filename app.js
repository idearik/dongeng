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
    slides: [
      { image: "/images/MK-Image1.webp", audio: "/audio/MK-Audio1.mp3" },
      { image: "/images/MK-Image2.webp", audio: "/audio/MK-Audio2.mp3" },
      { image: "/images/MK-Image3.webp", audio: "/audio/MK-Audio3.mp3" },
      { image: "/images/MK-Image4.webp", audio: "/audio/MK-Audio4.mp3" },
      { image: "/images/MK-Image5.webp", audio: "/audio/MK-Audio5.mp3" }
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

app.get('/dongeng/:id', (req, res) => {
  const dongeng = dongengs[req.params.id];
  res.render('dongeng', { dongeng });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
