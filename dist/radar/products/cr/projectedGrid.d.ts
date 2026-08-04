import type { GridData } from '../../../shared/visualization';
import type { IRadarProjectedGrid, RadarGridHeader, RadarMetadata } from '../../types';
export interface ICrGridProjection {
    projectedGrid: IRadarProjectedGrid;
    grid: GridData;
}
/** 将 CR 投影平面适配为现有经纬度规则栅格。 */
export declare const createCrGridProjection: (metadata: RadarMetadata, header: RadarGridHeader, values: Float32Array, noData: number) => ICrGridProjection;
