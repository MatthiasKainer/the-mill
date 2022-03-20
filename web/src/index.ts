// get the query string for the language
const search = window.location.search.substring(1);
const queryString = search.split("&").reduce((query, part) => {
    const [key, value] = part.split("=");
    query[key] = value;
    return query
}, {} as { [key: string]: string });
document.documentElement.lang = queryString.lang || "en";

export * from "./assets"