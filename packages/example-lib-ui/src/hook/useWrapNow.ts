import { useNow } from "@example/example-lib-core";

export const useWrapNow = () => {
  const now = useNow();

  return "<" + now + ">";
};
