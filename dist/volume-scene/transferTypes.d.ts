import type { ColorStop, ColorStopInput } from '../shared/visualization';
export type VolumeColorStopInput = ColorStopInput;
export type VolumeColorStop = ColorStop;
export type VolumeColorMode = 'step' | 'smooth';
export interface IVolumeOpacityStop {
    value: number;
    opacity: number;
}
export interface IPreparedVolumeTransfer {
    colorStops: readonly VolumeColorStop[];
    opacityStops: readonly IVolumeOpacityStop[];
}
