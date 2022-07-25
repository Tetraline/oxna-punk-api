const generateFilterString = (selectedOptions) => {
  if (Object.values(selectedOptions).every((s) => s === "all")) {
    return "";
  }
  const { abv, year, ph } = selectedOptions;
  let abvStr = abv;
  let yearStr;
  let phStr;
  switch (year) {
    case "b2010":
      yearStr = "in the classic range";
      break;

    case "a2010":
      yearStr = "brewed after 2010";
      break;
    default:
      yearStr = "from any range";
      break;
  }
  switch (ph) {
    case "low":
      phStr = "acidic (low ph)";
      break;
    case "high":
      phStr = "non-acidic (high ph)";
      break;
    default:
      phStr = "any acidity";
      break;
  }
  return `${abvStr} alcohol contents, ${yearStr}, ${phStr}.`;
};

export default generateFilterString;
