import type { RasterRendererCreateOptions, RasterRendererType } from '../types';
import type { RasterRenderer } from '../rendering';
/** 按后端创建并填充栅格渲染器状态。 */
export declare const createRasterLeafletRenderer: (rendererType: RasterRendererType, options: RasterRendererCreateOptions) => RasterRenderer;
