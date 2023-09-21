export function getParsedValue(input) {
  const original = CSSStyleValue.parse("--o", input);
  let parsed;
  let unit = null;

  try {
    parsed = CSSNumericValue.parse(original);
    unit = parsed.values[0].unit;
  } catch (err) {
    console.log("Couldn't parse CSSNumericValue, converting it");
    const t = CSSStyleValue.parse("--t", `calc(${original[0]} * 1px`);
    parsed = CSSNumericValue.parse(t);
  }

  return {
    raw: parsed,
    unit,
    value: parsed.values[0].value,
  };
}
