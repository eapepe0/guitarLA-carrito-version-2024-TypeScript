export type Guitar = {
	description: string;
	id: number;
	image: string;
	name: string;
	price: number;
};

//* heredar un type

export type CartItem = Guitar & {
	quantity: number;
};

export type GuitarID = Guitar['id'];

//* heredar una interface
/**
 * export interface CartItem extends Guitar {
 *  quantity : number;
 * }
 */

//* utility types

//* Pick , podemos seleccionar que atributos podemos heredar .Pick<"De donde sacamos lo que vamos a heredar" , 'atributo' | 'atributo2'>
//* si queremos agregar algo mas

//* & {
//* atributoAgregado : string;
//* }

//* export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//* 	quantity: number;
//* };

/**
 * type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity:number;
}
 */

//* Omit

//* Podemos omitir los atributos a heredar

//* export type CartItem = Omit<Guitar, 'name' | 'price'>;
/**
 *
 * type CartItem = {
 *   description: string;
 *   id: number;
 *   image: string;
}
*/

//* Lookup

//* podemos seleccionar un solo atributo
/**
 * export type GuitarID = Guitar['id']
 */
