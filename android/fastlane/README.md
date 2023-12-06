fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android increment_vc

```sh
[bundle exec] fastlane android increment_vc
```

Increment version code

### android build_app_release

```sh
[bundle exec] fastlane android build_app_release
```

Build the AAB and APK for Android staging build release

### android staging_android_firebase_build

```sh
[bundle exec] fastlane android staging_android_firebase_build
```

Upload Android Staging Build to Firebase app distribution

### android staging_android_firebase_build_without_patch_versioning

```sh
[bundle exec] fastlane android staging_android_firebase_build_without_patch_versioning
```

Upload Android Staging Build to Firebase app distribution without incrementing version

### android build_prod_app_release

```sh
[bundle exec] fastlane android build_prod_app_release
```

Build the AAB for Android production build release

### android production_android_playstore_build

```sh
[bundle exec] fastlane android production_android_playstore_build
```

Upload Android Staging Build to Firebase app distribution

### android production_android_playstore_build_without_patch_versioning

```sh
[bundle exec] fastlane android production_android_playstore_build_without_patch_versioning
```

Upload Android Staging Build to Firebase app distribution without incrementing version

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
