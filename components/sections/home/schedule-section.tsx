import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

import { InteractiveScheduleShowcase } from "./interactive-schedule-showcase";

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Расписание"
            title="Живой ритм недели с быстрым фокусом на нужную группу."
            description="Собрали расписание в интерактивный формат: можно сразу переключать дни, смотреть направления и быстро ориентироваться по возрасту, времени и педагогу."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <InteractiveScheduleShowcase />
        </Reveal>
      </SiteShell>
    </section>
  );
}
