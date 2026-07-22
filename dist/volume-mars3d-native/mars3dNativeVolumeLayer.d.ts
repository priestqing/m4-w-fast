import type { ICesiumNativeRuntime, IMars3dNativeBaseLayerLike, IMars3dNativeRuntime, IMars3dNativeVolumeLayer, IMars3dNativeVolumeLayerOptions } from './nativeTypes';
export declare const createMars3dNativeVolumeLayer: (mars3d: IMars3dNativeRuntime, cesium: ICesiumNativeRuntime, options: IMars3dNativeVolumeLayerOptions) => IMars3dNativeVolumeLayer & IMars3dNativeBaseLayerLike;
