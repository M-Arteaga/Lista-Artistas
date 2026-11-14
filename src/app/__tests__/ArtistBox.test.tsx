import React from "react";
import { render, screen } from "@testing-library/react-native";
import ArtistBox from "../../components/ArtistBox";

const artist = {
    id: "e21857d5-3256-4547-afb3-4b6ded592596",
    name: "Gorillaz",
    image: "https://lastfm-img.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
};

describe("ArtistBox", () => {
    it("muestra el nombre del artista", () => {
        render(<ArtistBox artist={artist} />);
        expect(screen.getByText("Gorillaz")).toBeTruthy();
    });

    it("carga la imagen con la URL del artista", () => {
        render(<ArtistBox artist={artist} />);
        const image = screen.getByTestId("artist-image");
        expect(image.props.source).toEqual({ uri: "https://lastfm-img.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png" });
    });
});