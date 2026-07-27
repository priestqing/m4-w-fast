import type { ICreateVolumeSectionOptions, IVolumeSectionRouteVertex } from './volumeSectionTypes';
export interface IVolumeSectionRouteSamples {
    longitudes: Float64Array;
    latitudes: Float64Array;
    distancesKm: Float64Array;
    totalDistanceKm: number;
    routeVertices: readonly IVolumeSectionRouteVertex[];
}
export declare const createVolumeSectionRouteSamples: (options: ICreateVolumeSectionOptions) => IVolumeSectionRouteSamples;
