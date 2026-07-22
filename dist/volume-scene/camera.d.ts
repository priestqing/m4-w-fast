import type { IVolumeCameraMatrices, IVolumeCameraOptions, IVolumeCameraState, VolumeProjection } from './cameraTypes';
export declare class VolumeCamera {
    private cameraState;
    private aspect;
    private readonly rotateSpeed;
    private readonly panSpeed;
    private readonly zoomSpeed;
    private readonly minimumDistance;
    private readonly maximumDistance;
    private readonly minimumPitch;
    private readonly maximumPitch;
    constructor(options?: IVolumeCameraOptions);
    get state(): IVolumeCameraState;
    get matrices(): IVolumeCameraMatrices;
    setState(state: IVolumeCameraState): void;
    setAspect(aspect: number): void;
    setProjectionType(type: VolumeProjection['type']): void;
    orbit(deltaX: number, deltaY: number): void;
    pan(deltaX: number, deltaY: number, viewportHeight: number): void;
    dolly(delta: number): void;
    private createProjectionMatrix;
}
