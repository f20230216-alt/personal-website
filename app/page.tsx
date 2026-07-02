import { Container, Grid, Section, Stack } from "@/components/layout";
import { Badge, Typography } from "@/components/ui";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">
      <div className="hero-environment" aria-hidden="true">
        <svg
          className="hero-linework"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M-80 635C210 520 312 724 586 596C820 487 903 274 1215 324C1364 348 1466 423 1530 486" />
          <path d="M-96 312C184 408 318 236 548 320C814 416 875 644 1164 592C1318 565 1421 486 1536 502" />
          <path d="M22 800C238 662 450 727 642 656C850 580 945 448 1168 456C1298 461 1394 504 1488 548" />
        </svg>
      </div>

      <Section
        aria-labelledby="hero-heading"
        className="relative z-[var(--z-base)] flex min-h-screen items-center py-[var(--space-8)]"
      >
        <Container size="md">
          <Grid
            columns={2}
            className="items-center gap-y-[var(--space-12)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-x-[var(--space-6)]"
          >
            <Stack gap="md" className="max-w-[34rem] md:justify-self-end">
              <Stack gap="sm">
                <Badge>Product Builder</Badge>
                <Typography as="h1" id="hero-heading" variant="h1" className="min-h-[5.5rem]">
                  Hero headline
                </Typography>

                <Stack gap="sm">
                  <Typography variant="bodyLarge" className="min-h-[3rem] text-muted">
                    Hero supporting paragraph
                  </Typography>
                  <div aria-label="Signature area" className="min-h-[2.5rem]" />
                </Stack>
              </Stack>

              <div aria-label="Hero actions" className="flex flex-col gap-[var(--space-3)] sm:flex-row">
                <div
                  aria-label="Primary call to action placeholder"
                  className="h-[var(--control-lg)] w-full rounded-full border border-border-strong sm:w-48"
                />
                <div
                  aria-label="Secondary call to action placeholder"
                  className="h-[var(--control-lg)] w-full rounded-full border border-border sm:w-48"
                />
              </div>
            </Stack>

            <div className="flex justify-center md:justify-start" aria-label="Phone showcase">
              <div
                aria-label="Phone showcase placeholder"
                className="aspect-[9/19.5] w-full max-w-[18rem] rounded-[var(--radius-lg)] border border-border-strong bg-surface"
              />
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
