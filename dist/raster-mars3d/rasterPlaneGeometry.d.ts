import type { RasterGrid } from '../raster-rendering';
import type { ICesiumMaterialLike, ICesiumPrimitiveLike, IMars3dCesiumRuntime } from './rasterPlaneCesiumTypes';
export declare const createRasterPlanePrimitive: (Cesium: IMars3dCesiumRuntime, grid: RasterGrid, height: number, material: ICesiumMaterialLike, show: boolean) => ICesiumPrimitiveLike;
export declare const gridBoundsEqual: (left: RasterGrid, right: RasterGrid) => boolean;
export declare const validateHeight: (height: number) => void;
