import type { ICesiumNativeRuntime, IMars3dNativeBaseLayerLike, IMars3dNativeRuntime, IMars3dNativeSliceVolumeLayer, IMars3dNativeVolumeLayerOptions } from './nativeTypes';
export declare const createMars3dNativeSliceVolumeLayer: (mars3d: IMars3dNativeRuntime, cesium: ICesiumNativeRuntime, options: IMars3dNativeVolumeLayerOptions) => IMars3dNativeSliceVolumeLayer & IMars3dNativeBaseLayerLike;
