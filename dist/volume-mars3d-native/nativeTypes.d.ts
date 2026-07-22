import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '../volume-scene/transferTypes';
import type { VolumeQualityPreset } from '../volume-scene/sceneTypes';
import type { IVolumeLockedSlice, VolumeSliceAxis } from '../volume-scene/sliceTypes';
export interface IMars3dNativeVolumeLayerOptions {
    source: IVolumeSource;
    colorStops: readonly VolumeColorStopInput[];
    opacityStops: readonly IVolumeOpacityStop[];
    timeIndex?: number;
    quality?: VolumeQualityPreset;
    opacity?: number;
    densityScale?: number;
    verticalScale?: number;
    colorMode?: VolumeColorMode;
    name?: string;
    show?: boolean;
    onError?: (error: Error) => void;
}
export interface IMars3dNativeVolumeLayerUpdate {
    quality?: VolumeQualityPreset;
    opacity?: number;
    densityScale?: number;
    verticalScale?: number;
    colorStops?: readonly VolumeColorStopInput[];
    opacityStops?: readonly IVolumeOpacityStop[];
    colorMode?: VolumeColorMode;
}
export interface INativeVolumeStatistics {
    texturesByteLength: number;
    visited: number;
    numberOfTilesWithContentReady: number;
}
export interface IMars3dNativeVolumeLayer {
    readonly readyPromise: Promise<void>;
    readonly statistics: INativeVolumeStatistics | null;
    update(options: IMars3dNativeVolumeLayerUpdate): void;
    setSource(source: IVolumeSource): Promise<void>;
    setTimeIndex(timeIndex: number): Promise<void>;
    destroy(noDel?: boolean): void;
}
export interface IMars3dNativeSliceVolumeLayer extends IMars3dNativeVolumeLayer {
    readonly lockedSlices: readonly IVolumeLockedSlice[];
    lockSlice(axis: VolumeSliceAxis, position: number): IVolumeLockedSlice;
    updateSlice(id: string, position: number): void;
    removeSlice(id: string): void;
    clearLockedSlices(): void;
}
export interface ICesiumCartesian3Like {
    x: number;
    y: number;
    z: number;
}
export interface ICesiumEventLike {
    addEventListener(listener: () => void): () => void;
}
export interface ICesiumCustomShaderLike {
    setUniform(name: string, value: number): void;
    destroy(): void;
}
export interface ICesiumVoxelPrimitiveLike {
    show: boolean;
    stepSize: number;
    screenSpaceError: number;
    depthTest: boolean;
    nearestSampling: boolean;
    minBounds: ICesiumCartesian3Like;
    maxBounds: ICesiumCartesian3Like;
    customShader: ICesiumCustomShaderLike;
    readonly ready: boolean;
    readonly initialTilesLoaded: ICesiumEventLike;
    readonly statistics?: Partial<INativeVolumeStatistics>;
}
export interface ICesiumSliceGeometryLike {
    readonly attributes: {
        readonly st?: {
            readonly values: Float32Array;
        };
    };
}
export interface ICesiumMaterialLike {
    readonly uniforms: Record<string, unknown>;
}
export interface ICesiumSlicePrimitiveLike {
    show: boolean;
    readonly ready: boolean;
}
export interface ICesiumPrimitiveCollectionLike {
    add<T>(primitive: T): T;
    remove(primitive: unknown): boolean;
}
export interface ICesiumSceneLike {
    readonly primitives: ICesiumPrimitiveCollectionLike;
    readonly postRender: ICesiumEventLike;
    requestRender(): void;
}
export interface IMars3dNativeMapLike {
    readonly scene: ICesiumSceneLike;
}
export interface IMars3dNativeBaseLayerLike {
    readonly _map?: IMars3dNativeMapLike;
    show: boolean;
    destroy(noDel?: boolean): void;
}
export interface IMars3dNativeRuntime {
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dNativeBaseLayerLike;
    };
}
interface ICesiumConstructor<T, TOptions = unknown> {
    new (options: TOptions): T;
}
export interface ICesiumNativeRuntime {
    readonly Cartesian3: {
        new (x?: number, y?: number, z?: number): ICesiumCartesian3Like;
        fromRadians(longitude: number, latitude: number, height?: number): ICesiumCartesian3Like;
    };
    readonly Ellipsoid: {
        readonly WGS84: {
            readonly radii: ICesiumCartesian3Like;
        };
    };
    readonly Matrix4: {
        readonly IDENTITY: unknown;
        fromScale(scale: ICesiumCartesian3Like): unknown;
    };
    readonly VoxelShapeType: {
        readonly ELLIPSOID: unknown;
    };
    readonly MetadataType: {
        readonly SCALAR: unknown;
    };
    readonly MetadataComponentType: {
        readonly FLOAT32: unknown;
        readonly UINT8: unknown;
    };
    readonly VoxelContent: {
        fromMetadataArray(values: readonly (Float32Array | Uint8Array)[]): unknown;
    };
    readonly UniformType: {
        readonly FLOAT: unknown;
    };
    readonly LightingModel: {
        readonly UNLIT: unknown;
    };
    readonly CustomShaderTranslucencyMode: {
        readonly TRANSLUCENT: unknown;
    };
    readonly CustomShader: ICesiumConstructor<ICesiumCustomShaderLike, Record<string, unknown>>;
    readonly VoxelPrimitive: ICesiumConstructor<ICesiumVoxelPrimitiveLike, Record<string, unknown>>;
    readonly Rectangle: {
        fromDegrees(west: number, south: number, east: number, north: number): unknown;
    };
    readonly RectangleGeometry: ICesiumConstructor<unknown, Record<string, unknown>> & {
        createGeometry(geometry: unknown): ICesiumSliceGeometryLike | undefined;
    };
    readonly GeometryInstance: ICesiumConstructor<unknown, Record<string, unknown>>;
    readonly Primitive: ICesiumConstructor<ICesiumSlicePrimitiveLike, Record<string, unknown>>;
    readonly Material: ICesiumConstructor<ICesiumMaterialLike, Record<string, unknown>>;
    readonly Color: ICesiumConstructor<unknown, {
        red?: number;
        green?: number;
        blue?: number;
        alpha?: number;
    }> & {
        new (red?: number, green?: number, blue?: number, alpha?: number): unknown;
    };
    readonly EllipsoidSurfaceAppearance: ICesiumConstructor<unknown, Record<string, unknown>> & {
        readonly VERTEX_FORMAT: unknown;
    };
    readonly Math: {
        toRadians(degrees: number): number;
    };
}
export {};
