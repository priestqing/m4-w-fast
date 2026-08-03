import type { RasterRenderer } from '../raster-overlay/rendering/renderer';
import type { PpiRenderer } from './rendering/ppiRenderer';
import type { RadarRendererCreateOptions } from './types';
/** 使用现有 CPU/WebGL/WebGL2/WebGPU 栅格后端创建雷达渲染器。 */
export declare const createRadarRenderer: (rendererType: import("../rendering").RendererBackend, options: RadarRendererCreateOptions) => RasterRenderer | PpiRenderer;
