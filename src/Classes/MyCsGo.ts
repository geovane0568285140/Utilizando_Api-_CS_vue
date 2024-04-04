export default interface MyCsGo{
    id: number,
    name: string,
    description: string,
    rarity: {
        id: string,
        name: string,
        color: string
    },
    type: string,
    image: string
}