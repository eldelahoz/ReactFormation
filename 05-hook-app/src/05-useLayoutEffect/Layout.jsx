import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { Quote } from "./Quote";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? <LoadingMessage /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
