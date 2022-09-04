export interface ResponseBody<T> {
  data: T;
  errorMessages: string[];
  isSuccess: boolean;
  maxItems?: number;
  maxPages?: number;
  currentPage?: number;
}
