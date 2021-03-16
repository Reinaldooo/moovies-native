export interface Product {
    title: string;
    color1: string;
    picture: number;
}

export const products = [
    {
        title: "The Dark Knight",
        color1: "#334",
        picture: require("./assets/darkknight.png"),
        aspectRatio: 1.5,
    },

    {
        title: "Avengers: Endgame",
        color1: "#778",
        picture: require("./assets/endgame.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Guardians of the Galaxy",
        color1: "#334",
        picture: require("./assets/guardians.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Joker",
        color1: "#778",
        picture: require("./assets/joker.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Black Panther",
        color1: "#334",
        picture: require("./assets/panther.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Doctor Strange",
        color1: "#778",
        picture: require("./assets/strange.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Thor: Ragnarok",
        color1: "#334",
        picture: require("./assets/thor.png"),
        aspectRatio: 1.5,
    },
];
