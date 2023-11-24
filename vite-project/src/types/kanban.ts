export interface ListKanban {
  id: number
  title: string
  cards?: Card[] // facultatif avec ?
}

export interface Card {
  id: number
  listId: number
  title: string
}

const maCarte: Partial<Card> = { // <== L'objet n'est pas encore créer les propriétés sont facultatives.
}