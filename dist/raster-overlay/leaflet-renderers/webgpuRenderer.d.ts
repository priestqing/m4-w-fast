import type { RasterColorRange, RasterColorStop, RasterGrid, RasterRendererCreateOptions, RasterColorMode, RasterSampleMode } from '../types';
import type { RasterLeafletCrs, RasterLeafletRenderer, RasterLeafletRenderViewport } from './renderer';
/**
 * WebGPU renderer for Leaflet raster overlays.
 * WebGPU 栅格渲染器
 */
export declare class WebgpuRenderer implements RasterLeafletRenderer {
    private grid;
    private colorRange;
    private colorStops;
    private opacity;
    private colorMode;
    private sampleMode;
    private canvas;
    private crs;
    private resources;
    private pipeline;
    private texture;
    private textureView;
    private paramsBuffer;
    private bindGroup;
    private lastViewport;
    private destroyed;
    private colorStopMins;
    private colorStopMaxs;
    private colorStopColors;
    private colorStopMinsBuffer;
    private colorStopMaxsBuffer;
    private colorStopColorsBuffer;
    private readonly paramsData;
    constructor(options: RasterRendererCreateOptions);
    /**
     * 初始化上下文和基础绘制资源
     * - navigator.gpu -> adapter -> device -> context -> format -> pipeline -> buffers/textures -> bindGroup
     * @param canvas
     * @param crs
     */
    initialize(canvas: HTMLCanvasElement, crs: RasterLeafletCrs | null): Promise<void>;
    render(viewport: RasterLeafletRenderViewport): void;
    setColorRange(range: RasterColorRange): void;
    setColorStops(colorStops: RasterColorStop[]): void;
    setGrid(grid: RasterGrid): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: RasterColorMode): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    destroy(): void;
    private getResources;
    /**
     * Create the minimal render pipeline for testing WebGPU drawing.
     * 创建最小渲染管线, 用来测试 WebGPU 是否能正常绘制
     * @private
     */
    private createPipeline;
    /**
     * Upload raster grid values as a single-channel float texture.
     * 将栅格值上传为单通道浮点纹理.
     * @private
     */
    private uploadGridTexture;
    /**
     * Create the GPU buffer used by the shader to read render parameters.
     * 创建 shader 用来读取渲染参数的 GPU buffer.
     * @private
     */
    private createParamsBuffer;
    /**
     * Write the current viewport and render state into the params buffer.
     * 把当前视口和渲染状态写入参数 buffer.
     * @param viewport
     * @private
     */
    private writeParams;
    /**
     * Create the bind group that exposes buffers and textures to the shader.
     * 创建 bind group, 把 buffer 和 texture 暴露给 shader.
     *
     * - Binding layout: 绑定布局:
     * - binding 0: params buffer 参数buffer
     * - binding 1: raster value texture 栅格值纹理
     * @private
     */
    private createBindGroup;
    /**
     * Convert color stops into flat arrays for GPU upload.
     * 将色标配置转换成可上传到 GPU 的扁平数组.
     * @private
     */
    private updateColorStopArrays;
    /**
     * Create GPU buffers for color stop data.
     * 创建色标数据对应的 GPU buffer.
     * @private
     */
    private createColorStopBuffers;
    /**
     * Write color stop arrays into GPU buffers.
     * 把色标数组写入 GPU buffer.
     * @private
     */
    private writeColorStops;
    /**
     * Watch for WebGPU device lost events and attempt to restore the device.
     * 监听 WebGPU 设备丢失事件, 并尝试恢复设备.
     * @param device
     * @private
     */
    private watchDeviceLost;
    /**
     * Attempt to restore the WebGPU device and reinitialize resources.
     * 尝试恢复 WebGPU 设备并重新初始化资源.
     * @private
     */
    private restoreDevice;
}
