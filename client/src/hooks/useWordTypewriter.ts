import { useEffect, useState } from "react";

export function useWordTypewriter(text: string, delayMs = 250) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const words = text.split(" ");
    let index = 0;

    setDisplayed("");

    const interval = setInterval(() => {
      if (index >= words.length) {
        clearInterval(interval);
        return;
      }

      setDisplayed((prev) =>
        prev.length === 0 ? words[index] : prev + " " + words[index]
      );

      index += 1;
    }, delayMs);

    return () => clearInterval(interval);
  }, [text, delayMs]);

  return displayed;
}
