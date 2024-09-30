### Create an upload keystore

If you have an existing keystore, skip to the next step. If not, create one using one of the following methods:

1. Follow the [Android Studio key generation steps](https://developer.android.com/studio/publish/app-signing#generate-key)
2. Run the following command at the command line:
   On macOS or Linux, use the following command:

   ```
   keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA \
           -keysize 2048 -validity 10000 -alias upload
   ```

   On Windows, use the following command in PowerShell:

   ```
   keytool -genkey -v -keystore %userprofile%\upload-keystore.jks ^
           -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 ^
           -alias upload
   ```

   This command stores the `upload-keystore.jks` file in your home directory. If you want to store it elsewhere, change the argument you pass to the `-keystore` parameter. **However, keep the `keystore` file private; don't check it into public source control!**

### Reference the keystore from the app

Create a file named `[project]/android/key.properties` that contains a reference to your keystore. Don't include the angle brackets (`< >`). They indicate that the text serves as a placeholder for your values.

```
storePassword=<password-from-previous-step>
keyPassword=<password-from-previous-step>
keyAlias=upload
storeFile=<keystore-file-location>
```

The `storeFile` might be located at `/Users/<user name>/upload-keystore.jks` on macOS or `C:\\Users\\<user name>\\upload-keystore.jks` on Windows.

### Configure signing in gradle

When building your app in release mode, configure gradle to use your upload key. To configure gradle, edit the `<project>/android/app/build.gradle` file.

1. Add the keystore information from your properties file before the `android` block:

   ```
   +   def keystoreProperties = new Properties()
   +   def keystorePropertiesFile = rootProject.file('key.properties')
   +   if (keystorePropertiesFile.exists()) {
   +       keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
   +   }
   +
      android {
         ...
      }
   ```

2. Load the `key.properties` file into the `keystoreProperties` object.

3. Add the signing configuration before the `buildTypes` block:

   ```
   +   signingConfigs {
   +       release {
   +           keyAlias keystoreProperties['keyAlias']
   +           keyPassword keystoreProperties['keyPassword']
   +           storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
   +           storePassword keystoreProperties['storePassword']
   +       }
   +   }
      buildTypes {
         release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now,
            // so `flutter run --release` works.
   -           signingConfig signingConfigs.debug
   +           signingConfig signingConfigs.release
         }
      }
   ```
