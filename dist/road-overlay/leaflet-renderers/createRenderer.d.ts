import type { RoadRendererType } from '../types';
import type { RoadRenderer } from '../rendering';
/** 按后端创建道路渲染器。 */
export declare const createRoadLeafletRenderer: (rendererType: RoadRendererType) => RoadRenderer;
