import { format } from "date-fns";

export const useNow = () => {
  const now = format(new Date(), "yyyy/MM/dd HH:mm:ss");

  return now;
};
