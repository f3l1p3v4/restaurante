import { toJSON } from "../index.js";

export default function parseData({ feed }) {
  return feed.entry
    .map((value) =>
      toJSON(
        value.content.$t
          .replace(/:\s?/gi, "|")
          .split(/,\s/gi)
          .map((value) => value.split("|"))
          .flat()
      )
    )
    .map((value) => ({
      ...value,
      ingredientes: value.ingredientes.split(";"),
      imagem: `https://${value.imagem}`
    }));
}
