import type { ColorStop } from '../../shared/visualization';
import type { INormalizedPointData } from '../data';
import type { IPointFrame, PointColorMode, PointIconOptions, PointRendererType } from '../types';
export interface IPointIconResource {
    type: PointIconOptions['type'];
    image: CanvasImageSource | null;
    width: number;
    height: number;
    anchorX: number;
    anchorY: number;
    radius: number;
    strokeColor: readonly [number, number, number, number];
    strokeWidth: number;
}
export interface IPointRenderInput {
    data: INormalizedPointData;
    frame: IPointFrame;
    colorMode: PointColorMode;
    colorStops: readonly ColorStop[];
    fixedColor: readonly [number, number, number, number];
    opacity: number;
}
export interface IPointRenderer {
    readonly type: Exclude<PointRendererType, 'canvas'>;
    setIcon(icon: PointIconOptions): Promise<void>;
    render(input: IPointRenderInput): void;
    resize(width: number, height: number): void;
    clear(): void;
    destroy(): void;
}
