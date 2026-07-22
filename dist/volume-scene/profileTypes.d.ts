export type VolumeDepthMode = 'scene' | 'always-visible';
export interface IVolumeRouteProfile {
    id: string;
    path: Float32Array;
    heights: Float32Array;
    values: Float32Array;
    noData?: number;
    opacity?: number;
    depthMode?: VolumeDepthMode;
    revision?: number;
}
export interface IVolumeRouteProfileMesh {
    id: string;
    positions: Float32Array;
    values: Float32Array;
    indices: Uint32Array;
    opacity: number;
    depthMode: VolumeDepthMode;
    revision?: number;
}
