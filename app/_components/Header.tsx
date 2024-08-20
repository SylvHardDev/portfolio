import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline">
        <h1 className="text-4-xl font-bold text-primary">hardev.com</h1>
        <div className="flex-1">
          <ul>
            <Button className="size-6"/>
          </ul>
        </div>
        <p className="text-lg text-muted">Web developper</p>
      </Section>
    </header>
  );
};
