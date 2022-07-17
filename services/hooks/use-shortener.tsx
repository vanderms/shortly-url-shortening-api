import { useContext } from "react";
import { ShortenerContext, Link } from "services/contexts/shortener-context";

export function useShortener() {
  const context = useContext(ShortenerContext);
  if (context) {
    return context;
  }
  throw Error("Component is not inside a <ShortenerContextProvider/>");
}
