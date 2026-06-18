# Chinatown Park Interactive Map

An interactive map application for Columbus Park in Chinatown, NYC. Users can add, edit, and view locations on the map with photos and descriptions.

## Setup

1. **Copy the configuration template:**
   ```bash
   cp config.example.js config.js
   ```

2. **Add your API keys to `config.js`:**
   - Supabase URL and anon key
   - Mapbox access token

3. **Set up Supabase database:**
   - Create a table named `pin` with the following columns:
     - `id` (bigint, primary key)
     - `created_at` (timestamp)
     - `name` (text)
     - `description` (text)
     - `photo_url` (text)
     - `longitude` (double precision)
     - `latitude` (double precision)

4. **Enable Row Level Security (RLS) in Supabase:**
   Run this SQL in your Supabase SQL Editor:
   ```sql
   ALTER TABLE pin ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Allow all access" ON pin
   FOR ALL USING (true) WITH CHECK (true);
   ```

5. **Open the HTML file in your browser**

## Files

- `chinatown-park-map.html` - Main application
- `config.js` - Your API keys (not committed to Git)
- `config.example.js` - Template for configuration
- `.gitignore` - Protects your config.js from being committed

## Features

- 🗺️ Interactive map with Mapbox
- 📍 Add custom pins with names, descriptions, and photos
- ✏️ Edit existing pins
- 🗑️ Delete pins
- 🌓 Dynamic lighting based on NYC time
- 📱 Resizable sidebar
- ☁️ Cloud storage with Supabase

## Deployment

To deploy on Netlify:
1. Upload all files including `config.js` (the anon key is safe to expose)
2. Or use Netlify environment variables for extra security
