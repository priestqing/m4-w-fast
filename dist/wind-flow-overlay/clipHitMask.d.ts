export interface IWindFlowClipHitMask {
    data: Uint8Array<ArrayBuffer>;
    width: number;
    height: number;
}
export declare const createWindFlowClipHitMask: (path: Path2D, width: number, height: number) => IWindFlowClipHitMask;
export declare const containsWindFlowClipPoint: (mask: IWindFlowClipHitMask, x: number, y: number) => boolean;
