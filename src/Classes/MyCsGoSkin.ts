export default interface MyCsGoSkin{
    id: number,
    name: string,
    description: string,
    weapon: {
        id: number,
        name: string
    },
    category: {
        id: number,
        name: string
    },
    pattern: {
        id: number,
        name: string
    },
    min_float: number,
    max_float: number,
    rarity: {
        id: number,
        name: string,
        color: string
    },
    stattrak: boolean,
    souvenir: boolean,
    paint_index: number,
    wears: [
        {
            id: number,
            name: string
        },
        // {
        //     id: number,
        //     name: string
        // },
        // {
        //     id: number,
        //     name: string
        // },
        // {
        //     id: number,
        //     name: string
        // },
        // {
        //     id: number,
        //     name: string
        // }
    ],
    collections: [
        {
            id: number,
            name: string,
            image: string
        }
    ],
    crates: [
        {
            id: number,
            name: string,
            image: string
        },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     },
    //     {
    //         id: number,
    //         name: string,
    //         image: string
    //     }
     ],
    team: {
        id: number,
        name: string
    },
    image: string
}