import useSWR from "swr";
const URL = "https://dogs-api.nomadcoders.workers.dev";

interface DogProp {
    url: string;
    isLiked: boolean;
}
const useDog = () => {
    const { mutate, data, error } = useSWR<DogProp>(URL);
    return { mutate, dog: data, isLoading: !data && !error };
};

export default useDog;
