import type { IVolumeScene, IVolumeSceneOptions } from './sceneTypes';
/** Create a standalone native WebGPU volume scene. */
/** 创建独立的原生 WebGPU 体积场景。 */
export declare const createVolumeScene: (options: IVolumeSceneOptions) => Promise<IVolumeScene>;
