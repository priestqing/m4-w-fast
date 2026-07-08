import type { RoadRendererType } from '../types';
import type { RoadLeafletRenderer } from './renderer';
/**
 * Create road Leaflet renderer.
 * 创建道路 Leaflet 渲染器
 * @param rendererType
 */
export declare const createRoadLeafletRenderer: (rendererType: RoadRendererType) => RoadLeafletRenderer;
