import React from "react"
import { AnimatedNumber } from "./animated-number"

export type ExperienceSectionProps = {
  startDate?: string
  projects?: number
  clients?: number
  certifications?: number
  className?: string
}

function calculateYearsSince(startDate: string) {
  const start = new Date(startDate)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const m = now.getMonth() - start.getMonth()
  const d = now.getDate() - start.getDate()
  if (m < 0 || (m === 0 && d < 0)) years -= 1
  return Math.max(0, years)
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  startDate = "2024-01-01",
  projects = 24,
  clients = 3,
  certifications = 2,
}) => {
  const years = React.useMemo(() => calculateYearsSince(startDate), [startDate])

  return (
    <section id="experience" className="bg-muted/50">
      <div className="section-container">
        <header className="mb-8">
          <h2 id="experience-heading" className="section-title">
            Experience
          </h2>
        </header>

        <dl
          aria-label="Experience metrics"
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          <dd className="rounded-lg border bg-card p-4 md:p-6 flex flex-col">
            <dt className="sr-only">Years of experience</dt>
            <span className="text-sm text-muted-foreground">Years</span>
            <AnimatedNumber
              value={years}
              suffix="+"
              className="text-3xl font-semibold md:text-4xl"
            />
          </dd>

          <dd className="rounded-lg border bg-card p-4 md:p-6 flex flex-col">
            <dt className="sr-only">Projects delivered</dt>
            <span className="text-sm text-muted-foreground">Projects</span>
            <AnimatedNumber
              value={projects}
              suffix="+"
              className="text-3xl font-semibold md:text-4xl"
            />
          </dd>

          <dd className="rounded-lg border bg-card p-4 md:p-6 flex flex-col">
            <dt className="sr-only">Clients served</dt>
            <span className="text-sm text-muted-foreground">Clients</span>
            <AnimatedNumber
              value={clients}
              suffix="+"
              className="text-3xl font-semibold md:text-4xl"
            />
          </dd>

          <dd className="rounded-lg border bg-card p-4 md:p-6 flex flex-col">
            <dt className="sr-only">Certifications</dt>
            <span className="text-sm text-muted-foreground">Certifications</span>
            <AnimatedNumber
              value={certifications}
              className="text-3xl font-semibold md:text-4xl"
            />
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default ExperienceSection
