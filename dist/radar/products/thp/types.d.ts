import type { RadarRadialProductBase } from '../../types';
import { RadarProductType } from '../../types';
import type { IPrecipitationRadarParameters, IQpeBiasData } from '../precipitation/types';
export interface IThpRadarParameters extends IPrecipitationRadarParameters {
    hours: number;
}
export interface IThpQpeBiasRecord extends IQpeBiasData {
    scanTime: number;
}
export interface IThpBiasData {
    continueHours: number;
    records: IThpQpeBiasRecord[];
}
export interface ThpRadarProduct extends RadarRadialProductBase {
    kind: 'thp';
    productType: RadarProductType.THP;
    parameters: IThpRadarParameters;
    bias: IThpBiasData;
}
