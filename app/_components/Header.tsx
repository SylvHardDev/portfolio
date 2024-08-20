import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary-foreground">
          hardev.com
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/SylvHardDev"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={18  } className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
