import type { VolumeColorMode, VolumeColorStopInput, IVolumeOpacityStop } from './transferTypes';
import type { IWebgpuOpacityStop, IWebgpuTransferStop } from './rendering/webgpu';
export declare const prepareWebgpuVolumeTransfer: (colorStops: readonly VolumeColorStopInput[], opacityStops: readonly IVolumeOpacityStop[]) => {
    colorStops: IWebgpuTransferStop[];
    opacityStops: IWebgpuOpacityStop[];
};
export declare const sampleVolumeTransferColor: (value: number, colorStops: readonly IWebgpuTransferStop[], opacity: number, colorMode: VolumeColorMode) => readonly [number, number, number, number];
export declare const sampleVolumeTransferOpacity: (value: number, opacityStops: readonly IVolumeOpacityStop[], colorMode: VolumeColorMode) => number;
