export interface MenuItemPayload {
  nome: string;
  descricao: string;
  categoria: string;
  valorTotal: number;
  quantidadeDePessoasQueServe: number;
  imagem: string | null;
  idRestaurante: number;
}

export interface CartItem extends MenuItemPayload {
  quantidade: number;
}