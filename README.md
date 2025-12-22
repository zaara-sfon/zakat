# Calc (Expo + TypeScript)

This is a minimal Expo + React Native app scaffolded with TypeScript (`.tsx`) files.

## Setup (PowerShell on Windows)

1. Install dependencies (npm):

```powershell
cd "c:\Users\SFON\Desktop\calc"
npm install
```

2. Start the Expo dev server:

```powershell
npx expo start
```

- To run on Android emulator or device: `npx expo start --android`
- To run on iOS simulator (macOS only): `npx expo start --ios`
- To run on web: `npx expo start --web`

Notes:
- If you prefer `yarn` instead of `npm`, run `yarn` then `yarn start`.
- This project uses `TypeScript`; source entry is `src/App.tsx`.

## Files created

- `package.json` — project manifest
- `app.json` — Expo config
- `babel.config.js` — Babel / Expo preset
- `tsconfig.json` — TypeScript config
- `src/App.tsx` — main app component
- `.gitignore`
