//criando a interface Produto.
export interface Produto {
  getType(): string;
  getRam(): number;
  getSsd(): number;
  getCpu(): number;
  toString(): string;
}
