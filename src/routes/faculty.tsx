import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FACULTY, SCHOLARS, type FacultyMember } from "@/lib/domains";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Scholars — SSSIHL Centre of Excellence" },
      { name: "description", content: "Meet the women-led faculty and doctoral research scholars driving SSSIHL's Centre of Excellence in Food Processing & Preservation." },
      { property: "og:title", content: "Faculty & Scholars — SSSIHL CoE" },
      { property: "og:description", content: "Women-led food and nutrition research at SSSIHL." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const [open, setOpen] = useState(false);
  const [activeFaculty, setActiveFaculty] = useState<FacultyMember | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-10 size-72 rounded-full bg-pomegranate/15 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Academic Leadership</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            <span className="italic text-shimmer">Faculty</span> across departments.
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Explore the full faculty roster for the SSSIHL Centre of Excellence and click any member to view their profile, teaching, research and contact details.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FACULTY.map((faculty, i) => (
            <button
              key={faculty.name}
              type="button"
              onClick={() => {
                setActiveFaculty(faculty);
                setOpen(true);
              }}
              className="text-left bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up"
              style={{ animationDelay: `${i * 0.02}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`size-20 rounded-3xl bg-${faculty.color} grid place-items-center font-display italic text-3xl text-cream shrink-0 shadow-lg`}>
                  {faculty.name.split(" ").slice(-1)[0]?.[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl mb-2 leading-tight">{faculty.name}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-plum-deep/55 font-bold mb-3">{faculty.designation}</p>
                  <p className="text-sm text-plum-deep/75 leading-relaxed mb-4">{faculty.department}</p>
                  <p className="text-plum-deep/75 leading-relaxed">{faculty.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-pomegranate font-bold">
                    View profile →
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-plum-deep text-cream py-20 mt-16">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4">Doctoral Scholars</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">The <span className="italic">next generation.</span></h2>
              <p className="text-cream/70 mt-6 leading-relaxed">
                Several SSSIHL scholars have qualified UGC-NET (LS) in Home Science and contribute to national-level workshops and symposia.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SCHOLARS.map((s, i) => (
                <div key={s} className="p-5 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors flex items-center gap-4">
                  <span className="font-mono text-xs text-turmeric">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <Dialog open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) setActiveFaculty(null);
      }}>
        <DialogContent className="max-w-4xl">
          {activeFaculty ? (
            <div className="space-y-6">
              <DialogHeader className="text-left">
                <DialogTitle>{activeFaculty.name}</DialogTitle>
                <p className="text-sm text-plum-deep/70">{activeFaculty.designation} • {activeFaculty.department}</p>
              </DialogHeader>

              <div className="grid gap-4 md:grid-cols-2">
                {activeFaculty.qualifications ? (
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold mb-2">Qualifications</div>
                    <div className="text-sm text-plum-deep">{activeFaculty.qualifications}</div>
                  </div>
                ) : null}
                {activeFaculty.email || activeFaculty.telephone ? (
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold mb-2">Contact</div>
                    <div className="text-sm text-plum-deep space-y-1">
                      {activeFaculty.email ? <div>Email: <a href={`mailto:${activeFaculty.email}`} className="underline text-pomegranate">{activeFaculty.email}</a></div> : null}
                      {activeFaculty.telephone ? <div>Phone: {activeFaculty.telephone}</div> : null}
                    </div>
                  </div>
                ) : null}
              </div>

              {activeFaculty.profile ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Overview</div>
                  <p className="text-sm leading-relaxed text-plum-deep/80">{activeFaculty.profile}</p>
                </div>
              ) : null}

              {activeFaculty.teachingAreas?.length ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Areas of Teaching</div>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-plum-deep/80">
                    {activeFaculty.teachingAreas.map((item) => (
                      <li key={item} className="rounded-2xl bg-cream/10 p-3">{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeFaculty.researchInterests?.length ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Research Interests</div>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-plum-deep/80">
                    {activeFaculty.researchInterests.map((item) => (
                      <li key={item} className="rounded-2xl bg-cream/10 p-3">{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeFaculty.currentPhDSupervision?.length ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Current Ph.D. Supervision</div>
                  <ul className="list-disc list-inside text-sm text-plum-deep/80 space-y-1">
                    {activeFaculty.currentPhDSupervision.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeFaculty.currentResearchProjects?.length ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Current Research Projects</div>
                  <ul className="list-disc list-inside text-sm text-plum-deep/80 space-y-1">
                    {activeFaculty.currentResearchProjects.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeFaculty.professionalPages?.length ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-plum font-bold">Professional Pages</div>
                  <div className="flex flex-wrap gap-3">
                    {activeFaculty.professionalPages.map((page) => (
                      <a key={page.url} href={page.url} target="_blank" rel="noreferrer" className="text-sm text-pomegranate underline">
                        {page.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              <DialogDescription className="text-xs uppercase tracking-[0.3em] text-plum/60">Click outside the panel or press Esc to close.</DialogDescription>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
