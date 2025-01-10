
# Deeplinks with Expo Router

This guide provides steps to configure and test deep linking with the Expo Router on both iOS and Android platforms.

## Setup

1. **Set `scheme` in `app.json`**  
   Add your custom scheme in the `expo` configuration:
   ```json
   {
     "expo": {
       "scheme": "deeplink"
     }
   }
   ```

2. **Prebuild the app**  
   Run the following command to generate native code for your app:
   ```bash
   npx expo prebuild
   ```

3. **Run the app**  
   Build and run the app on your desired platform:
   ```bash
   npx expo run:ios
   npx expo run:android
   ```

## Deep Linking Configuration

### iOS

Ensure the `Info.plist` file contains `CFBundleURLSchemes` with your custom scheme:

```xml
<dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>deeplink</string>
    <string>com.vkondratiev.touchbistro.deeplinksexporouter</string>
  </array>
</dict>
```

To test, open the following URL in Safari on your iOS device or simulator:  
`deeplink://details/Vladyslav`

This should redirect you to the corresponding screen in the app.

---

### Android

Use the following ADB command to test the deep link on an Android emulator or device:

```bash
adb shell am start -W -a android.intent.action.VIEW -d "deeplink://details/Vladyslav"
```

This should open the corresponding screen in your app.

4. **Static Web Export**

To export the static web application, run the following command:  
```bash
yarn export
```

Deploy the contents of the `.dist` folder to your hosting service. After deployment, update the website's URL in the `app.json` file:

```json
"plugins": [
  [
    "expo-router",
    {
      "origin": "<YOUR_ORIGIN>"
    }
  ]
]
```

5. **Universal Links on IOS**

Follow [these instructions](https://docs.expo.dev/linking/ios-universal-links/) to set up universal links on iOS.
 
Afterward, validate your **Apple App Site Association (AASA)** file using [this validator](https://branch.io/resources/aasa-validator/).
