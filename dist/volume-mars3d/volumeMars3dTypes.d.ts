import type { IVolumeRouteProfile } from '../volume-scene/profileTypes';
import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { IVolumeLockedSlice, VolumeSliceAxis } from '../volume-scene/sliceTypes';
import type { IVolumeChunkOptions, IVolumeSceneStatistics, IVolumeSceneUpdate, IVolumeSliceInteractionOptions, VolumeQualityPreset, VolumeRenderMode } from '../volume-scene/sceneTypes';
import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '../volume-scene/transferTypes';
export interface IMars3dVolumeLayerOptions {
    source: IVolumeSource;
    colorStops: readonly VolumeColorStopInput[];
    opacityStops: readonly IVolumeOpacityStop[];
    timeIndex?: number;
    mode?: VolumeRenderMode;
    quality?: VolumeQualityPreset;
    opacity?: number;
    densityScale?: number;
    verticalScale?: number;
    colorMode?: VolumeColorMode;
    pixelRatioCap?: number;
    renderScale?: number;
    interactionRenderScale?: number;
    interactionStepScale?: number;
    cameraFrameCompensation?: boolean;
    chunk?: IVolumeChunkOptions;
    sliceInteraction?: IVolumeSliceInteractionOptions;
    name?: string;
    show?: boolean;
    onError?: (error: Error) => void;
}
export interface IMars3dVolumeLayerUpdate extends Pick<IVolumeSceneUpdate, 'mode' | 'quality' | 'opacity' | 'densityScale' | 'verticalScale' | 'colorStops' | 'opacityStops' | 'colorMode' | 'pixelRatioCap' | 'renderScale' | 'interactionRenderScale' | 'interactionStepScale'> {
}
export interface IMars3dVolumeLayer {
    readonly readyPromise: Promise<void>;
    readonly statistics: IVolumeSceneStatistics | null;
    readonly lockedSlices: readonly IVolumeLockedSlice[];
    update(options: IMars3dVolumeLayerUpdate): void;
    setSource(source: IVolumeSource): void;
    setTimeIndex(timeIndex: number): void;
    setRouteProfiles(profiles: readonly IVolumeRouteProfile[]): void;
    lockSlice(axis: VolumeSliceAxis, position: number): IVolumeLockedSlice;
    updateSlice(id: string, position: number): void;
    removeSlice(id: string): void;
    clearLockedSlices(): void;
    destroy(noDel?: boolean): void;
}
export interface ICesiumEventLike {
    addEventListener(listener: () => void): void;
    removeEventListener(listener: () => void): void;
}
export interface ICesiumCartesianLike {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}
export interface ICesiumCameraLike {
    readonly positionWC: ICesiumCartesianLike;
    readonly directionWC: ICesiumCartesianLike;
    readonly upWC: ICesiumCartesianLike;
    readonly positionCartographic: {
        readonly height: number;
    };
    readonly frustum: {
        readonly fovy?: number;
        readonly fov?: number;
        readonly near: number;
        readonly far: number;
    };
    readonly changed: ICesiumEventLike;
}
export interface ICesiumVolumeSceneLike {
    readonly canvas: HTMLCanvasElement;
    readonly camera: ICesiumCameraLike;
    readonly preRender: ICesiumEventLike;
}
export interface IMars3dVolumeMapLike {
    readonly scene: ICesiumVolumeSceneLike;
}
export interface IMars3dVolumeBaseLayerLike {
    readonly _map?: IMars3dVolumeMapLike;
    show: boolean;
    destroy(noDel?: boolean): void;
}
export interface IMars3dVolumeRuntime {
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dVolumeBaseLayerLike;
    };
}
