/* eslint-disable prettier/prettier */
export interface IProduct {
    id: Number
    name: String
    price: String
    colors: String
    sizes: String
    photos: File
    orders: String
}

export type TQProduct = {
    id?: Number
    name?: String
    order?: Object
}

export type TPProduct = {
    name?: String
    price?: String
    colors?: String
    sizes?: String
    photos?: String
}
