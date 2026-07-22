import type { MapRenderViewport } from '../../shared/map/types';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
export declare const WEBGPU_VISUALIZATION_PARAMS_FLOAT_COUNT = 28;
export declare const WEBGPU_VISUALIZATION_PARAMS_BUFFER_SIZE: number;
/**
 * Values used to write the shared WebGPU visualization uniform layout.
 * 用于写入 WebGPU 公共可视化 uniform 布局的数据。
 */
export interface WebgpuVisualizationParamsInput {
    viewport: MapRenderViewport;
    grid: GridData;
    colorStops: readonly ColorStop[];
    colorRange: ColorRange | null;
    opacity: number;
    colorMode: ColorMode;
    sampleMode: SampleMode;
    mapExtension?: readonly [number, number];
    renderExtension?: readonly [number, number];
    noDataExtension?: readonly [number, number];
}
/**
 * Write the shared 28-float WebGPU visualization uniform layout.
 * 写入公共的 28 浮点 WebGPU 可视化 uniform 布局。
 */
export declare const writeWebgpuVisualizationParams: (target: Float32Array<ArrayBuffer>, input: WebgpuVisualizationParamsInput) => void;
