import { WebgpuRasterTileRenderer } from '../raster-rendering';
import type { CesiumEventLike, CesiumGeographicTilingSchemeLike, CesiumRectangleLike, CesiumRequestLike, CesiumRuntime, Mars3dRasterImageryProviderOptions } from './types';
/**
 * 为 Mars3D/Cesium 提供透明 WebGPU 栅格瓦片。
 * 该对象只实现 ImageryProvider 协议，不持有 Mars3D 地图实例。
 */
export declare class Mars3dRasterImageryProvider {
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly minimumLevel: number;
    readonly maximumLevel: number | undefined;
    readonly tilingScheme: CesiumGeographicTilingSchemeLike;
    readonly rectangle: CesiumRectangleLike;
    readonly errorEvent: CesiumEventLike;
    readonly credit: unknown;
    readonly hasAlphaChannel = true;
    readonly ready = true;
    readonly readyPromise: Promise<boolean>;
    private readonly tileRenderer;
    private destroyed;
    constructor(Cesium: CesiumRuntime, options: Mars3dRasterImageryProviderOptions);
    requestImage(x: number, y: number, level: number, request?: CesiumRequestLike): Promise<HTMLCanvasElement> | undefined;
    getTileCredits(): unknown[] | undefined;
    pickFeatures(): undefined;
    destroy(): void;
    get renderer(): WebgpuRasterTileRenderer;
    private validateOptions;
}
/** 创建可交给 Mars3D BaseTileLayer 的 Cesium ImageryProvider。 */
export declare const createMars3dRasterImageryProvider: (Cesium: CesiumRuntime, options: Mars3dRasterImageryProviderOptions) => Mars3dRasterImageryProvider;
