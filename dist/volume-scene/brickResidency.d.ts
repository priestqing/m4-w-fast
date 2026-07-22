export type VolumeBrickDemandKind = 'preview-slice' | 'locked-slice' | 'route-profile' | 'visible-volume';
export type VolumeBrickResidencyState = 'loading' | 'resident';
export interface IVolumeBrickDemand {
    key: string;
    kind: VolumeBrickDemandKind;
    distance: number;
}
export interface IVolumeBrickResidentEntry {
    key: string;
    slotIndex: number;
    state: VolumeBrickResidencyState;
    sourceRevision: number;
    requestGeneration: number;
    lastUsedFrame: number;
}
export interface IVolumeBrickLoadRequest {
    key: string;
    slotIndex: number;
    sourceRevision: number;
    requestGeneration: number;
}
export interface IVolumeBrickResidencyPlan {
    selectedKeys: readonly string[];
    loads: readonly IVolumeBrickLoadRequest[];
    evicted: readonly IVolumeBrickResidentEntry[];
    residentCount: number;
    pendingCount: number;
    budgetLimited: boolean;
}
/** Manage pure CPU brick demand, LRU slots, and stale request generations. */
/** 管理纯 CPU 分块需求、LRU 槽位和过期请求 generation。 */
export declare class VolumeBrickResidency {
    readonly capacity: number;
    private readonly entries;
    private readonly freeSlots;
    private currentSourceRevision;
    private nextRequestGeneration;
    constructor(capacity: number);
    /** Return immutable snapshots of current entries. */
    /** 返回当前条目的不可变快照。 */
    getEntries(): readonly IVolumeBrickResidentEntry[];
    /** Reset all slots and return entries that callers must release. */
    /** 重置全部槽位并返回调用方需要释放的条目。 */
    reset(sourceRevision?: number): readonly IVolumeBrickResidentEntry[];
    /** Build the latest demand plan without backend resource types. */
    /** 在不包含后端资源类型的前提下创建最新需求计划。 */
    plan(demands: readonly IVolumeBrickDemand[], sourceRevision: number, frameIndex: number, maximumUploads: number): IVolumeBrickResidencyPlan;
    /** Commit a completed load only when its revision and generation are current. */
    /** 仅在 revision 和 generation 仍有效时提交完成的加载。 */
    commit(request: IVolumeBrickLoadRequest): boolean;
    /** Cancel one current request and release its slot. */
    /** 取消一个当前请求并释放其槽位。 */
    cancel(request: IVolumeBrickLoadRequest): boolean;
}
