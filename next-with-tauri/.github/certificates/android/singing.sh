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

