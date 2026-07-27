export interface IGridLayerStatistics {
    min: number | undefined;
    max: number | undefined;
    validCount: number;
    missingCount: number;
    zeroCount: number;
    nonZeroCount: number;
}
export declare const calculateGridLayerStatistics: (values: ArrayLike<number>) => IGridLayerStatistics;
