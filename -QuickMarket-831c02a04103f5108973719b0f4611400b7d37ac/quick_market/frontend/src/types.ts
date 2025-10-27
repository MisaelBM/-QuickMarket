// Define the ProdutoCarrinho type
export interface ProdutoCarrinho {
	id: number;
	produto_id?: number;
	nome: string;
	descricao?: string;
	preco: number;
	quantidade: number;
	imagem: string;
	subtotal?: number;
}