import type { PointIconOptions } from '../types';
import type { IPointRenderer, IPointRenderInput } from './types';
export declare class WebgpuPointRenderer implements IPointRenderer {
    private readonly canvas;
    readonly type: "webgpu";
    private device;
    private context;
    private pipeline;
    private paramsBuffer;
    private pointBuffer;
    private pointBufferSize;
    private texture;
    private sampler;
    private bindGroup;
    private icon;
    private iconGeneration;
    private destroyed;
    private readonly ready;
    constructor(canvas: HTMLCanvasElement);
    setIcon(icon: PointIconOptions): Promise<void>;
    resize(width: number, height: number): void;
    render(input: IPointRenderInput): void;
    clear(): void;
    destroy(): void;
    private initialize;
    private ensurePointBuffer;
    private uploadTexture;
}
