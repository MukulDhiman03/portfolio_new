import { cn } from "@/ulib/utils";


export default function Home() {
  return (
    <div>
      <h1 className={cn("italic", "text-5xl", "text-yellow-400", true && "underline")}>
        Hello My Friends
      </h1>
    </div >
  );
}
