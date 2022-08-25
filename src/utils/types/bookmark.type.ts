import { BaseModel } from "./base.type";

export type TBookmark = BaseModel & {
    name: string
    url: string
    title: string
    description: string
    imageUrl: string
    tags: string[]
}