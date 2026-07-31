import type { PointRendererType } from '../types';
import type { IPointRenderer } from './types';
export declare const createPointRenderer: (canvas: HTMLCanvasElement, requestedType?: PointRendererType) => IPointRenderer;
