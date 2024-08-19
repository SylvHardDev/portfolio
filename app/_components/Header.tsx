import { Section } from "./Section"

export const Header = () => {
    return (
        <header>
            <Section className="flex items-baseline">
                <h1 className="text-4-xl font-bold text-primary">
                    hardev.com
                </h1>
                <p className="text-lg text-muted">
                    Web developper
                </p>
            </Section>
        </header>
    )
}