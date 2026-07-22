import type { WebgpuRasterTileRendererOptions } from '../raster-rendering';
export type CesiumRectangleLike = object;
export interface CesiumEventLike {
    raiseEvent(...arguments_: unknown[]): void;
}
export interface CesiumGeographicTilingSchemeLike {
    readonly rectangle: CesiumRectangleLike;
}
export interface CesiumRequestLike {
    readonly cancelled?: boolean;
}
export interface CesiumRuntime {
    readonly Event: new () => CesiumEventLike;
    readonly GeographicTilingScheme: new (options?: {
        ellipsoid?: unknown;
    }) => CesiumGeographicTilingSchemeLike;
    readonly Rectangle: {
        fromDegrees(west: number, south: number, east: number, north: number): CesiumRectangleLike;
    };
    readonly Credit?: new (text: string) => unknown;
}
export interface Mars3dRasterImageryProviderOptions extends WebgpuRasterTileRendererOptions {
    tileWidth?: number;
    tileHeight?: number;
    minimumLevel?: number;
    maximumLevel?: number;
    rectangle?: CesiumRectangleLike;
    ellipsoid?: unknown;
    credit?: string | unknown;
}
