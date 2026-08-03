import type { PointIconOptions } from '../types';
import type { IPointRenderer, IPointRenderInput } from './types';
export declare class WebglPointRenderer implements IPointRenderer {
    private readonly canvas;
    readonly type: "webgl";
    private readonly gl;
    private readonly instancing;
    private readonly program;
    private readonly pointBuffer;
    private readonly cornerBuffer;
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
    private bindAttribute;
    private updateUniforms;
    private location;
}
