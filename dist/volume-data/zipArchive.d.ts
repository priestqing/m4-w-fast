export interface IZipExtractionLimits {
    maximumEntryBytes: number;
    maximumEntryCount: number;
    maximumCompressionRatio: number;
}
export declare const extractZipEntry: (archiveBytes: Uint8Array, entryName: string, limits: IZipExtractionLimits, signal?: AbortSignal) => Promise<Uint8Array>;
