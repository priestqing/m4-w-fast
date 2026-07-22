import type { IMars3dCesiumRuntime, IMars3dMapLike } from './rasterPlaneCesiumTypes';
import type { IMars3dRasterPlaneLayerOptions, IMars3dRasterPlaneLayerUpdate } from './rasterPlaneTypes';
/** 在 Cesium 场景中管理长期存在的实高栅格 Primitive。 */
export declare class CesiumRasterPlaneRenderer {
    private readonly Cesium;
    private readonly map;
    private readonly state;
    private readonly textureAdapter;
    private entries;
    private currentHeight;
    private shown;
    private destroyed;
    constructor(Cesium: IMars3dCesiumRuntime, map: IMars3dMapLike, options: IMars3dRasterPlaneLayerOptions);
    get height(): number;
    setShow(show: boolean): void;
    update(options: IMars3dRasterPlaneLayerUpdate): void;
    destroy(): void;
    private applyInitialState;
    private createEntry;
    private createEntries;
    private addEntries;
    private replaceEntries;
    private rebuildGeometry;
    private destroyEntry;
    private destroyDetachedEntries;
    private removePrimitive;
    private assertAlive;
}
