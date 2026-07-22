import type { IMars3dBaseLayerLike } from './rasterPlaneCesiumTypes';
import type { IMars3dRasterPlaneLayer, IMars3dRasterPlaneLayerOptions, IMars3dRuntime } from './rasterPlaneTypes';
export declare const createMars3dRasterPlaneLayer: (mars3d: IMars3dRuntime, options: IMars3dRasterPlaneLayerOptions) => IMars3dRasterPlaneLayer & IMars3dBaseLayerLike;
