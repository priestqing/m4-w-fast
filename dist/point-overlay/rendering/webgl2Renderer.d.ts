import type { PointIconOptions } from '../types';
import type { IPointRenderer, IPointRenderInput } from './types';
export declare class Webgl2PointRenderer implements IPointRenderer {
    private readonly canvas;
    readonly type: "webgl2";
    private readonly gl;
    private readonly program;
    private readonly pointBuffer;
    private readonly texture;
    private icon;
    private iconGeneration;
    constructor(canvas: HTMLCanvasElement);
    setIcon(icon: PointIconOptions): Promise<void>;
    resize(width: number, height: number): void;
    render(input: IPointRenderInput): void;
    clear(): void;
    destroy(): void;
    private initialize;
    private uploadTexture;
    private updateUniforms;
    private location;
}
