export default function errorParser({ errors, type }) {
  if (!errors) return [];

  const errorIndex = errors.findIndex((error) => error.type === type);
  if (errorIndex === -1) return '';

  return errors[errorIndex].detail;
}
