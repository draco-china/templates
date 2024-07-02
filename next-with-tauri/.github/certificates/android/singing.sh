#!/bin/bash

TARGET_FILE="./src-tauri/gen/android/app/build.gradle.kts"

TEMP_FILE=$(mktemp)

echo "\
import java.util.Properties
import java.io.FileInputStream

val keyPropertiesFile = rootProject.file(\"key.properties\")
val keyProperties = Properties()
keyProperties.load(FileInputStream(keyPropertiesFile))
" > $TARGET_FILE.part.1

cat $TARGET_FILE.part.1 $TARGET_FILE > $TEMP_FILE

echo "\
    signingConfigs {
        create(\"release\") {
            keyAlias = keyProperties[\"keyAlias\"] as String
            keyPassword = keyProperties[\"keyPassword\"] as String
            storeFile = file(keyProperties[\"storeFile\"] as String)
            storePassword = keyProperties[\"storePassword\"] as String
        }
    }" > $TARGET_FILE.part.2

sed -n '/buildTypes {/q;p' $TEMP_FILE > $TARGET_FILE.part.1
sed -n '/buildTypes {/,$p' $TEMP_FILE > $TARGET_FILE.part.3
cat $TARGET_FILE.part.1 $TARGET_FILE.part.2 $TARGET_FILE.part.3 > $TEMP_FILE

echo "\
            signingConfig = signingConfigs.getByName(\"release\")
" > $TARGET_FILE.part.2

sed -n '/proguardFiles(/q;p' $TEMP_FILE > $TARGET_FILE.part.1
sed -n '/proguardFiles(/,$p' $TEMP_FILE > $TARGET_FILE.part.3
cat $TARGET_FILE.part.1 $TARGET_FILE.part.2 $TARGET_FILE.part.3 > $TEMP_FILE

rm $TARGET_FILE.part.1 $TARGET_FILE.part.2 $TARGET_FILE.part.3
mv $TEMP_FILE $TARGET_FILE
