import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '../volume-scene/transferTypes';
import type { VolumeSliceAxis } from '../volume-scene/sliceTypes';
import type { IVolumeAxis } from '../volume-scene/sourceTypes';
import type { INativeVoxelData } from './voxelData';
export interface INativeSliceAtlasLayer {
    x: number;
    y: number;
    width: number;
    height: number;
    uMinimum: number;
    uMaximum: number;
    vMinimum: number;
    vMaximum: number;
    contentBounds?: INativeSliceContentBounds | null;
}
export interface INativeSliceContentBounds {
    west: number;
    south: number;
    east: number;
    north: number;
}
export interface INativeSliceAtlasLayout {
    width: number;
    height: number;
    columns: number;
    rows: number;
    layers: readonly INativeSliceAtlasLayer[];
}
export interface INativeSliceAtlasOptions {
    layerWidth: number;
    layerHeight: number;
    colorStops: readonly VolumeColorStopInput[];
    opacityStops: readonly IVolumeOpacityStop[];
    colorMode: VolumeColorMode;
}
export interface INativeSliceAtlas {
    layout: INativeSliceAtlasLayout;
    pixels: Uint8ClampedArray;
}
export interface INativeAxisSliceImage {
    width: number;
    height: number;
    pixels: Uint8ClampedArray;
}
type NativeTransferOptions = Pick<INativeSliceAtlasOptions, 'colorStops' | 'opacityStops' | 'colorMode'>;
export declare const nativeAxisPositionToIndex: (axis: IVolumeAxis, position: number) => number;
export declare const createNativeSliceAtlasLayout: (layerCount: number, layerWidth: number, layerHeight: number, padding?: number) => INativeSliceAtlasLayout;
export declare const createNativeSliceAtlas: (data: INativeVoxelData, options: INativeSliceAtlasOptions) => INativeSliceAtlas;
export declare const createNativeAxisSliceImage: (data: INativeVoxelData, axis: VolumeSliceAxis, index: number, options: NativeTransferOptions) => INativeAxisSliceImage;
export {};
