npx cap sync
cd android;
./gradlew installDebug;
cd ..;
adb shell monkey -p com.benoiteirik.qorse -c android.intent.category.LAUNCHER 1
$AppPID = adb shell pidof -s com.benoiteirik.qorse;
adb -d logcat --pid=$AppPID;
