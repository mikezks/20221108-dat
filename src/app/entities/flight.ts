
export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO formatted date
  delayed: boolean;
}
