export interface ActivityData {
  labels: Array<string>;
  data: Array<number>;
}

export interface RunningTaskData {
  total: number;
  onProgress: number;
  percentage: number;
}

export interface PerformanceData {
  speed: number
  consistency: number
}