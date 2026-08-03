import type { IPointRenderer, IPointRenderInput } from './types';
import type { PointIconOptions } from '../types';
export declare class CanvasPointRenderer implements IPointRenderer {
    private readonly canvas;
    readonly type: "cpu";
    private icon;
    private iconGeneration;
    private readonly tintedIcons;
    constructor(canvas: HTMLCanvasElement);
    setIcon(icon: PointIconOptions): Promise<void>;
    resize(width: number, height: number): void;
    render(input: IPointRenderInput): void;
    clear(): void;
    destroy(): void;
    private drawPoint;
    private getTintedIcon;
}
