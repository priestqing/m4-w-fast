import type { RadarProductBase } from '../../types';
import { RadarProductType } from '../../types';
export interface IStiParameters {
    maximumRange: number;
}
export interface IStiHeader {
    stormCount: number;
    continuousStormCount: number;
    componentCount: number;
    averageSpeed: number;
    averageDirection: number;
}
export interface IStiPosition {
    azimuth: number;
    range: number;
    volumeTime: number;
}
export interface IStiMotion {
    azimuth: number;
    range: number;
    speed: number;
    direction: number;
    forecastError: number;
    meanForecastError: number;
}
export interface IStiTrack {
    motion: IStiMotion;
    forecast: IStiPosition[];
    history: IStiPosition[];
}
export interface IStiStormAttribute {
    stormId: number;
    stormType: number;
    rawNumberOfVolumes: number;
    numberOfVolumes: number;
    numberOfVolumesStandard: boolean;
    azimuth: number;
    range: number;
    height: number;
    maximumReflectivity: number;
    maximumReflectivityHeight: number;
    verticallyIntegratedLiquid: number;
    numberOfComponents: number;
    firstComponentIndex: number;
    topHeight: number;
    topIndex: number;
    bottomHeight: number;
    bottomIndex: number;
}
export interface IStiComponent {
    height: number;
    maximumReflectivity: number;
    nextComponentIndex: number;
}
export interface IStiAdaptationData {
    defaultDirection: number;
    defaultSpeed: number;
    maximumVolumeInterval: number;
    pastVolumeCount: number;
    correlationSpeed: number;
    minimumSpeed: number;
    allowableError: number;
    forecastInterval: number;
    forecastCount: number;
    errorInterval: number;
}
export interface StiRadarProduct extends RadarProductBase {
    kind: 'sti';
    productType: RadarProductType.STI;
    parameters: IStiParameters;
    header: IStiHeader;
    tracks: IStiTrack[];
    storms: IStiStormAttribute[];
    components: IStiComponent[];
    adaptation: IStiAdaptationData;
}
