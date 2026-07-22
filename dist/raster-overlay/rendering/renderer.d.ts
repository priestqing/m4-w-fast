import type { GpuRendererBackend, MapRenderer } from '../../rendering';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
/** 栅格渲染器的统一运行时接口。 */
export interface RasterRenderer<TBackend extends GpuRendererBackend = GpuRendererBackend> extends MapRenderer<TBackend> {
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
}
