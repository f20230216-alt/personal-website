import { Bell, CalendarDays, Heart, Home as HomeIcon, MessageCircle, Sparkles, Users } from "lucide-react";
import type { CSSProperties } from "react";
import { Container, Grid, Section, Stack } from "@/components/layout";
import { Badge, Typography } from "@/components/ui";

const phoneStyles = {
  phone: {
    position: "relative",
    overflow: "hidden",
    borderColor: "rgb(245 245 243 / 0.2)",
    background:
      "linear-gradient(145deg, rgb(255 255 255 / 0.045), transparent 20%), radial-gradient(circle at 50% 0%, rgb(184 122 255 / 0.11), transparent 34%), var(--color-surface)",
    boxShadow:
      "0 0 34px rgb(184 122 255 / 0.07), 0 22px 64px rgb(0 0 0 / 0.44), inset 0 0 0 1px rgb(255 255 255 / 0.04)",
  },
  notch: {
    position: "absolute",
    top: "0.65rem",
    left: "50%",
    zIndex: 3,
    width: "5.75rem",
    height: "1.35rem",
    border: "1px solid rgb(255 255 255 / 0.08)",
    borderRadius: "var(--radius-full)",
    background: "#030305",
    transform: "translateX(-50%)",
  },
  highlight: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    background:
      "linear-gradient(110deg, rgb(255 255 255 / 0.06), transparent 22% 78%, rgb(255 255 255 / 0.03)), radial-gradient(circle at 62% 24%, rgb(184 122 255 / 0.12), transparent 17rem)",
    pointerEvents: "none",
  },
  screen: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: "0.8rem",
    padding: "0.86rem",
    color: "rgb(245 245 243 / 0.9)",
    fontFamily: "var(--font-family-sans)",
  },
  status: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "0.35rem",
    color: "rgb(245 245 243 / 0.82)",
    fontSize: "0.68rem",
    fontWeight: 700,
    lineHeight: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "0.12rem",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.42rem",
    fontSize: "0.98rem",
    fontWeight: 700,
  },
  brandIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.28rem",
    height: "1.28rem",
    borderRadius: "0.5rem",
    color: "#c17aff",
    background: "rgb(184 122 255 / 0.14)",
    boxShadow: "0 0 18px rgb(184 122 255 / 0.18)",
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: "0.34rem",
  },
  actionIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.55rem",
    height: "1.55rem",
    border: "1px solid rgb(255 255 255 / 0.08)",
    borderRadius: "var(--radius-full)",
    color: "rgb(245 245 243 / 0.7)",
    background: "rgb(255 255 255 / 0.04)",
  },
  card: {
    border: "1px solid rgb(255 255 255 / 0.08)",
    background: "linear-gradient(180deg, rgb(255 255 255 / 0.065), rgb(255 255 255 / 0.025)), rgb(12 12 18 / 0.92)",
    boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.045), 0 12px 28px rgb(0 0 0 / 0.2)",
  },
  overview: {
    padding: "0.82rem",
    borderRadius: "1rem",
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.75rem",
  },
  mutedLabel: {
    margin: 0,
    color: "rgb(245 245 243 / 0.56)",
    fontSize: "0.62rem",
    lineHeight: 1.2,
  },
  metric: {
    display: "block",
    marginTop: "0.2rem",
    color: "#c17aff",
    fontSize: "1.78rem",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 1,
  },
  pill: {
    border: "1px solid rgb(255 255 255 / 0.08)",
    borderRadius: "var(--radius-full)",
    padding: "0.28rem 0.48rem",
    color: "rgb(245 245 243 / 0.6)",
    fontSize: "0.58rem",
    lineHeight: 1,
  },
  chart: {
    display: "block",
    width: "100%",
    height: "6.65rem",
    marginTop: "0.55rem",
    filter: "drop-shadow(0 0 10px rgb(184 122 255 / 0.16))",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "0.48rem",
  },
  miniCard: {
    display: "flex",
    minHeight: "5.05rem",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "0.9rem",
    padding: "0.62rem",
    color: "#c17aff",
  },
  miniValue: {
    color: "rgb(245 245 243 / 0.9)",
    fontSize: "0.9rem",
    fontWeight: 650,
    lineHeight: 1,
  },
  insight: {
    display: "grid",
    gap: "0.52rem",
    minHeight: "5.4rem",
    borderRadius: "1rem",
    padding: "0.82rem",
  },
  insightHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.42rem",
  },
  insightText: {
    maxWidth: "13rem",
    color: "rgb(245 245 243 / 0.82)",
    fontSize: "0.78rem",
    fontWeight: 520,
    lineHeight: 1.35,
  },
  pulse: {
    width: "0.46rem",
    height: "0.46rem",
    borderRadius: "var(--radius-full)",
    background: "#b87aff",
    boxShadow: "0 0 16px rgb(184 122 255 / 0.6)",
  },
  nav: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.5rem",
    marginTop: "auto",
    border: "1px solid rgb(255 255 255 / 0.07)",
    borderRadius: "var(--radius-full)",
    padding: "0.34rem",
    background: "rgb(255 255 255 / 0.035)",
  },
  navItem: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1.85rem",
    borderRadius: "var(--radius-full)",
    color: "rgb(245 245 243 / 0.54)",
  },
  navItemActive: {
    color: "#c17aff",
    background: "rgb(184 122 255 / 0.12)",
  },
} satisfies Record<string, CSSProperties>;

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
        <Container size="full">
          <Grid
            columns={2}
            className="items-center gap-y-[var(--space-12)] md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-x-[clamp(5rem,10vw,9rem)] lg:grid-cols-[minmax(0,48rem)_minmax(8rem,1fr)_18rem] lg:gap-x-0"
          >
            <Stack gap="md" className="max-w-[34rem] md:justify-self-start lg:max-w-[50rem]">
              <Stack gap="sm">
                <Badge>Product Builder</Badge>
                <Typography as="h1" id="hero-heading" variant="h1" className="hero-heading min-h-[5.5rem]">
                  Designing products people <span>return</span> to.
                </Typography>

                <Stack gap="sm">
                  <Typography variant="bodyLarge" className="hero-copy min-h-[3rem] text-muted">
                    I partner with founders and teams to turn complex problems into simple, intuitive products that
                    create real impact.
                  </Typography>
                  <div aria-label="Signature area" className="hero-signature min-h-[2.5rem]">
                    <span className="hero-signature-mark">Sriman</span>
                    <span className="hero-signature-name">Sriman Goud Panjala</span>
                  </div>
                </Stack>
              </Stack>

              <div aria-label="Hero actions" className="flex flex-col gap-[var(--space-3)] sm:flex-row">
                <div
                  aria-label="Primary call to action placeholder"
                  className="hero-cta hero-cta-primary h-[var(--control-lg)] w-full rounded-full border border-border-strong sm:w-48"
                >
                  <span>Explore DuoLink</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div
                  aria-label="Secondary call to action placeholder"
                  className="hero-cta h-[var(--control-lg)] w-full rounded-full border border-border sm:w-48"
                >
                  <span>Get in touch</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </Stack>

            <div className="flex justify-center md:justify-end lg:col-start-3" aria-label="Phone showcase">
              <div
                aria-label="Fictional DuoLink product showcase"
                className="duolink-phone aspect-[9/19.5] w-full max-w-[18rem] rounded-[var(--radius-lg)] border border-border-strong bg-surface"
                style={phoneStyles.phone}
              >
                <div aria-hidden="true" style={phoneStyles.notch} />
                <div aria-hidden="true" style={phoneStyles.highlight} />
                <div className="duolink-screen" style={phoneStyles.screen}>
                  <div className="duolink-status" style={phoneStyles.status} aria-hidden="true">
                    <span>9:41</span>
                    <span>•••</span>
                  </div>

                  <header className="duolink-header" style={phoneStyles.header}>
                    <div className="duolink-brand" style={phoneStyles.brand}>
                      <span className="duolink-brand-icon" style={phoneStyles.brandIcon}>
                        <Heart size={15} fill="currentColor" aria-hidden="true" />
                      </span>
                      <span>DuoLink</span>
                    </div>
                    <div className="duolink-header-actions" style={phoneStyles.headerActions} aria-hidden="true">
                      <span style={phoneStyles.actionIcon}>
                        <Bell size={13} />
                      </span>
                      <span style={phoneStyles.actionIcon}>
                        <Sparkles size={13} />
                      </span>
                    </div>
                  </header>

                  <section
                    className="duolink-card duolink-overview"
                    style={{ ...phoneStyles.card, ...phoneStyles.overview }}
                    aria-label="Relationship rhythm preview"
                  >
                    <div className="duolink-card-header" style={phoneStyles.cardHeader}>
                      <div>
                        <p style={phoneStyles.mutedLabel}>Connection rhythm</p>
                        <strong style={phoneStyles.metric}>4h 32m</strong>
                      </div>
                      <span style={phoneStyles.pill}>Today</span>
                    </div>

                    <svg
                      className="duolink-chart"
                      style={phoneStyles.chart}
                      viewBox="0 0 220 88"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 69C22 61 29 35 47 43C66 52 71 71 91 58C110 46 112 20 132 29C149 36 150 56 169 48C189 39 191 21 216 14"
                        stroke="url(#duolink-chart-line)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 69C22 61 29 35 47 43C66 52 71 71 91 58C110 46 112 20 132 29C149 36 150 56 169 48C189 39 191 21 216 14V88H4V69Z"
                        fill="url(#duolink-chart-fill)"
                      />
                      <defs>
                        <linearGradient id="duolink-chart-line" x1="4" y1="69" x2="216" y2="14">
                          <stop stopColor="#8F5CFF" />
                          <stop offset="1" stopColor="#D7A4FF" />
                        </linearGradient>
                        <linearGradient id="duolink-chart-fill" x1="110" y1="14" x2="110" y2="88">
                          <stop stopColor="#A855F7" stopOpacity="0.24" />
                          <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </section>

                  <section className="duolink-grid" style={phoneStyles.grid} aria-label="Relationship insight cards">
                    <div className="duolink-mini-card" style={{ ...phoneStyles.card, ...phoneStyles.miniCard }}>
                      <Heart size={16} aria-hidden="true" />
                      <span style={phoneStyles.mutedLabel}>Affinity</span>
                      <strong style={phoneStyles.miniValue}>92</strong>
                    </div>
                    <div className="duolink-mini-card" style={{ ...phoneStyles.card, ...phoneStyles.miniCard }}>
                      <Users size={16} aria-hidden="true" />
                      <span style={phoneStyles.mutedLabel}>Presence</span>
                      <strong style={phoneStyles.miniValue}>18</strong>
                    </div>
                    <div className="duolink-mini-card" style={{ ...phoneStyles.card, ...phoneStyles.miniCard }}>
                      <CalendarDays size={16} aria-hidden="true" />
                      <span style={phoneStyles.mutedLabel}>Moments</span>
                      <strong style={phoneStyles.miniValue}>7</strong>
                    </div>
                  </section>

                  <section
                    className="duolink-card duolink-insight"
                    style={{ ...phoneStyles.card, ...phoneStyles.insight }}
                    aria-label="Private insight preview"
                  >
                    <div style={phoneStyles.insightHeader}>
                      <span className="duolink-pulse" style={phoneStyles.pulse} aria-hidden="true" />
                      <p style={phoneStyles.mutedLabel}>Relationship insight</p>
                    </div>
                    <strong style={phoneStyles.insightText}>Private context, translated into a simple next step.</strong>
                  </section>

                  <nav className="duolink-nav" style={phoneStyles.nav} aria-label="DuoLink preview navigation">
                    <span aria-label="Home" style={{ ...phoneStyles.navItem, ...phoneStyles.navItemActive }}>
                      <HomeIcon size={15} />
                    </span>
                    <span aria-label="Messages" style={phoneStyles.navItem}>
                      <MessageCircle size={15} />
                    </span>
                    <span aria-label="People" style={phoneStyles.navItem}>
                      <Users size={15} />
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
