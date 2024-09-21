const fs = require('fs');

// Load lyrics from file with UTF-8 encoding
const lyrics = JSON.parse(fs.readFileSync('lyrics.json', 'utf-8'));

// Màu sắc ANSI
const color = '\x1b[35m'; // Màu hồng

// Function to print lyrics character by character with a single color
async function printLyrics() {
  for (let i = 0; i < lyrics.length; i++) {
    const lyric = lyrics[i];
    const characters = [...lyric.text]; 
    // Wait until the specified time before printing the lyric
    await sleep(lyric.time * 1000); 

    process.stdout.write(color);
    for (let j = 0; j < characters.length; j++) {
      const char = characters[j];
      process.stdout.write(char); 
      await sleep(55); 
    }
    process.stdout.write('\x1b[0m\n'); 
  }
}

// Helper function to sleep for a given milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Start printing lyrics
printLyrics();
