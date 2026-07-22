import type { IGeographicVolumeLayout } from './geographicTypes';
import type { IVolumeMetadata } from './sourceTypes';
export declare const createGeographicVolumeLayout: (metadata: IVolumeMetadata, verticalScale?: number) => IGeographicVolumeLayout;
export declare const ecefToGeographicVolumeLocal: (ecef: readonly [number, number, number], layout: IGeographicVolumeLayout) => readonly [number, number, number];
