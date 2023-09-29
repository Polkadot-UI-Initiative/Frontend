import { Hello } from "@/components/hello";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <Hello />
    </div>
  );
}
