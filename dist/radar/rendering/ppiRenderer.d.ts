import type { MapRenderer, RendererBackend } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop } from '../../shared/visualization';
import type { PpiMesh } from '../ppiMesh';
export interface PpiRenderer<TBackend extends RendererBackend = RendererBackend> extends MapRenderer<TBackend> {
    setMesh(mesh: PpiMesh): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
}
