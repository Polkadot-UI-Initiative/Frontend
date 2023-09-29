import { Hello } from "@/components/hello";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <Hello />
    </div>
  );
}
