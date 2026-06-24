import type { RasterColorRange, RasterColorStop, RasterGrid, RasterRenderMode, RasterRendererCreateOptions } from '../types';
import type { RasterLeafletRenderer, RasterLeafletRenderViewport } from './renderer';
export declare class Webgl2Renderer implements RasterLeafletRenderer {
    private gl;
    private grid;
    private program;
    private texture;
    private colorRange;
    private colorStops;
    /**
     * 上传到shader的色标最小值数组
     * @private
     */
    private colorStopMins;
    /**
     * 上传到shader的色标最大值数组
     * @private
     */
    private colorStopMaxs;
    /**
     * 上传到shader的色标颜色数组 (rgba)
     * @private
     */
    private colorStopColors;
    private maxColorStops;
    private opacity;
    private renderMode;
    private canvas;
    private contextLost;
    private lastViewport;
    constructor(options: RasterRendererCreateOptions);
    initialize(canvas: HTMLCanvasElement): void;
    render(viewport: RasterLeafletRenderViewport): void;
    setGrid(grid: RasterGrid): void;
    setColorStops(colorStops: RasterColorStop[]): void;
    setColorRange(colorRange: RasterColorRange): void;
    setOpacity(opacity: number): void;
    setRenderMode(renderMode: RasterRenderMode): void;
    destroy(): void;
    private createProgram;
    private createShader;
    /**
     * 上传栅格数据为WebGL2单通道浮点纹理
     * @private
     */
    private uploadGridTexture;
    /**
     * 获取shader uniform 位置
     * @param gl
     * @param program
     * @param name
     * @private
     */
    private getUniform;
    /**
     * 色标容量改变后重新创建shader
     * @private
     */
    private recreateProgram;
    /**
     * 阻止浏览器永久释放WebGL上下文
     * @param event
     */
    private readonly handleContextLost;
    /**
     * 上下文恢复后重新创建GPU资源并绘制最后一个视口
     */
    private readonly handleContextRestored;
    /**
     * 将色标配置写入可直接上传到Shader的数组
     * @private
     */
    private updateColorStopArrays;
}
