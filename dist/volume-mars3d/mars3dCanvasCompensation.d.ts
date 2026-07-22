export type Mars3dWorldPoint = readonly [number, number, number];
export interface IMars3dProjectionCamera {
    position: Mars3dWorldPoint;
    direction: Mars3dWorldPoint;
    up: Mars3dWorldPoint;
    fovYRadians: number;
    anchorDistance: number;
}
export interface IMars3dScreenPoint {
    x: number;
    y: number;
}
export interface IMars3dCompensationFrame {
    worldAnchors: readonly [Mars3dWorldPoint, Mars3dWorldPoint, Mars3dWorldPoint];
    screenAnchors: readonly IMars3dScreenPoint[];
}
/** 在已提交相机前方创建稳定的视锥平面锚点。 */
export declare const createMars3dCompensationFrame: (camera: IMars3dProjectionCamera, width: number, height: number) => IMars3dCompensationFrame | null;
/** 把固定 ECEF 锚点投影到当前 Canvas 像素坐标。 */
export declare const projectMars3dCompensationAnchors: (camera: IMars3dProjectionCamera, anchors: readonly Mars3dWorldPoint[], width: number, height: number) => readonly IMars3dScreenPoint[] | null;
/** 计算把上一张已完成体积帧映射到当前地图帧的二维仿射变换。 */
export declare const createMars3dCanvasCompensationTransform: (displayed: readonly IMars3dScreenPoint[], current: readonly IMars3dScreenPoint[]) => string | null;
