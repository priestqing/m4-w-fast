import type { RasterRendererCreateOptions, RasterRendererType } from '../types';
import type { RasterLeafletRenderer } from './renderer';
/**
 * 根据渲染类型创建 Leaflet 栅格渲染器
 * @param rendererType 渲染器类型
 * @param options 渲染器创建选项
 */
export declare const createRasterLeafletRenderer: (rendererType: RasterRendererType, options: RasterRendererCreateOptions) => RasterLeafletRenderer;
