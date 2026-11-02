# AudioTool

A single-page browser audio studio. Open `index.html` locally or deploy the repository to Vercel as a static site.

## Features

- Import multiple audio files and manage a playlist.
- Play, pause, skip, seek, loop, adjust volume and playback speed.
- Live frequency visualiser using the Web Audio API.
- Select a start and end point, preview the selection, and export it as a WAV file.
- Drag and drop audio files into the library.
- Responsive layout for desktop, tablet and mobile.

## Run locally

Open `index.html` in a modern browser. No build step, server, API key or account is required. Audio is processed locally in the browser; imported files are not uploaded.

## Deploy to Vercel

1. Import `Rohansweb-codexamples/AudioTool` into Vercel.
2. Choose **Other** / static site if prompted.
3. Leave the build command empty.
4. Set the output directory to `.`.
5. Deploy.

Browser support for decoding and exporting depends on the audio format and the browser's Web Audio API implementation.
