import type { RasterColorStop, RasterLeafletLayerCreateOptions, RasterRendererCreateOptions, RasterRendererType } from '../raster-overlay';
import type { GridData } from '../shared/visualization';
export declare const RADAR_MAGIC_NUMBER = 1297371986;
export declare enum RadarProductType {
    PPI = 1,
    CR = 18,
    /** 厂商扩展标识，默认注册表不推断其数据结构。 */
    CRX = 54
}
export declare enum RadarProjectionType {
    MERCATOR = 1,
    AZIMUTHAL_EQUIDISTANT = 2,
    LAMBERT_AZIMUTHAL_EQUAL_AREA = 13
}
export interface RadarGenericHeader {
    magicNumber: number;
    majorVersion: number;
    minorVersion: number;
    genericType: number;
    productType: number;
}
export interface RadarStation {
    siteCode: string;
    siteName: string;
    latitude: number;
    longitude: number;
    antennaHeight: number;
    groundHeight: number;
    frequency: number;
    beamWidthHori: number;
    beamWidthVert: number;
    rdaVersion: number;
    radarType: number;
}
export interface RadarTask {
    taskName: string;
    taskDescription: string;
    polarizationType: number;
    scanType: number;
    pulseWidth: number;
    scanStartTime: number;
    cutNumber: number;
    horizontalNoise: number;
    verticalNoise: number;
    horizontalCalibration: number;
    verticalCalibration: number;
    horizontalNoiseTemperature: number;
    verticalNoiseTemperature: number;
    zdrCalibration: number;
    phidpCalibration: number;
    ldrCalibration: number;
}
export interface RadarScan {
    processMode: number;
    waveForm: number;
    prf1: number;
    prf2: number;
    dealiasingMode: number;
    azimuth: number;
    elevation: number;
    startAngle: number;
    endAngle: number;
    angularResolution: number;
    scanSpeed: number;
    logResolution: number;
    dopplerResolution: number;
    maximumRange1: number;
    maximumRange2: number;
    startRange: number;
    sample1: number;
    sample2: number;
    phaseMode: number;
    atmosphericLoss: number;
    nyquistSpeed: number;
    momentsMask: bigint;
    momentsSizeMask: bigint;
    miscFilterMask: number;
    sqiThreshold: number;
    sigThreshold: number;
    csrThreshold: number;
    logThreshold: number;
    cpaThreshold: number;
    pmiThreshold: number;
    dpLogThreshold: number;
    dBTMask: number;
    dBZMask: number;
    velocityMask: number;
    spectrumWidthMask: number;
    dpMask: number;
    scanSync: number;
    direction: number;
    groundClutterClassifierType: number;
    groundClutterFilterType: number;
    groundClutterFilterNotchWidth: number;
    groundClutterFilterWindow: number;
}
export interface RadarProductHeader {
    productType: number;
    productName: string;
    productGenerationTime: number;
    scanStartTime: number;
    dataStartTime: number;
    dataEndTime: number;
    projectionType: number;
    dataType1: number;
    dataType2: number;
}
export interface RadarMetadata {
    generic: RadarGenericHeader;
    station: RadarStation;
    task: RadarTask;
    scans: RadarScan[];
    product: RadarProductHeader;
    littleEndian: boolean;
}
export interface RadarGridHeader {
    dataType: number;
    scale: number;
    offset: number;
    binLength: number;
    flags: number;
    rowResolution: number;
    columnResolution: number;
    rowSideLength: number;
    columnSideLength: number;
    maximumData: number;
    rangeOfMaximumValue: number;
    azimuthOfMaximumValue: number;
    minimumData: number;
    rangeOfMinimumValue: number;
    azimuthOfMinimumValue: number;
}
export interface RadarRadialHeader {
    dataType: number;
    scale: number;
    offset: number;
    binLength: number;
    flags: number;
    resolution: number;
    startRange: number;
    maxRange: number;
    numberOfRadials: number;
    maximumValue: number;
    rangeOfMaximumValue: number;
    azimuthOfMaximumValue: number;
    minimumValue: number;
    rangeOfMinimumValue: number;
    azimuthOfMinimumValue: number;
}
export interface RadarRadial {
    /** 径向起始边方位角，单位为度，北为 0，顺时针增加。 */
    startAngle: number;
    angularWidth: number;
    centerAngle: number;
    encodedValues: RadarEncodedValues;
    values: Float32Array;
}
export type RadarEncodedValues = Uint8Array | Uint16Array;
export interface IRadarStormAttribute {
    stormId: number;
    azimuth: number;
    range: number;
    tvsType: number;
    mesocycloneType: number;
    severeHailProbability: number;
    hailProbability: number;
    hailSize: number;
    verticallyIntegratedLiquid: number;
    maximumReflectivity: number;
    maximumReflectivityHeight: number;
    echoTop: number;
    direction: number;
    speed: number;
}
export interface IRadarProjectedGrid {
    projectionType: number;
    centerLatitude: number;
    centerLongitude: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}
interface RadarProductBase {
    metadata: RadarMetadata;
    dataType: number;
    noData: number;
}
export interface CrRadarProduct extends RadarProductBase {
    kind: 'cr';
    productType: RadarProductType.CR;
    header: RadarGridHeader;
    encodedValues: RadarEncodedValues;
    projectedGrid: IRadarProjectedGrid;
    /** 供现有经纬度规则栅格渲染器使用的局部近似。 */
    grid: GridData;
    storms: IRadarStormAttribute[];
}
export interface PpiRadarProduct extends RadarProductBase {
    kind: 'ppi';
    productType: RadarProductType.PPI;
    header: RadarRadialHeader;
    elevation: number;
    radials: RadarRadial[];
}
export type RadarProduct = CrRadarProduct | PpiRadarProduct;
export type RadarBufferSource = ArrayBuffer | ArrayBufferView;
export type RadarSource = RadarBufferSource | Blob | string | URL;
export interface RadarParseOptions {
    magicNumber?: number;
    noData?: number;
}
export interface PpiRasterizeOptions {
    /** 输出正方形栅格边长，默认根据最大库数计算并限制为 2048。 */
    size?: number;
    maxSize?: number;
    noData?: number;
}
export interface RadarRendererCreateOptions extends Omit<RasterRendererCreateOptions<RasterColorStop>, 'grid'> {
    product: RadarProduct;
    ppi?: PpiRasterizeOptions;
}
export interface RadarLeafletLayerCreateOptions extends Omit<RasterLeafletLayerCreateOptions, 'grid' | 'source' | 'params'> {
    product: RadarProduct;
    rendererType: RasterRendererType;
    ppi?: PpiRasterizeOptions;
}
export {};
