import type { MapRenderViewport } from '../../shared/map/types';
import type { ColorMode, ColorRange, ColorStop, ColorStopArrays, GridData, SampleMode } from '../../shared/visualization';
interface Webgl2VisualizationInput {
    viewport: MapRenderViewport;
    grid: GridData;
    colorStops: readonly ColorStop[];
    colorRange: ColorRange | null;
    opacity: number;
    colorMode: ColorMode;
    sampleMode: SampleMode;
    lineWidth?: number;
    maskEnabled?: boolean;
}
/** 管理 WebGL2 共用的网格与色标纹理和参数绑定。 */
export declare class Webgl2VisualizationResources {
    private readonly gl;
    private readonly gridTexture;
    private readonly minTexture;
    private readonly maxTexture;
    private readonly colorTexture;
    constructor(gl: WebGL2RenderingContext);
    updateGrid(grid: GridData): void;
    updateColorStops(arrays: ColorStopArrays): void;
    bind(program: WebGLProgram, input: Webgl2VisualizationInput): void;
    bindMask(program: WebGLProgram, texture: WebGLTexture): void;
    destroy(): void;
    private createTexture;
    private uploadFloatTexture;
    private setNearestClamp;
    private bindTexture;
    private location;
}
export {};
