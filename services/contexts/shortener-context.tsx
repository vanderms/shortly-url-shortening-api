import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export interface Link {
  id: string;
  url: string;
  shortened: string;
}

interface ShortenerContextProps {
  shorten: (url: string) => Promise<void>;
  links: Link[];
  waiting: boolean;
  serverError: boolean;
}

export const ShortenerContext = createContext<ShortenerContextProps | null>(null);

export const ShortenerContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("links");
    if (data) {
      const storageLinks = JSON.parse(data) as Link[];
      setLinks(() => storageLinks);
    }
  }, []);

  const shorten = async (url: string) => {
    setWaiting(true);

    const response = await axios
      .get("https://api.shrtco.de/v2/shorten", {
        params: {
          url,
        },
      })
      .catch((error) => {
        console.log(error.message);
        return null;
      });

    if (response?.data?.ok) {
      const { data } = response;

      const link: Link = {
        id: `${url}-${Math.random()}`,
        url: url,
        shortened: data.result.short_link,
      };

      setLinks((prev) => {
        const newLinks = [...prev, link];
        localStorage.setItem("links", JSON.stringify(newLinks));
        return newLinks;
      });

      setServerError(false);
    } else {
      setServerError(true);
    }
    setWaiting(false);
  };

  return (
    <ShortenerContext.Provider value={{ links: [...links], shorten, waiting, serverError }}>
      {children}
    </ShortenerContext.Provider>
  );
};
