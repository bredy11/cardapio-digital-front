export interface RestaurantForm {
  idUsuario: number;
  nome: string;
  telefone: string;
  urlFacebock: string;
  urlInstagram: string;
  urlSite: string;
  horarioFuncionamento: {
    segunda: string[];
    terca: string[];
    quarta: string[];
    quinta: string[];
    sexta: string[];
    sabado: string[];
    domingo: string[];
  };
  endereco: {
    cep: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  imagem: string | null;
  categoria: string;
}