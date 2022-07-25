$env:NODE_ENV="production";
npm run build;
npx cap sync;
npx cap open android;
$env:NODE_ENV="development"