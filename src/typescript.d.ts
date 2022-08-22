declare type FunctionExecutor = (
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => void;
