import type { RendererBackend } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop } from '../../shared/visualization';
import type { PpiMesh } from '../ppiMesh';
import type { PpiRenderer } from './ppiRenderer';
export interface PpiRendererCreateOptions {
    mesh: PpiMesh;
    colorStops: readonly ColorStop[];
    colorRange?: ColorRange;
    opacity?: number;
    colorMode?: ColorMode;
}
export declare const createPpiRenderer: (backend: RendererBackend, options: PpiRendererCreateOptions) => PpiRenderer;
