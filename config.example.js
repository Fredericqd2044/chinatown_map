// Configuration template - Copy this to config.js and add your actual keys

const CONFIG = {
    // Supabase Configuration
    supabase: {
        url: 'YOUR_SUPABASE_URL_HERE',
        anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
    },

    // Mapbox Configuration
    mapbox: {
        accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN_HERE'
    },

    // Map Settings
    map: {
        center: [-74.0000, 40.7150], // Columbus Park, Chinatown NYC
        zoom: 17,
        minZoom: 14,
        maxZoom: 19,
        pitch: 45,
        bearing: -25,
        bounds: [
            [-74.0025, 40.7138], // Southwest
            [-73.9975, 40.7162]  // Northeast
        ]
    }
};
