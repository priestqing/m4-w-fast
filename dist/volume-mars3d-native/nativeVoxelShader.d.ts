import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '../volume-scene/transferTypes';
export declare const createNativeVoxelFragmentShader: (colorStops: readonly VolumeColorStopInput[], opacityStops: readonly IVolumeOpacityStop[], colorMode: VolumeColorMode) => string;
