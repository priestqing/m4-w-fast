import type { ColorStop } from '../../shared/visualization';
import type { PointColorMode } from '../types';
export declare const resolvePointColor: (value: number, mode: PointColorMode, fixedColor: readonly [number, number, number, number], colorStops: readonly ColorStop[]) => readonly [number, number, number, number];
export declare const rgbaToCss: (color: readonly [number, number, number, number]) => string;
