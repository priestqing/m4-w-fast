import type { RasterRendererCreateOptions, RasterRendererType } from '../rasterTypes';
import type { RasterRenderer } from './renderer';
/** 按后端创建并填充地图无关的栅格渲染器。 */
export declare const createRasterRenderer: (rendererType: RasterRendererType, options: RasterRendererCreateOptions) => RasterRenderer;
