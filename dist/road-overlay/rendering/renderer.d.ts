import type { MapRenderer } from '../../rendering';
import type { GpuRendererBackend } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
import type { RoadMesh } from '../types';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
/**
 * Common interface implemented by Road renderers.
 * 道路渲染器实现的公共接口。
 */
export interface RoadRenderer<TBackend extends GpuRendererBackend = GpuRendererBackend> extends MapRenderer<TBackend> {
    /**
     * Replace the Road mesh.
     * 替换道路 mesh。
     */
    setMesh(mesh: RoadMesh): void;
    /**
     * Replace the grid sampled while coloring Roads.
     * 替换道路染色时采样的网格。
     */
    setGrid(grid: GridData): void;
    /**
     * Replace normalized color stops.
     * 替换归一化色标。
     */
    setColorStops(colorStops: readonly ColorStop[]): void;
    /**
     * Set or clear the visible value range.
     * 设置或清除可见数据范围。
     */
    setColorRange(colorRange: ColorRange | null): void;
    /**
     * Set Road opacity.
     * 设置道路透明度。
     */
    setOpacity(opacity: number): void;
    /**
     * Set Road width in CSS pixels.
     * 设置以 CSS 像素为单位的道路线宽。
     */
    setLineWidth(lineWidth: number): void;
    /**
     * Set the color mapping mode.
     * 设置颜色映射模式。
     */
    setColorMode(colorMode: ColorMode): void;
    /**
     * Set the grid sampling mode.
     * 设置网格采样模式。
     */
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
}
