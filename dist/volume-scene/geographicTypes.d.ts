export type VolumeCoordinateSystem = 'cartesian' | 'geographic-wgs84';
export interface IWebgpuGeographicTransform {
    mode: 'wgs84';
    centerEcefScaled: readonly [number, number, number];
    semiMajorAxisScaled: number;
    semiMinorAxisScaled: number;
    longitudeRadians: readonly [number, number];
    latitudeRadians: readonly [number, number];
    heightScaled: readonly [number, number];
}
export interface IGeographicVolumeLayout {
    centerEcef: readonly [number, number, number];
    normalizationMeters: number;
    proxyModelMatrix: readonly number[];
    transform: IWebgpuGeographicTransform;
}
