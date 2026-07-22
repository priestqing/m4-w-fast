export declare class LiveUpdateScheduler {
    private readonly callback;
    private readonly intervalMilliseconds;
    private timer;
    private lastRunAt;
    constructor(callback: () => void, intervalMilliseconds: number);
    schedule(): void;
    cancel(): void;
    private run;
}
