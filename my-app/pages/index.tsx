import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const Index: NextPage = () => {
    const getPokemonList = (() =>
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
            .then((res) => console.log(res)))();
    return <></>;
};

export default Index;
