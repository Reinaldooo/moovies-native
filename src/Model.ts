export interface Product {
    title: string;
    color1: string;
    picture: number;
}

export const products = [
    {
        title: "The Dark Knight",
        color1: "#445",
        picture: require("./assets/darkknight.png"),
        aspectRatio: 1.5,
    },

    {
        title: "Avengers: Endgame",
        color1: "#556",
        picture: require("./assets/endgame.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Guardians of the Galaxy",
        color1: "#445",
        picture: require("./assets/guardians.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Joker",
        color1: "#556",
        picture: require("./assets/joker.png"),
        aspectRatio: 1.5,
    },
    {
        title: "Black Panther",
        color1: "#445",
        picture: require("./assets/panther.png"),
        aspectRatio: 1.5,
    },
];
