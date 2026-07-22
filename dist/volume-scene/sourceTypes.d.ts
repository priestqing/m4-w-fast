export interface IVolumeDimensions {
    width: number;
    height: number;
    depth: number;
}
export interface IVolumeBounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
}
export interface IVolumeAxis {
    start: number;
    end: number;
    count: number;
}
export interface IVolumeMetadata {
    xAxis: IVolumeAxis;
    yAxis: IVolumeAxis;
    zAxis: IVolumeAxis;
    timeCount: number;
    noData?: number;
    valueScale?: number;
    revision?: number;
}
export interface IVolumeChunkRange {
    xStart: number;
    xCount: number;
    levelStart: number;
    levelCount: number;
    sourceYStart: number;
    sourceYCount: number;
}
export interface IVolumeChunk extends IVolumeDimensions {
    timeIndex: number;
    range: IVolumeChunkRange;
    values: Float32Array;
}
export interface IVolumeSource {
    readonly metadata: IVolumeMetadata;
    readChunk(timeIndex: number, range: IVolumeChunkRange, signal?: AbortSignal): IVolumeChunk | Promise<IVolumeChunk>;
}
export interface IInMemoryVolumeData extends IVolumeMetadata {
    values: Float32Array;
}
