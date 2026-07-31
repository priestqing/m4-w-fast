import type { IPointColumnData, IPointFeature, PointDataSource, PointIdArray, PointNameArray, PointProperties, PointValueArray } from './types';
export interface IPointSpatialIndex {
    bounds: {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    cellCount: number;
    offsets: Uint32Array;
    indices: Uint32Array;
}
export interface INormalizedPointData {
    x: IPointColumnData['x'];
    y: IPointColumnData['y'];
    values: PointValueArray;
    ids?: PointIdArray;
    names?: PointNameArray;
    properties?: readonly (PointProperties | undefined)[];
    noData?: number;
    index: IPointSpatialIndex;
}
export declare const normalizePointData: (source: PointDataSource) => INormalizedPointData;
export declare const normalizePointDataAsync: (source: PointDataSource, isCurrent?: () => boolean) => Promise<INormalizedPointData | null>;
export declare const replacePointValues: (data: INormalizedPointData, values: PointValueArray) => INormalizedPointData;
export declare const getPointFeature: (data: INormalizedPointData, index: number) => IPointFeature;
