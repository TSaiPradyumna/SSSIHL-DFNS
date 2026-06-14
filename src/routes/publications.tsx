import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PUBLICATION_SUMMARY, PUBLICATIONS } from "@/lib/publications";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — SSSIHL Centre of Excellence" },
      { name: "description", content: "DFNS research publications, UGC counts, book chapters and journal outputs from 2015 to present." },
      { property: "og:title", content: "DFNS Publications — SSSIHL CoE" },
      { property: "og:description", content: "Comprehensive DFNS publication record with journal papers, books and conference proceedings." },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const publicationsByYear = PUBLICATIONS.reduce<Record<string, typeof PUBLICATIONS>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));
  const totalSummary = PUBLICATION_SUMMARY.reduce(
    (sum, year) => ({
      ugcPapers: sum.ugcPapers + year.ugcPapers,
      nonUgcPapers: sum.nonUgcPapers + year.nonUgcPapers,
      totalPapers: sum.totalPapers + year.totalPapers,
      books: sum.books + year.books,
    }),
    { ugcPapers: 0, nonUgcPapers: 0, totalPapers: 0, books: 0 },
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-14">
        <div className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4">DFNS Publications</div>
          <h1 className="font-display text-5xl lg:text-6xl mb-6">Research outputs from 2015 to present.</h1>
          <p className="text-plum-deep/75 text-lg leading-relaxed">
            A complete record of DFNS journal papers, book chapters, books and conference proceedings. Each publication includes author names,
            outlet details, ISSN or DOI information, and links where available.
          </p>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-[32px] bg-card ring-1 ring-plum/10 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 text-center bg-plum text-cream text-xs uppercase tracking-[0.22em] font-bold py-4 px-6">
            <div>Year</div>
            <div>UGC papers</div>
            <div>Non-UGC papers</div>
            <div>Total papers</div>
            <div>Book chapters/Books</div>
          </div>
          {PUBLICATION_SUMMARY.map((row) => (
            <div key={row.year} className="grid grid-cols-2 lg:grid-cols-5 gap-0 text-sm text-plum-deep border-t border-plum/10 py-4 px-6">
              <div>{row.year}</div>
              <div>{row.ugcPapers}</div>
              <div>{row.nonUgcPapers}</div>
              <div>{row.totalPapers}</div>
              <div>{row.books}</div>
            </div>
          ))}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 text-sm font-semibold text-plum-deep border-t border-plum/10 bg-cream/60 py-4 px-6">
            <div>Total</div>
            <div>{totalSummary.ugcPapers}</div>
            <div>{totalSummary.nonUgcPapers}</div>
            <div>{totalSummary.totalPapers}</div>
            <div>{totalSummary.books}</div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Publication catalogue</div>
            <h2 className="font-display text-4xl">Full DFNS publication list</h2>
          </div>
          <Link to="/research" className="inline-flex items-center gap-2 rounded-full border border-plum/20 px-5 py-3 text-sm text-plum-deep hover:bg-plum/5 transition-all">
            View funded research page
          </Link>
        </div>

        <div className="space-y-14">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="font-display text-3xl">{year}</h3>
                <div className="rounded-full bg-sage-soft py-2 px-4 text-sm text-plum-deep ring-1 ring-plum/10">{publicationsByYear[year].length} entries</div>
              </div>
              <div className="grid gap-6">
                {publicationsByYear[year].map((pub) => (
                  <article key={pub.id} className="rounded-[32px] bg-card ring-1 ring-plum/10 p-8 hover:shadow-xl transition-all">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-pomegranate font-bold mb-2">{pub.type}</div>
                        <h4 className="font-display text-2xl leading-tight">{pub.title}</h4>
                      </div>
                      <div className="text-sm text-plum-deep/80 min-w-[220px]">
                        <div className="font-semibold">{pub.authors}</div>
                        <div className="mt-2">{pub.outlet}</div>
                        {pub.issn ? <div className="mt-1 text-xs text-plum-deep/60">ISSN: {pub.issn}</div> : null}
                      </div>
                    </div>
                    <div className="grid gap-3 text-sm text-plum-deep/75">
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noreferrer noopener" className="text-pomegranate underline break-words">
                          Open publication link
                        </a>
                      ) : null}
                      {pub.ugcInfo ? <div className="text-xs text-plum-deep/70">UGC detail: {pub.ugcInfo}</div> : null}
                      {pub.note ? <div className="text-xs text-plum-deep/70">{pub.note}</div> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-[32px] bg-plum-deep text-cream p-12 lg:p-16">
          <h2 className="font-display text-4xl mb-4">All DFNS publications are now structured and linked on the website.</h2>
          <p className="text-cream/80 leading-relaxed text-lg">
            This page includes the complete 2015–present publication record, including journal papers, book chapters, books and conference proceedings with direct links where available.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
