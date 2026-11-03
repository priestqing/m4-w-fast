import type { GridData } from '../../../shared/visualization';
import type { IRadarProjectedGrid, RadarGridHeader, RadarMetadata } from '../../types';
export interface IRadarGridProjectionResult {
    projectedGrid: IRadarProjectedGrid;
    grid: GridData;
}
/** 将雷达投影平面适配为现有经纬度规则栅格。 */
export declare const createRadarGridProjection: (metadata: RadarMetadata, header: RadarGridHeader, values: Float32Array, noData: number) => IRadarGridProjectionResult;
