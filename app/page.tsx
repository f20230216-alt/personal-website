import { Container, Grid, Section, Stack } from "@/components/layout";
import { Badge } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Section aria-labelledby="hero-heading" className="min-h-screen">
        <Container>
          <Grid columns={2} className="min-h-[calc(100vh_-_(var(--space-section-y)_*_2))] items-center">
            <Stack gap="lg">
              <Badge>Product Builder</Badge>

              <Stack gap="md">
                <h1 id="hero-heading" className="min-h-[8rem]">
                  Hero headline
                </h1>
                <p className="min-h-[4rem] text-muted">Hero supporting paragraph</p>
              </Stack>

              <div aria-label="Signature area" className="min-h-[3rem]" />

              <div aria-label="Hero actions" className="flex flex-col gap-[var(--space-3)] sm:flex-row">
                <div
                  aria-label="Primary call to action placeholder"
                  className="h-[var(--control-lg)] w-full rounded-full border border-border-strong sm:w-40"
                />
                <div
                  aria-label="Secondary call to action placeholder"
                  className="h-[var(--control-lg)] w-full rounded-full border border-border sm:w-40"
                />
              </div>
            </Stack>

            <div className="flex justify-center md:justify-end" aria-label="Phone showcase">
              <div
                aria-label="Phone showcase placeholder"
                className="aspect-[9/19.5] w-full max-w-72 rounded-[var(--radius-lg)] border border-border-strong bg-surface"
              />
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
