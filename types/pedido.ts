export interface TypePedido {
   id?: number;
   produto: string;
   valor: number;
   data: Date;
   ativo: number;
   cliente_id: number;
   pedido_id: number;
   pedido_status_id: number;
   pedido_imagens_id?: number;
}
