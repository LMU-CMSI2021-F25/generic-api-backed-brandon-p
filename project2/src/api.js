// src/api.js

// Fetches a random cat image from TheCatAPI
export async function getRandomCat() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error("Failed to fetch cat image");
    }
    const data = await response.json();
    return data[0].url; // Return just the image URL
  }
  