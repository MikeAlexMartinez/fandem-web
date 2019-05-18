import deburr from "lodash.deburr";

function getSuggestions({ inputValue, list }) {
  const cleanValue = deburr(inputValue.trim()).toLowerCase();
  const inputLength = cleanValue.length;
  return cleanValue === 0
    ? []
    : list.filter(
        listItem =>
          listItem.label.slice(0, inputLength).toLowerCase() === cleanValue
      );
}

export default getSuggestions;
