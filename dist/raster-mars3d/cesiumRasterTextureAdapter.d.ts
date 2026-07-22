import type { ICesiumMaterialLike, ICesiumSceneLike, ICesiumTextureLike, IMars3dCesiumRuntime } from './rasterPlaneCesiumTypes';
/** 隔离 Cesium 浮点纹理与内部 WebGL Context 的版本耦合。 */
export declare class CesiumRasterTextureAdapter {
    readonly maximumTextureSize: number;
    private readonly Cesium;
    private readonly context;
    private readonly sampler;
    constructor(Cesium: IMars3dCesiumRuntime, scene: ICesiumSceneLike);
    createTexture(values: Float32Array<ArrayBufferLike>, width: number, height: number, pixelFormat: number): ICesiumTextureLike;
    updateMaterial(material: ICesiumMaterialLike): void;
    private getContext;
    private queryMaximumTextureSize;
    private validateRuntime;
}
