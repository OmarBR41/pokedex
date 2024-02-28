// A wrapper for "JSON.parse()"" to support "undefined" value
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}

export function formatPokemonId(id: number): string {
  return (
    "#" +
    id.toLocaleString("en-US", {
      minimumIntegerDigits: 4,
      useGrouping: false,
    })
  );
}
