import type { MapRenderViewport } from '../../shared/map/types';
import type { ColorMode, ColorRange, ColorStop, ColorStopArrays, GridData, SampleMode } from '../../shared/visualization';
export declare const MAX_WEBGL_COLOR_STOPS = 256;
interface IWebglVisualizationInput {
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
/** 管理 WebGL 共用的网格与色标纹理和参数绑定。 */
export declare class WebglVisualizationResources {
    private readonly gl;
    private readonly maxTextureSize;
    private readonly gridTexture;
    private readonly minTexture;
    private readonly maxTexture;
    private readonly colorTexture;
    constructor(gl: WebGLRenderingContext);
    updateGrid(grid: GridData): void;
    updateColorStops(arrays: ColorStopArrays): void;
    bind(program: WebGLProgram, input: IWebglVisualizationInput): void;
    bindMask(program: WebGLProgram, texture: WebGLTexture): void;
    destroy(): void;
    private createTexture;
    private uploadFloatTexture;
    private setNearestClamp;
    private bindTexture;
    private location;
    private throwTextureUploadError;
}
export {};
