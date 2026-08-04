/** 带越界检查的雷达二进制读取器。 */
export declare class RadarBinaryReader {
    private readonly view;
    readonly littleEndian: boolean;
    private offsetValue;
    constructor(view: DataView, littleEndian: boolean);
    get offset(): number;
    get byteLength(): number;
    seek(offset: number): void;
    skip(byteLength: number): void;
    int8(): number;
    uint8(): number;
    int16(): number;
    uint16(): number;
    int32(): number;
    uint32(): number;
    float32(): number;
    int64(): bigint;
    uint64(): bigint;
    text(byteLength: number): string;
    private ensure;
}
