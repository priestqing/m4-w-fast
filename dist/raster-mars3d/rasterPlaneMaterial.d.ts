import type { RasterRenderState } from '../raster-overlay/rendering/rasterRenderState';
import type { RasterGrid } from '../raster-rendering';
import type { CesiumRasterTextureAdapter } from './cesiumRasterTextureAdapter';
import type { ICesiumMaterialLike, IMars3dCesiumRuntime } from './rasterPlaneCesiumTypes';
/** 管理 Cesium Material 使用的标量栅格纹理和色标纹理。 */
export declare class RasterPlaneMaterial {
    readonly material: ICesiumMaterialLike;
    readonly maximumTextureSize: number;
    private readonly Cesium;
    private readonly textureAdapter;
    private destroyed;
    constructor(Cesium: IMars3dCesiumRuntime, textureAdapter: CesiumRasterTextureAdapter, state: RasterRenderState, grid?: import("../shared/visualization").GridData | null);
    updateGrid(state: RasterRenderState, grid?: import("../shared/visualization").GridData | null): void;
    updateColorStops(state: RasterRenderState, grid?: RasterGrid | null): void;
    updateUniforms(state: RasterRenderState, grid?: RasterGrid | null): void;
    destroy(): void;
    private createTexture;
    private replaceTexture;
    private validateTextureSize;
    private assertAlive;
}
