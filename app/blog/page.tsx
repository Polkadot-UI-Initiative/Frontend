import { Hello } from "@/components/hello";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <Hello />
    </div>
  );
}
