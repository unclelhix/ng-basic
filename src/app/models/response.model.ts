export interface ResponseBody<T> {
  data: T;
  errorMessages: string[];
  isSuccess: boolean;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
}
