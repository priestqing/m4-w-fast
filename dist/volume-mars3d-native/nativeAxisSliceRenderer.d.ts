import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { IVolumeLockedSlice } from '../volume-scene/sliceTypes';
import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '../volume-scene/transferTypes';
import type { INativeSliceCesiumRuntime } from './nativeSliceRuntimeTypes';
import type { IMars3dNativeMapLike } from './nativeTypes';
import type { INativeVoxelData } from './voxelData';
interface INativeAxisSliceRenderState {
    slices: readonly IVolumeLockedSlice[];
    source: IVolumeSource;
    data: INativeVoxelData;
    colorStops: readonly VolumeColorStopInput[];
    opacityStops: readonly IVolumeOpacityStop[];
    colorMode: VolumeColorMode;
    verticalScale: number;
}
export declare class NativeAxisSliceRenderer {
    private readonly map;
    private readonly cesium;
    private readonly entries;
    private readonly pending;
    private readonly dirtySliceIds;
    private readonly rebuildScheduler;
    private state;
    private shown;
    private destroyed;
    constructor(map: IMars3dNativeMapLike, cesium: INativeSliceCesiumRuntime);
    sync(state: INativeAxisSliceRenderState, immediate?: boolean): void;
    setShow(show: boolean): void;
    destroy(): void;
    private rebuild;
    private replace;
    private createAltitudeGeometry;
    private createWallGeometry;
    private getAxis;
    private createColor;
    private createRenderState;
    private removePending;
    private remove;
}
export {};
