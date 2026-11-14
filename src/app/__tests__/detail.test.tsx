import React from "react";
import { render, screen } from "@testing-library/react-native";
import Detail from "../../app/detail";

jest.mock("expo-router", () => ({
    useLocalSearchParams: () => ({
        id: "e21857d5-3256-4547-afb3-4b6ded592596",
        name: "Gorillaz",
        image: "https://lastfm-img.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
    }),
}));

describe("Detail", () => {
    it("muestra el nombre del artista", () => {
        render(<Detail />);
        expect(screen.getByText("Gorillaz")).toBeTruthy();
    });

    it("muestra el id del artista", () => {
        render(<Detail />);
        expect(screen.getByText("e21857d5-3256-4547-afb3-4b6ded592596")).toBeTruthy();
    });

    it("carga la imagen con la URL recibida", () => {
        render(<Detail />);
        const image = screen.getByTestId("artist-image");
        expect(image.props.source).toEqual({
            uri: "https://lastfm-img.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
        });
    });
});