declare module "react-native-screenshot-detector" {
    import { NativeEventEmitter } from 'react-native';

    export function subscribe(cb: Function): NativeEventEmitter;
    export function unsubscribe(eventEmitter: NativeEventEmitter): void;
    export function detectScreenshot(): void;
    export function activateAndroidFlagSecure(): void;
    export function deactivateAndroidFlagSecure(): void;
}
