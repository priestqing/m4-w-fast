export type VolumeVector3 = readonly [number, number, number];
export interface IVolumePerspectiveProjection {
    type: 'perspective';
    fovYDegrees: number;
    near: number;
    far: number;
}
export interface IVolumeOrthographicProjection {
    type: 'orthographic';
    height: number;
    near: number;
    far: number;
}
export type VolumeProjection = IVolumePerspectiveProjection | IVolumeOrthographicProjection;
export interface IVolumeCameraState {
    position: VolumeVector3;
    target: VolumeVector3;
    up: VolumeVector3;
    projection: VolumeProjection;
}
export interface IVolumeCameraOptions {
    state?: Partial<IVolumeCameraState>;
    aspect?: number;
    rotateSpeed?: number;
    panSpeed?: number;
    zoomSpeed?: number;
    minimumDistance?: number;
    maximumDistance?: number;
    minimumPitchDegrees?: number;
    maximumPitchDegrees?: number;
}
export interface IVolumeCameraMatrices {
    view: Float32Array<ArrayBuffer>;
    projection: Float32Array<ArrayBuffer>;
    viewProjection: Float32Array<ArrayBuffer>;
    inverseViewProjection: Float32Array<ArrayBuffer>;
}
