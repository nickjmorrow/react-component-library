import * as deepMergeProxy from 'deepmerge';
export const deepMerge: typeof deepMergeProxy = (deepMergeProxy as any).default || deepMergeProxy;
