import type { IPointRenderInput } from './types';
/** Build the backend-neutral per-instance position/value color stream. */
export declare const createPointRenderData: (input: IPointRenderInput) => Float32Array<ArrayBuffer>;
