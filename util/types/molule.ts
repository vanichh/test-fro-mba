export interface ItemModule {
  id: string;
  title: string;
  list: Array<List[]>;
}
export interface List {
  id: string;
  string: string;
  v: number;
  listID: string;
}
