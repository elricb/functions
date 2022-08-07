type ObjectStringArray = {
  [index: string | number]: string;
};

type ObjectNumberArray = {
  [index: string | number]: number;
};

type FunctionExecutor = (
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => void;
