/**
 * Expo config plugin: mark the portrait screen feature as optional.
 *
 * The app locks to portrait (`orientation: "portrait"` in app.json), which sets
 * `android:screenOrientation="portrait"` on the main activity. Android treats that
 * as an implicit *required* `android.hardware.screen.portrait` feature, and Google
 * Play then hides the app from devices that don't declare it (some tablets,
 * desktops, Android XR). Declaring the feature explicitly with required="false"
 * keeps the portrait lock but restores availability.
 */
const { withAndroidManifest } = require('expo/config-plugins');

const OPTIONAL_FEATURES = ['android.hardware.screen.portrait'];

/** Pure function so it can be unit-tested on a parsed manifest. */
function applyOptionalFeatures(manifestRoot) {
  const manifest = manifestRoot.manifest;
  if (!Array.isArray(manifest['uses-feature'])) manifest['uses-feature'] = [];

  for (const name of OPTIONAL_FEATURES) {
    const existing = manifest['uses-feature'].find((f) => f.$ && f.$['android:name'] === name);
    if (existing) {
      existing.$['android:required'] = 'false';
    } else {
      manifest['uses-feature'].push({ $: { 'android:name': name, 'android:required': 'false' } });
    }
  }
  return manifestRoot;
}

const withOptionalPortraitFeature = (config) =>
  withAndroidManifest(config, (cfg) => {
    cfg.modResults = applyOptionalFeatures(cfg.modResults);
    return cfg;
  });

module.exports = withOptionalPortraitFeature;
module.exports.applyOptionalFeatures = applyOptionalFeatures;
