import type { RadarProductType } from '../../types';
export interface IPrecipitationRadarParameters {
    baseProduct: RadarProductType.CAPPI | RadarProductType.HSR | RadarProductType.QPE;
    cappiHeight: number;
    cappiFill: boolean;
    rainGageAdjustment: boolean;
}
export interface IQpeBiasData {
    meanBias: number;
    errorVariance: number;
    productAdjusted: boolean;
}
