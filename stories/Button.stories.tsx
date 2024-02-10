import Button from "../components/Button";

export default { title: "Button", component: Button };

export const Red = () => (
  <Button
    size="md"
    onClick={async () => alert("Hellow")}
    label="Press me"
    backgroundColor="red"
  />
);
export const Blue = () => (
  <Button
    size="md"
    onClick={async () => alert("Hellow")}
    label="Press me"
    backgroundColor="blue"
  />
);
export const Green = () => (
  <Button
    size="md"
    onClick={async () => alert("Hellow")}
    label="Press me"
    backgroundColor="green"
  />
);
