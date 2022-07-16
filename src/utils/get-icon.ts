export default function getIcon(
  iconName: string,
  map: Map<string, JSX.Element>,
): JSX.Element {
  const icon = map.get(iconName);
  return icon;
}
