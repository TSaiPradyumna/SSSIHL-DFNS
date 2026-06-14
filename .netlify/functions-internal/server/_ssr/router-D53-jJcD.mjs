import { r as __toESM } from "../_runtime.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as createFileRoute, d as useRouter, f as notFound, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D53-jJcD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-i1eaH7hs.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SSSIHL Centre of Excellence — Food Processing & Preservation" },
			{
				name: "description",
				content: "Translational research in food and nutritional sciences at Sri Sathya Sai Institute of Higher Learning — eight flagship domains, women-led innovation, startup incubation."
			},
			{
				name: "author",
				content: "SSSIHL Department of Food & Nutritional Sciences"
			},
			{
				property: "og:title",
				content: "SSSIHL Centre of Excellence — Food Processing & Preservation"
			},
			{
				property: "og:description",
				content: "Translational food science with a women-first mandate at SSSIHL."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@200..800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "Vision"
	},
	{
		to: "/domains",
		label: "Domains"
	},
	{
		to: "/research",
		label: "Research"
	},
	{
		to: "/publications",
		label: "Publications"
	},
	{
		to: "/faculty",
		label: "Faculty"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-plum/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-10 rounded-full bg-plum flex items-center justify-center text-cream font-display italic text-xl shadow-md group-hover:rotate-12 transition-transform",
						children: "S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold tracking-[0.18em] uppercase text-pomegranate",
							children: "SSSIHL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-plum-deep tracking-tight",
							children: "Centre of Excellence"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-7 text-sm font-medium",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeProps: { className: "text-pomegranate" },
						activeOptions: { exact: l.to === "/" },
						className: "text-plum-deep/80 hover:text-pomegranate transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-turmeric after:transition-all",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "hidden md:inline-flex px-4 py-2 bg-plum text-cream rounded-full text-sm font-medium hover:bg-pomegranate transition-colors shadow-md shadow-plum/20",
					children: "Partner with us"
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-32 bg-plum-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20 grid gap-12 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-12 rounded-full bg-turmeric grid place-items-center text-plum-deep font-display italic text-2xl",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold tracking-[0.2em] uppercase text-turmeric",
								children: "SSSIHL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-base font-semibold",
								children: "Centre of Excellence"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display italic text-2xl leading-snug mb-6 text-cream/90",
							children: "Food Processing & Preservation — translational research with a women-first mandate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "not-italic text-sm leading-relaxed text-cream/70",
							children: [
								"Department of Food & Nutritional Sciences",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Sri Sathya Sai Institute of Higher Learning",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Anantapur, Andhra Pradesh – 515001, India"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[10px] uppercase tracking-[0.22em] text-turmeric mb-5 font-bold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "Vision & Mission"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/domains",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "8 Flagship Domains"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/research",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "Funded Research"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faculty",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "Faculty & Scholars"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[10px] uppercase tracking-[0.22em] text-turmeric mb-5 font-bold",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "Partner with us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.sssihl.edu.in/departments/food-nutritional-sciences/",
							target: "_blank",
							rel: "noreferrer",
							className: "text-cream/80 hover:text-turmeric transition-colors",
							children: "Department site ↗"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/60",
							children: "FSSAI compliance support"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/60",
							children: "Startup incubation"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-cream/50",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" SSSIHL Centre of Excellence. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 font-mono uppercase tracking-[0.18em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-turmeric/80",
							children: "Scientific"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-pomegranate/80",
							children: "Spiritual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sage/80",
							children: "Social"
						})
					]
				})]
			})
		})]
	});
}
var Route$8 = createFileRoute("/research")({
	head: () => ({ meta: [
		{ title: "Funded Research — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "Funded research projects, publications and student achievements from SSSIHL's Department of Food & Nutritional Sciences."
		},
		{
			property: "og:title",
			content: "Funded Research — SSSIHL CoE"
		},
		{
			property: "og:description",
			content: "ICMR and UGC-DAE funded projects on Indian pigmented rice, micronutrients and translational nutrition."
		}
	] }),
	component: ResearchPage
});
var PROJECTS = [{
	color: "pomegranate",
	title: "Antidiabetic evaluation of Indian pigmented rice varieties",
	subtitle: "A mechanistic metabolomic based approach",
	funder: "Indian Council of Medical Research (ICMR)",
	amount: "₹24 Lakhs",
	period: "2019–2022",
	pi: "Dr. (Miss) N Srividya",
	body: "Pigmented rice varieties contain functional phenolic acids and anthocyanins with therapeutic potential. This project combines food metabolomics, in vitro enzyme assays and in vivo studies to investigate antidiabetic mechanisms.",
	deliverables: [
		"Mechanistic insight into antidiabetic action of pigmented rice",
		"Glycemic response profile of indigenous rice varieties",
		"Pigmented-rice based convenience foods for therapeutic use"
	],
	impact: "Rice consumption is projected to reach 570M tonnes by 2025. Gluten-free pigmented rice functional foods offer a lifestyle-disease intervention with cultural fit across Asia."
}, {
	color: "saffron",
	title: "XRF based profiling of essential minerals",
	subtitle: "In native and bio-processed pigmented rice",
	funder: "UGC-DAE-Consortium",
	amount: "₹45,000",
	period: "2019–2020",
	pi: "Dr. (Miss) N Srividya",
	body: "Using EDXRF to map essential minerals — Fe, Zn, Ca, Mg — in Indian pigmented rice, with focus on how soaking, germination and biofortification improve mineral bioavailability.",
	deliverables: [
		"Identification of mineral-dense pigmented rice varieties",
		"Effect of bio-processing on mineral retention & distribution",
		"Improved mineral bioavailability validated in vitro"
	],
	impact: "A cost-effective dietary intervention against 'hidden hunger' — micronutrient malnutrition that affects large, under-served populations without visible symptoms."
}];
function ResearchPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pt-16 pb-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute top-20 right-0 size-72 rounded-full bg-saffron/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl relative animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6",
							children: "Funded Research"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl lg:text-7xl leading-[0.95] mb-6",
							children: ["Knowledge that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-shimmer",
								children: "moves to market."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-plum-deep/70 leading-relaxed",
							children: "Faculty and doctoral scholars publish in esteemed peer-reviewed journals and lead nationally funded translational research with measurable social impact."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-12 space-y-8",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-card rounded-[32px] ring-1 ring-plum/10 overflow-hidden hover:shadow-2xl transition-all animate-fade-up",
					style: { animationDelay: `${i * .1}s` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `bg-${p.color} text-cream p-8 lg:p-12`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase tracking-[0.25em] font-bold mb-3 opacity-80",
								children: [
									p.funder,
									" • ",
									p.amount,
									" • ",
									p.period
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl lg:text-4xl leading-tight mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display italic text-xl opacity-90",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cream/15 backdrop-blur ring-1 ring-cream/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-turmeric" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-medium",
									children: ["Principal Investigator: ", p.pi]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 lg:p-12 grid lg:grid-cols-3 gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-plum-deep/80 leading-relaxed text-lg mb-8",
									children: p.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.22em] text-pomegranate font-bold mb-3",
									children: "Deliverables"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3",
									children: p.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-5 rounded-full bg-sage/20 ring-1 ring-sage grid place-items-center text-[10px] text-sage mt-0.5",
											children: "✓"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-plum-deep/80",
											children: d
										})]
									}, d))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-sage-soft p-6 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.22em] text-basil font-bold mb-3",
								children: "Social Relevance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-plum-deep/80 leading-relaxed",
								children: p.impact
							})]
						})]
					})]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[32px] bg-plum-deep text-cream p-10 lg:p-14 grid md:grid-cols-3 gap-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display italic text-5xl text-turmeric mb-2",
							children: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-cream/60",
							children: "Active Funded Grants"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display italic text-5xl text-saffron mb-2",
							children: "₹24.4L+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-cream/60",
							children: "External Research Funding"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display italic text-5xl text-sage mb-2",
							children: "UGC-NET"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-cream/60",
							children: "Multiple scholars qualified"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var PUBLICATION_SUMMARY = [
	{
		year: "2021",
		ugcPapers: 2,
		nonUgcPapers: 0,
		totalPapers: 2,
		books: 0
	},
	{
		year: "2020",
		ugcPapers: 3,
		nonUgcPapers: 7,
		totalPapers: 10,
		books: 0
	},
	{
		year: "2019",
		ugcPapers: 1,
		nonUgcPapers: 2,
		totalPapers: 3,
		books: 3
	},
	{
		year: "2018",
		ugcPapers: 3,
		nonUgcPapers: 4,
		totalPapers: 7,
		books: 0
	},
	{
		year: "2017",
		ugcPapers: 1,
		nonUgcPapers: 4,
		totalPapers: 5,
		books: 1
	},
	{
		year: "2016",
		ugcPapers: 1,
		nonUgcPapers: 6,
		totalPapers: 7,
		books: 6
	},
	{
		year: "2015",
		ugcPapers: 0,
		nonUgcPapers: 2,
		totalPapers: 2,
		books: 1
	}
];
var PUBLICATIONS = [
	{
		id: "2015-01",
		year: "2015",
		type: "Journal Paper",
		title: "Phytoceuticals in aniseeds: A practical approach for isolation and identification",
		authors: "Shobha RI and Andallu B",
		outlet: "International Journal of Bioassays",
		issn: "2278-778X",
		link: "https://www.google.com/search?q=Phytoceuticals+in+aniseeds+International+Journal+of+Bioassays",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2015-02",
		year: "2015",
		type: "Journal Paper",
		title: "Phytoconstituents and antimicrobial activity of aniseeds (Pimpinella anisum L.)",
		authors: "Shobha RI and Andallu B",
		outlet: "Ewemen Journal of Microbial Research",
		issn: "2488-9148",
		link: "https://www.google.com/search?q=Phytoconstituents+and+antimicrobial+activity+of+aniseeds+Ewemen+Journal+of+Microbial+Research",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2016-01",
		year: "2016",
		type: "Journal Paper",
		title: "Postharvest quality and shelf life of fresh-cut fenugreek (Trigonella foenum-graecum L.) leaves: Impact of packaging and Aloe vera gel coating",
		authors: "N. Srividya and Manjula D. Ghoora",
		outlet: "International Journal of Nutrition and Agriculture Research",
		issn: "2393-9540",
		link: "https://www.google.com/search?q=Postharvest+quality+and+shelf+life+of+fresh-cut+fenugreek+leaves",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2016-02",
		year: "2016",
		type: "Journal Paper",
		title: "Effect of inulin, fructooligosaccharides and L. acidophilus in formulating a synbiotic yogurt",
		authors: "K. Sudha Rani and N. Srividya",
		outlet: "Asian Journal of Dairy and Food Research",
		issn: "0971-4456",
		link: "https://www.google.com/search?q=Effect+of+inulin+fructooligosaccharides+and+L.+acidophilus+in+formulating+a+synbiotic+yogurt",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2016-03",
		year: "2016",
		type: "Journal Paper",
		title: "Nutritional Status of adolescents from Anantapur in South India",
		authors: "Meera M and V. Sreedevi",
		outlet: "International Journal of Nutrition and Agriculture Research",
		issn: "2393-9540",
		link: "https://www.google.com/search?q=Nutritional+Status+of+adolescents+from+Anantapur+in+South+India",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2016-04",
		year: "2016",
		type: "Journal Paper",
		title: "Nutritional status assessment and evaluation of educational effectiveness of nutritional games approach in adolescents",
		authors: "M. Meera, R. K. Anuradha and V. Sreedevi",
		outlet: "International Journal of Medicine and Health Profession Research",
		issn: "2394-7403",
		link: "https://www.google.com/search?q=Nutritional+status+assessment+and+evaluation+of+educational+effectiveness+of+nutritional+games+approach",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2016-05",
		year: "2016",
		type: "Journal Paper",
		title: "Efficacy of nutritional games to improve learning of nutritional knowledge in adolescents",
		authors: "M. Meera, R. K. Anuradha and V. Sreedevi",
		outlet: "International Journal of Nutrition and Agriculture Research",
		issn: "2393-9540",
		link: "https://www.google.com/search?q=Efficacy+of+nutritional+games+to+improve+learning+of+nutritional+knowledge+in+adolescents",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2016-06",
		year: "2016",
		type: "Journal Paper",
		title: "Evaluation of green solvents for a sustainable zein extraction from ethanol industry DDGS",
		authors: "J Gupta, BW Wilson, PV Vadlani",
		outlet: "Biomass and Bioenergy",
		issn: "0961-9534",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No. 2996 and Journal No. 14753"
	},
	{
		id: "2017-01",
		year: "2017",
		type: "Journal Paper",
		title: "Storage effects on phytochemicals, antioxidant activity and sensory quality of fenugreek (Trigonella foenum-graecum L.) microgreens and mature leaves",
		authors: "Manjula D. Ghoora and N. Srividya",
		outlet: "International Journal of Food and Nutritional Sciences",
		issn: "2167-0434",
		link: "https://www.google.com/search?q=Storage+effects+on+phytochemicals+antioxidant+activity+and+sensory+quality+of+fenugreek+microgreens",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2017-02",
		year: "2017",
		type: "Journal Paper",
		title: "Impact of gamma irradiation and osmotic dehydration on quality characteristics of guava (Psidium guajava) slices",
		authors: "Srijaya M and Shanthipriya",
		outlet: "Asian Journal of Dairy & Food Research",
		issn: "0971-4456",
		link: "https://www.google.com/search?q=Impact+of+gamma+irradiation+and+osmotic+dehydration+on+quality+characteristics+of+guava+slices",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2017-03",
		year: "2017",
		type: "Journal Paper",
		title: "To study the efficacy of modified hearth approach for adolescents",
		authors: "M. Meera, R. K. Anuradha and V. Sreedevi",
		outlet: "International Journal of Medicine and Health Profession Research",
		issn: "2394-7403",
		link: "https://www.google.com/search?q=To+study+the+efficacy+of+modified+hearth+approach+for+adolescents",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2017-04",
		year: "2017",
		type: "Journal Paper",
		title: "Formulation and quality evaluation of agathi (Sesbania grandiflora (L.) Poir) leaves enriched pizza base a healthier substitute for the regular pizza base",
		authors: "A Sumana and M Aruna",
		outlet: "International Journal of Home Science",
		issn: "2395-7476",
		link: "https://www.google.com/search?q=Formulation+and+quality+evaluation+of+agathi+leaves+enriched+pizza+base",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2017-05",
		year: "2017",
		type: "Journal Paper",
		title: "Functional quality, sensorial and shelf life characteristics of Agathi (Sesbania grandiflora (L). Poir leaves enriched breads",
		authors: "A Sumana and M Aruna",
		outlet: "Functional Foods in Health and Disease",
		issn: "2160-3855",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No. 8058 and Journal No. 45053"
	},
	{
		id: "2017-06",
		year: "2017",
		type: "Book Chapter",
		title: "Risk Analysis in Food Safety - An Overview",
		authors: "A. Sumana and Barbhai Mrunal D.",
		outlet: "Food Safety and Standards: Laws, Tools and Management Systems",
		note: "NIPA Genx Electronic Resources & Solutions P.Ltd, ISBN: 9789394490260"
	},
	{
		id: "2018-01",
		year: "2018",
		type: "Journal Paper",
		title: "Development of functional sapodilla flakes with neutraceutical and health regulatory components and their quality characteristics during storage",
		authors: "Dhanya K and Srijaya M.",
		outlet: "International Journal of Food and Nutritional Sciences",
		issn: "2319-1775",
		link: "https://www.google.com/search?q=Development+of+functional+sapodilla+flakes+with+neutraceutical+and+health+regulatory+components",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2018-02",
		year: "2018",
		type: "Journal Paper",
		title: "Recent developments in osmotic dehydration technique for improving the post-harvest quality of fruits and vegetables",
		authors: "Keerthana HK and Srijaya M",
		outlet: "Research Journal of Pharmaceutical, Biological and Chemical Sciences",
		issn: "2572-2999",
		link: "https://www.google.com/search?q=Recent+developments+in+osmotic+dehydration+technique",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2018-03",
		year: "2018",
		type: "Journal Paper",
		title: "Health enhancing properties of an edible flower Sesbania grandiflora (L.) poir (agathi) based processed product",
		authors: "A Sumana, E Sreedevi, M Aruna",
		outlet: "Indian Research Journal of Pharmacy and Science",
		issn: "2349-5332",
		link: "https://www.google.com/search?q=Health+enhancing+properties+of+an+edible+flower+Sesbania+grandiflora+based+processed+product",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2018-04",
		year: "2018",
		type: "Journal Paper",
		title: "Consumer belief and attitude towards dark chocolates among Indian customers",
		authors: "Gayathri. S and Sumana A",
		outlet: "International Journal of Nutrition and Agricultural Research",
		issn: "2393-9540",
		link: "https://www.google.com/search?q=Consumer+belief+and+attitude+towards+dark+chocolates+among+Indian+customers",
		note: "Not listed in UGC CARE lists"
	},
	{
		id: "2018-05",
		year: "2018",
		type: "Journal Paper",
		title: "Extraction, characterisation and utilisation of passion fruit peel pectin.",
		authors: "N.Saiharini and A.Padmaja",
		outlet: "Asia Journal of Multidimensional Research",
		issn: "2278-4853",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "Approved Journal No. 47638 in UGC CARE list; discontinued from the list from Feb 2020"
	},
	{
		id: "2018-06",
		year: "2018",
		type: "Journal Paper",
		title: "Effectiveness of different myoglobin states to minimize high pressure induced discoloration in raw ground beef",
		authors: "J Gupta, CG Bower, GA Cavender, GA Sullivan",
		outlet: "LWT-Food Science and Technology",
		issn: "0023-6438",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No.16952 and Journal No. 5648"
	},
	{
		id: "2018-07",
		year: "2018",
		type: "Journal Paper",
		title: "Effect of differing ingredients and packaging technologies on the color of high pressure processed ground beef",
		authors: "J Gupta, CG Bower, GA Sullivan, GA Cavender",
		outlet: "Journal of Food Quality",
		issn: "0146-9428",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No.13770 and Journal No. 7618"
	},
	{
		id: "2019-01",
		year: "2019",
		type: "Journal Paper",
		title: "Micro farming of greens: A viable enterprise for enhancing economic, food and nutritional security of farmers",
		authors: "Manjula D. Ghoora and N. Srividya",
		outlet: "International Journal of Nutrition and Agriculture Research",
		issn: "2393-9540",
		link: "https://www.google.com/search?q=Micro+farming+of+greens+a+viable+enterprise",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2019-02",
		year: "2019",
		type: "Journal Paper",
		title: "Innovative zein extraction from distillers' grains with solubles: Process development and product characterization studies",
		authors: "J Gupta, PV Vadlani, CS Lau, RL Madl, YC Shi",
		outlet: "Environmental Progress and Sustainable Energy",
		issn: "1944-7450",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No. 6886 and Journal No. 19822"
	},
	{
		id: "2020-01",
		year: "2020",
		type: "Journal Paper",
		title: "In vitro glycemic response of indigenous pigmented rice cultivars from South India and influence of different carbohydrate components",
		authors: "Ashrita C. Haldipur and N. Srividya",
		outlet: "Current Research in Nutrition and Food Science",
		issn: "2347-467X",
		link: "https://mjl.clarivate.com/search-results?issn=2347-467X&hide_exact_match_fl=true&utm_source=mjl&utm_medium=share-by-link&utm_campaign=search-results-share-this-journal"
	},
	{
		id: "2020-02",
		year: "2020",
		type: "Journal Paper",
		title: "Effect of packaging and coating technique on postharvest quality and shelf life of Raphanus sativus and Hibiscus sabdariffa L. microgreens",
		authors: "Manjula D. Ghoora & N. Srividya",
		outlet: "Foods",
		issn: "2304-8158",
		link: "https://mjl.clarivate.com/search-results",
		note: "Web of Science link via UGC CARE list portal"
	},
	{
		id: "2020-03",
		year: "2020",
		type: "Journal Paper",
		title: "Nutrient composition, oxalate content and nutritional ranking of ten culinary microgreens",
		authors: "Manjula D. Ghoora, D. R. Babu, N. Srividya",
		outlet: "Journal of Food Composition and Analysis",
		issn: "0889-1575",
		link: "https://aulibrary.avinuty.ac.in/pdf/UGC_List_of_Journals.pdf",
		ugcInfo: "UGC Serial No. 13763 and Journal No. 7609"
	},
	{
		id: "2020-04",
		year: "2020",
		type: "Journal Paper",
		title: "Comparative evaluation of phytochemical content, antioxidant capacities and overall antioxidant potential of select culinary microgreens",
		authors: "Manjula D. Ghoora, Ashrita. C. Haldipur, & N. Srividya",
		outlet: "Journal of Agriculture and Food Research",
		issn: "2666-1543",
		note: "Not listed in UGC CARE list"
	},
	{
		id: "2021-01",
		year: "2021",
		type: "Journal Paper",
		title: "Indian red rice phenolic metabolites as potential natural inhibitors of SARS-CoV-2 main protease: A metabolomic and in silico study",
		authors: "Shrijana Rasaily, Ashrita C. Haldipur and N. Srividya",
		outlet: "Annals of Phytomedicine",
		issn: "2393-9885",
		link: "http://dx.doi.org/10.21276/ap.2021.10.1"
	},
	{
		id: "2021-02",
		year: "2021",
		type: "Journal Paper",
		title: "A comparative evaluation of in vitro antihyperglycemic potential of Bamboo seed rice (Bambusa arundinacea) and Garudan samba (Oryza sativa): An integrated metabolomics, enzymatic and molecular docking approach",
		authors: "Ashrita C. Haldipur and N. Srividya",
		outlet: "Journal of Cereal Science",
		issn: "0733-5210",
		link: "https://www.sciencedirect.com/science/article/abs/pii/S0733521021000412"
	},
	{
		id: "2021-03",
		year: "2021",
		type: "Journal Paper",
		title: "Multi-mechanistic in vitro evaluation of antihyperglycemic, antioxidant and antiglycation activities of three phenolic-rich Indian red rice genotypes and in silico evaluation of their phenolic metabolites",
		authors: "Ashrita C. Haldipur & N. Srividya",
		outlet: "Foods",
		issn: "2311-5637",
		link: "http://dx.doi.org/10.3390/foods10112818"
	},
	{
		id: "2022-01",
		year: "2022",
		type: "Journal Paper",
		title: "Studies on nutrient and phytochemical composition and assessment of in vitro antioxidant and enzyme inhibitory properties of watermelon fruit by-products",
		authors: "N. Saiharini and A. Padmaja",
		outlet: "Annals of Phytomedicine",
		issn: "2393-9885",
		link: "http://dx.doi.org/10.54085/ap.2022.11.1.48"
	},
	{
		id: "2022-02",
		year: "2022",
		type: "Book Chapter",
		title: "Risk analysis in food safety- An overview",
		authors: "Sumana A. & Barbhai Mrunal D.",
		outlet: "Food Safety And Standards: Laws, Tools And Management Systems",
		note: "Nipa Genx Electronic Resources & Solutions P.Ltd, ISBN: 9789394490260"
	},
	{
		id: "2023-01",
		year: "2023",
		type: "Journal Paper",
		title: "Plant foods and their phytochemicals as DPP IV and PTP 1B inhibitors for blood glucose regulation: A review",
		authors: "N. Srividya, Ashrita C. Haldipur and Carani B. Sanjeevi",
		outlet: "Journal of Indian Institute of Science, Special issue",
		link: "https://doi.org/10.1007/s41745-023-00371-y"
	},
	{
		id: "2023-02",
		year: "2023",
		type: "Journal Paper",
		title: "Impact of COVID-19 pandemic lockdown on post-harvest management of fruits and vegetables in three districts of Andhra Pradesh",
		authors: "Sravani G., Sai Supriya, Lazima R., Alisha P., Srijaya M.",
		outlet: "Journal of Postharvest Technology",
		link: "http://jpht.in/MenuscriptFile/5012a8a0-1be8-4ac4-8f0f-169a0e7473ab.pdf"
	},
	{
		id: "2023-03",
		year: "2023",
		type: "Journal Paper",
		title: "Extraction And Characterization Of Pectin From Watermelon By-Products",
		authors: "N. Saiharini and A. Padmaja",
		outlet: "International Journal of Food and Nutritional Sciences",
		issn: "2320-7876",
		link: "https://doi.org/10.48047/IJFANS/V11/I7/52"
	},
	{
		id: "2023-04",
		year: "2023",
		type: "Journal Paper",
		title: "Food quality during Covid-19 pandemic in south India: Consumer survey and DART (Detect Adulteration with Rapid Test) Analyses",
		authors: "Katta Sanvika, Bollu Sai Sruthi and Jhinuk Gupta",
		outlet: "International Journal of Food and Nutritional Sciences",
		link: "https://doi.org/10.18805/jcdr.2022.23/11/2022"
	},
	{
		id: "2023-05",
		year: "2023",
		type: "Book",
		title: "Antioxidant potential of ajwain (Trachyspermum ammi L.) seeds and oil",
		authors: "Ashrita CH & Andallu B",
		outlet: "LAP LAMBERT Academic Publishing GmbH & Co. KG Germany",
		note: "ISBN: 978-620-5-49583-4"
	},
	{
		id: "2023-06",
		year: "2023",
		type: "Book",
		title: "Evaluation of Trachyspermum ammi L. for medicinal properties",
		authors: "Mekha MS & Andallu B",
		outlet: "LAP LAMBERT Academic Publishing GmbH & Co. KG Germany"
	},
	{
		id: "2023-07",
		year: "2023",
		type: "Book Chapter",
		title: "Dietary interventions to combat obesity in metabolic syndrome - Role of time restricted eating",
		authors: "N. Srividya, Ashrita C. Haldipur and Carani B. Sanjeevi",
		outlet: "Metabolic Syndrome",
		note: "In: Satinath Mukhopadhyay & Sunetra Mondal (Eds.), Elsevier, USA (In press)"
	},
	{
		id: "2023-08",
		year: "2023",
		type: "Book Chapter",
		title: "Risk Analysis in Food Safety - An Overview",
		authors: "A. Sumana and Barbhai Mrunal D.",
		outlet: "Food Safety and Standards: Laws, Tools and Management Systems",
		note: "In: New India Publishing Agency - NIPA, India"
	},
	{
		id: "2024-01",
		year: "2024",
		type: "Book",
		title: "Evaluation of Trachyspermum ammi L. for medicinal properties",
		authors: "Mekha M. S. & Andallu B.",
		outlet: "LAP LAMBERT Academic Publishing GmbH & Co. KG Germany",
		note: "ISBN-13: 9786206150367"
	},
	{
		id: "2024-02",
		year: "2024",
		type: "Book Chapter",
		title: "Lifestyle modifications and nutritional modulation of the immune system for prevention and management of diabetes mellitus: Current perspectives",
		authors: "Srividya N., Haldipur A. C., & Yerra H.",
		outlet: "Biochemical Immunology of Diabetes and Associated Complications",
		note: "Academic Press, ISBN:978-0-443-13195-0",
		link: "https://doi.org/10.1016/C2022-0-02117-6"
	},
	{
		id: "2024-03",
		year: "2024",
		type: "Book Chapter",
		title: "Dietary interventions to combat obesity in metabolic syndrome - Role of time restricted eating",
		authors: "Srividya N., Haldipur A. C., & Sanjeevi C. B.",
		outlet: "Metabolic Syndrome",
		note: "Academic Press, ISBN:978-0-323-85732-1",
		link: "https://doi.org/10.1016/C2020-0-02822-7"
	},
	{
		id: "2024-04",
		year: "2024",
		type: "Book Chapter",
		title: "Novel Technologies for Shelf-Life Extension of Food Products as a Competitive Advantage: A Review",
		authors: "Lohita B. and Srijaya M.",
		outlet: "Food Production, Diversity, and Safety Under Climate Change",
		note: "Springer, Cham. ISBN: 978-3-031-51646-7",
		link: "https://doi.org/10.1007/978-3-031-51647-4_24"
	},
	{
		id: "2024-05",
		year: "2024",
		type: "Book Chapter",
		title: "Fresh Fruits and Vegetables Quality and Safety: A Deep Insight on the Benefits of an Organic Farming Approach",
		authors: "Pradhan A. and Srijaya M.",
		outlet: "Food Production, Diversity, and Safety Under Climate Change",
		note: "Springer, Cham. ISBN: 978-3-031-51646-7",
		link: "https://doi.org/10.1007/978-3-031-51647-4_11"
	},
	{
		id: "2024-06",
		year: "2024",
		type: "Journal Paper",
		title: "Impact of onion-based interventions on biomarkers of diabetes and its complications in diabetic rats - A systematic review",
		authors: "Pandey M., Pathri M., Labani S. & N. Srividya",
		outlet: "Diabetes Research and Clinical Practice",
		link: "https://doi.org/10.1016/j.diabres.2024.111512"
	},
	{
		id: "2024-07",
		year: "2024",
		type: "Journal Paper",
		title: "Extraction, Estimation And Utilization Of Curry Leaf (Murraya Koenigii) Stalks As A Potential Source Of Antioxidants",
		authors: "Padmaja A.",
		outlet: "Asian Journal of Dairy and Food Research",
		link: "https://arccjournals.com/journal/asian-journal-of-dairy-and-food-research/DR-2111",
		note: "DOI: 10.18805/ajdfr.DR-2111"
	},
	{
		id: "2024-08",
		year: "2024",
		type: "Journal Paper",
		title: "Evaluation of chemical composition, antioxidant and anti-inflammatory potential of herbs enriched plant-based protein mix for women athletes",
		authors: "Tapasya Anand and Sparsh Sumnirom Subba",
		outlet: "Journal of Sports Science and Nutrition",
		link: "https://doi.org/10.33545/27077012.2024.v5.i2a.261"
	},
	{
		id: "2024-09",
		year: "2024",
		type: "Journal Paper",
		title: "Significance of Food Security and Safety behind India’s Sustainable Urban Development",
		authors: "Gupta J.",
		outlet: "International Journal of Nutritions",
		link: "https://journals.stmjournals.com/ijn/article=2024/view=135498/"
	},
	{
		id: "2024-10",
		year: "2024",
		type: "Journal Paper",
		title: "Investigation of Hazardous Food Additives in Indian Packaged Pickles through Chemical and Spectrophotometric Analyses",
		authors: "Vandana M., Rai N., Mounika S. & Gupta J.",
		outlet: "Journal of Chemical Health Risks",
		link: "https://jchr.org/index.php/JCHR/article/view/1133"
	},
	{
		id: "2024-11",
		year: "2024",
		type: "Journal Paper",
		title: "Effect of popping and milling on physical, chemical, structural, thermal properties and angle of repose of amaranth seed (Amaranthus cruentus L.) and finger millet (Eleusine coracana L. Gaertn) from Udhagamandalam",
		authors: "Sai Dharshini S. & Meera M.",
		outlet: "Applied Food Research",
		link: "https://doi.org/10.1016/j.afres.2023.100306"
	},
	{
		id: "2024-12",
		year: "2024",
		type: "Journal Paper",
		title: "Millet bars-healthier alternative to cereal bars: A review",
		authors: "Sai Dharshini S. & Meera M.",
		outlet: "Agricultural Reviews",
		link: "http://dx.doi.org/10.18805/ag.R-2229"
	},
	{
		id: "2024-13",
		year: "2024",
		type: "Journal Paper",
		title: "Glycemic response to high amylose, fibre-rich red rice meals and in vitro antihyperglycemic properties of prebiotic enriched fermented red rice beverage",
		authors: "Srividya N. & Haldipur A.C.",
		outlet: "Clinical Nutrition ESPEN",
		link: "https://doi.org/10.1016/j.clnesp.2024.07.692"
	},
	{
		id: "2024-14",
		year: "2024",
		type: "Journal Paper",
		title: "Dietary mineral contribution and mineral quality rating of ten culinary microgreens grown in cocopeat vs. compost-enriched soil",
		authors: "Srividya N. & Ghoora M.D.",
		outlet: "Clinical Nutrition ESPEN",
		link: "https://doi.org/10.1016/j.clnesp.2024.07.212"
	},
	{
		id: "2024-15",
		year: "2024",
		type: "Journal Paper",
		title: "Mislabeling in Indian Branded Health Foods: Case Study with Immunity Booster Food and Protein Supplement",
		authors: "Jhinuk Gupta, Shreya P Sarathy, Tharani Lakshmi Tharuni, Amrita Shaw",
		outlet: "International Journal of Nutritions",
		link: "https://journals.stmjournals.com/ijn/article=2024/view=181880/"
	},
	{
		id: "2024-16",
		year: "2024",
		type: "Journal Paper",
		title: "Revolutionizing nutrition: Exploring the transformative impact of amaranth integration on composite millet flakes",
		authors: "Dharshini S. S., Sudha M. L., & Meera M.",
		outlet: "Food and Humanity",
		link: "https://doi.org/10.1016/j.foohum.2024.100421"
	},
	{
		id: "2024-17",
		year: "2024",
		type: "Journal Paper",
		title: "Assessment of postharvest quality attributes and storability of sweet lime (Citrus limonia) var. Rangpur: a comparative investigation of conventional and indigenous organic cultivation in Andhra Pradesh, India",
		authors: "Pradhan A., Srijaya M.",
		outlet: "Organic Agriculture",
		link: "https://doi.org/10.1007/s13165-024-00475-4"
	},
	{
		id: "2024-18",
		year: "2024",
		type: "Journal Paper",
		title: "Chemical Composition, Anti-oxidant and Anti-diabetic Potential of Unexplored Ethnic Wild Edible Mushrooms of the Darjeeling Himalayan Hill Region, North West Bengal, India",
		authors: "Tapasya Anand, Gracy Rai and Shrijana R.",
		outlet: "International Journal of Research and Analytical Reviews",
		issn: "2348-1269",
		link: "http://doi.one/10.1729/Journal.40578"
	},
	{
		id: "2024-19",
		year: "2024",
		type: "Journal Paper",
		title: "Inhibition of proliferation of human osteosarcoma cell line (MG63) by ajwain (Trachyspermum ammi L.) plant extract",
		authors: "Anusha B, Darshan VMD and Andallu B.",
		outlet: "Current Botany",
		link: "https://doi.org/10.25081/cb.2024.v15.8673"
	},
	{
		id: "2024-20",
		year: "2024",
		type: "Journal Paper",
		title: "Distribution of unexplored ethnic wild edible mushrooms of the Darjeeling Himalayan hill region, North West Bengal, India",
		authors: "Tapasya Anand, Ms. Gracy Rai, Ms. Shrijana R.",
		outlet: "International Journal of Current Science",
		issn: "2250-1770",
		link: "https://rjpn.org/ijcspub/papers/IJCSP24C1023.pdf"
	},
	{
		id: "2024-21",
		year: "2024",
		type: "Journal Paper",
		title: "Nutrition care process: Continuity of care",
		authors: "Verma S. & Sumana A.",
		outlet: "International Journal of Research and Analytical Reviews",
		link: "https://www.ijrar.org"
	},
	{
		id: "2025-01",
		year: "2025",
		type: "Journal Paper",
		title: "LC-Q-TOF-MS phenolic profiling, data mining for antiviral compounds, and in-silico analysis against SARS-CoV-2 in heritage-pigmented rice metabolomes",
		authors: "Shrijana Rasaily, Ashrita CH, and N. Srividya",
		outlet: "Food Bioscience",
		link: "https://doi.org/10.1016/j.fbio.2024.105613"
	},
	{
		id: "2025-02",
		year: "2025",
		type: "Journal Paper",
		title: "Nutritional support for managing diabetic chronic leg ulcers in South India – A case report",
		authors: "Verma S. & Sumana A.",
		outlet: "International Journal of Nutrition and Dietetics",
		link: "https://doi.org/10.17654/2347527725001"
	},
	{
		id: "2025-03",
		year: "2025",
		type: "Journal Paper",
		title: "Extraction and Characterization of Dietary Fiber, Starch and Cellulose Microfibers from Field Bean and Cowpea Pods",
		authors: "Maddi Harika Sai, Thokada Rohini Kumari, Umapathi Naga Vinitha, Nimisha P and A. Padmaja",
		outlet: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
		link: "https://ijsrem.com/volume09issue02february2025/",
		note: "DOI: 10.55041/IJSREM41720"
	},
	{
		id: "2025-04",
		year: "2025",
		type: "Journal Paper",
		title: "Knowledge, attitudes, and practices regarding iron deficiency anemia and probiotics among adolescent girls in Anantapur, India: A QIDAP-guided cross-sectional study",
		authors: "Sparsh Sumnirom Subba and Sumana Araveti",
		outlet: "Food and Humanity",
		link: "https://doi.org/10.1016/j.foohum.2025.100551"
	},
	{
		id: "2025-05",
		year: "2025",
		type: "Journal Paper",
		title: "Formulation and evaluation of functional foods for management of Metabolic dysfunction Associated Steatotic Liver Disease (MASLD)",
		authors: "K. Sai Lavanya, Sparsh Sumnirom Subba and Araveti Sumana",
		outlet: "International Journal of Nutrition and Dietetics",
		note: "PPH-3030-25059-IJND"
	},
	{
		id: "2025-06",
		year: "2025",
		type: "Journal Paper",
		title: "Optimized traditional breakfast recipes for MASLD: development and sensory evaluation",
		authors: "Annapoorna Sai Sathya V., Sparsh Sumnirom Subba and Araveti Sumana",
		outlet: "International Journal of Nutrition and Dietetics",
		note: "PPH-3029-25058-IJND"
	},
	{
		id: "2025-07",
		year: "2025",
		type: "Journal Paper",
		title: "A qualitative assessment of the impact of COVID-19 on the consumption, safety, and purchasing attributes of fruits and vegetables",
		authors: "Pradhan A., Srijaya M., Hegde M., Shaw A., Sreehitha D.",
		outlet: "Journal of Postharvest Technology",
		link: "https://doi.org/10.1016/j.foohum.2024.100421"
	},
	{
		id: "2025-08",
		year: "2025",
		type: "Journal Paper",
		title: "Glycemic response to high amylose, fibre-rich red rice meals and in vitro antihyperglycemic properties of prebiotic enriched fermented red rice beverage",
		authors: "Srividya N. & Haldipur A.C.",
		outlet: "Clinical Nutrition ESPEN",
		link: "https://doi.org/10.1016/j.clnesp.2024.07.692"
	},
	{
		id: "2025-09",
		year: "2025",
		type: "Journal Paper",
		title: "Dietary mineral contribution and mineral quality rating of ten culinary microgreens grown in cocopeat vs. compost-enriched soil",
		authors: "Srividya N. & Ghoora M.D.",
		outlet: "Clinical Nutrition ESPEN",
		link: "https://doi.org/10.1016/j.clnesp.2024.07.212"
	},
	{
		id: "2025-10",
		year: "2025",
		type: "Journal Paper",
		title: "Mislabeling in Indian Branded Health Foods: Case Study with Immunity Booster Food and Protein Supplement",
		authors: "Jhinuk Gupta, Shreya P Sarathy, Tharani Lakshmi Tharuni, Amrita Shaw",
		outlet: "International Journal of Nutritions",
		link: "https://journals.stmjournals.com/ijn/article=2024/view=181880/"
	},
	{
		id: "2025-11",
		year: "2025",
		type: "Journal Paper",
		title: "Revolutionizing nutrition: Exploring the transformative impact of amaranth integration on composite millet flakes",
		authors: "Dharshini S. S., Sudha M. L., & Meera M.",
		outlet: "Food and Humanity",
		link: "https://doi.org/10.1016/j.foohum.2024.100421"
	},
	{
		id: "2025-12",
		year: "2025",
		type: "Journal Paper",
		title: "Assessment of postharvest quality attributes and storability of sweet lime (Citrus limonia) var. Rangpur: a comparative investigation of conventional and indigenous organic cultivation in Andhra Pradesh, India",
		authors: "Pradhan A. and Srijaya M.",
		outlet: "Journal of Postharvest Technology",
		link: "https://doi.org/10.1007/s13165-024-00475-4"
	},
	{
		id: "2025-13",
		year: "2025",
		type: "Book",
		title: "Efficacy of coriander (Coriandrum sativum L.) seeds in combating oxidative stress in arthritis patients",
		authors: "Swetha Rani & Andallu B.",
		outlet: "LAP LAMBERT Academic Publishing GmbH & Co. KG Germany",
		note: "ISBN 978-620-6-15406-8",
		link: "https://www.exlibris.ch/de/buecher-buch/english-books/sweata-rani-rai/efficacy-of-coriander-seeds-in-combating-oxidative-stress-in-art/id/9786206154068/"
	},
	{
		id: "2025-14",
		year: "2025",
		type: "Conference Proceedings",
		title: "A systematic approach to investigate labeling accuracy of commercially available Indian baby foods",
		authors: "Rishika Aravapally, Amrita Shaw, Bezawada Sree Sesha Sravanika, Jhinuk Gupta",
		outlet: "BIO Web of Conferences 178, 03009",
		issn: "2117-4458",
		link: "https://doi.org/10.1051/bioconf/202517803009"
	},
	{
		id: "2025-15",
		year: "2025",
		type: "Conference Proceedings",
		title: "Formulation & evaluation of plant-based RTU protein mix for athletes",
		authors: "Poojitha Gali, Pradeepthi Marri and Tapasya Anand",
		outlet: "BIO Web of Conferences 178, 02003",
		issn: "2117-4458",
		link: "https://doi.org/10.1051/bioconf/202517802003"
	}
];
var Route$7 = createFileRoute("/publications")({
	head: () => ({ meta: [
		{ title: "Publications — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "DFNS research publications, UGC counts, book chapters and journal outputs from 2015 to present."
		},
		{
			property: "og:title",
			content: "DFNS Publications — SSSIHL CoE"
		},
		{
			property: "og:description",
			content: "Comprehensive DFNS publication record with journal papers, books and conference proceedings."
		}
	] }),
	component: PublicationsPage
});
function PublicationsPage() {
	const publicationsByYear = PUBLICATIONS.reduce((acc, pub) => {
		if (!acc[pub.year]) acc[pub.year] = [];
		acc[pub.year].push(pub);
		return acc;
	}, {});
	const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));
	const totalSummary = PUBLICATION_SUMMARY.reduce((sum, year) => ({
		ugcPapers: sum.ugcPapers + year.ugcPapers,
		nonUgcPapers: sum.nonUgcPapers + year.nonUgcPapers,
		totalPapers: sum.totalPapers + year.totalPapers,
		books: sum.books + year.books
	}), {
		ugcPapers: 0,
		nonUgcPapers: 0,
		totalPapers: 0,
		books: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pt-16 pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4",
							children: "DFNS Publications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl lg:text-6xl mb-6",
							children: "Research outputs from 2015 to present."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/75 text-lg leading-relaxed",
							children: "A complete record of DFNS journal papers, book chapters, books and conference proceedings. Each publication includes author names, outlet details, ISSN or DOI information, and links where available."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl bg-card ring-1 ring-plum/10 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 lg:grid-cols-5 gap-0 text-center bg-plum text-cream text-xs uppercase tracking-[0.22em] font-bold py-4 px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Year" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "UGC papers" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Non-UGC papers" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Total papers" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Book chapters/Books" })
							]
						}),
						PUBLICATION_SUMMARY.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 lg:grid-cols-5 gap-0 text-sm text-plum-deep border-t border-plum/10 py-4 px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.year }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.ugcPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.nonUgcPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.totalPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.books })
							]
						}, row.year)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 lg:grid-cols-5 gap-0 text-sm font-semibold text-plum-deep border-t border-plum/10 bg-cream/60 py-4 px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Total" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: totalSummary.ugcPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: totalSummary.nonUgcPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: totalSummary.totalPapers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: totalSummary.books })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4",
						children: "Publication catalogue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Full DFNS publication list"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/research",
						className: "inline-flex items-center gap-2 rounded-full border border-plum/20 px-5 py-3 text-sm text-plum-deep hover:bg-plum/5 transition-all",
						children: "View funded research page"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-14",
					children: sortedYears.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-full bg-sage-soft py-2 px-4 text-sm text-plum-deep ring-1 ring-plum/10",
							children: [publicationsByYear[year].length, " entries"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6",
						children: publicationsByYear[year].map((pub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-4xl bg-card ring-1 ring-plum/10 p-8 hover:shadow-xl transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col lg:flex-row lg:justify-between gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.18em] text-pomegranate font-bold mb-2",
									children: pub.type
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-2xl leading-tight",
									children: pub.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-plum-deep/80 min-w-55",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: pub.authors
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2",
											children: pub.outlet
										}),
										pub.issn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-xs text-plum-deep/60",
											children: ["ISSN: ", pub.issn]
										}) : null
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 text-sm text-plum-deep/75",
								children: [
									pub.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: pub.link,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "text-pomegranate underline wrap-break-word",
										children: "Open publication link"
									}) : null,
									pub.ugcInfo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-plum-deep/70",
										children: ["UGC detail: ", pub.ugcInfo]
									}) : null,
									pub.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-plum-deep/70",
										children: pub.note
									}) : null
								]
							})]
						}, pub.id))
					})] }, year))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl bg-plum-deep text-cream p-12 lg:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl mb-4",
						children: "All DFNS publications are now structured and linked on the website."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/80 leading-relaxed text-lg",
						children: "This page includes the complete 2015–present publication record, including journal papers, book chapters, books and conference proceedings with direct links where available."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var DOMAINS = [
	{
		slug: "cereal-millet-grain",
		number: "01",
		title: "Cereal, Millet & Ancient Grain Technology",
		short: "Reviving heritage grains for modern metabolic health.",
		emoji: "🌾",
		color: "saffron",
		image: "/assets/domain-millet-3ORuiNE1.jpg",
		overview: "Rediscovering the nutritional power of millets, pigmented rice and indigenous grains through processing, fortification and product development geared toward lifestyle disease prevention.",
		focus: [
			"Pigmented rice processing & metabolomic profiling",
			"Millet-based convenience and therapeutic foods",
			"Bio-processing: soaking, germination, fermentation",
			"Mineral bioavailability & glycemic index studies"
		],
		researchHighlights: [
			{
				title: "Nutritional Profiling for Mineral Malnutrition",
				description: "Micronutrient fingerprinting of Indian heritage rice varieties and fortified product development is being carried out to address iron and zinc deficiencies through enriched pigmented rice formulations.",
				keyResearchers: ["Prof. N. Srividya"]
			},
			{
				title: "Microbiome Therapeutics for Iron Deficiency Anemia",
				description: "This study evaluates microbiome-modulating symbiotic formulations to support iron metabolism and adolescent girls’ nutritional status.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Metabolic & Lifestyle Disease Functional Foods",
				description: "Evidence-based functional food products are developed for obesity and diabetes management using ingredient validation, glycemic response testing and satiety studies.",
				keyResearchers: [
					"Prof. N. Srividya",
					"Dr. A. Sumana",
					"Dr. Tapasya Anand"
				]
			},
			{
				title: "Advanced Metabolomics and in silico Antiviral Screening",
				description: "Metabolomic and computational screening of Indian red rice metabolites identify natural SARS-CoV-2 main protease inhibitors and candidates for antiviral functional foods.",
				keyResearchers: ["Prof. N. Srividya"]
			}
		],
		publications: ["Ashrita C. Haldipur & N. Srividya. (2021). A comparative evaluation of in vitro antihyperglycemic potential of Bamboo seed rice and Garudan samba. Journal of Cereal Science.", "Ashrita C. Haldipur & N. Srividya. (2020). In vitro glycemic response of indigenous pigmented rice cultivars. Current Research in Nutrition and Food Science."],
		team: [
			{
				name: "Dr... (Miss) N Srividya",
				role: "Principal Investigator"
			},
			{
				name: "Ms. Ashrita C Haldipur",
				role: "Doctoral Scholar"
			},
			{
				name: "Ms. N Saiharini",
				role: "Doctoral Scholar"
			}
		],
		projects: [{
			title: "ICMR – Antidiabetic evaluation of Indian pigmented rice",
			detail: "₹24 L (2019–22). Mechanistic metabolomic approach for diabetic functional foods."
		}, {
			title: "UGC-DAE – XRF profiling of essential minerals",
			detail: "₹45 K (2019–20). EDXRF mapping of Fe, Zn, Ca, Mg in bio-processed pigmented rice."
		}]
	},
	{
		slug: "dairy-plant-based",
		number: "02",
		title: "Dairy & Plant-Based Foods",
		short: "Sustainable milk alternatives and probiotic dairy formulations.",
		emoji: "🥛",
		color: "sage",
		image: "/assets/domain-dairy-9XQlagge.jpg",
		overview: "Combining traditional fermentation wisdom with modern microbiology to develop functional dairy and plant-based products with extended shelf life and probiotic value.",
		focus: [
			"Probiotic curd and fermented beverages",
			"Plant-based milk from millets, nuts and pulses",
			"Shelf-stable indigenous dairy products",
			"Lactose-free and protein-fortified formulations"
		],
		researchHighlights: [
			{
				title: "Therapeutic Foods & Eye Health",
				description: "Functional products were developed for eye health and menopausal support with high carotenoid, anthocyanin and omega-3 formulations.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Ready-to-Eat Convenience Foods",
				description: "Novel multigrain tarts and Nutri Fusion crackers are formulated from pulse and grain flours to offer nutrient-dense, shelf-stable snack options.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Plant-Based Milk Alternatives",
				description: "Research on plant-based milk alternatives focuses on extended shelf life, nutritional completeness and sensory acceptability for dairy-free consumers.",
				keyResearchers: ["Dr. A. Sumana"]
			}
		],
		publications: ["K. Sudha Rani & N. Srividya. (2016). Effect of inulin, fructooligosaccharides and L. acidophilus in formulating a synbiotic yogurt. Asian Journal of Dairy and Food Research."],
		team: [{
			name: "Dr. (Mrs.) A Sumana",
			role: "Faculty Lead"
		}, {
			name: "Ms. Manjula Devi Ghoora",
			role: "Doctoral Scholar"
		}],
		projects: [{
			title: "Plant-based probiotic beverage formulation",
			detail: "Multi-strain fermentation of millet-based bases."
		}, {
			title: "Shelf-stable indigenous sweets",
			detail: "Process optimization for traditional milk sweets."
		}]
	},
	{
		slug: "fruits-vegetables",
		number: "03",
		title: "Fruits & Vegetable Processing",
		short: "Zero-waste preservation that maximises nutrient retention.",
		emoji: "🍅",
		color: "pomegranate",
		image: "/assets/domain-fruits-DfOvYu_j.jpg",
		overview: "Thermal and non-thermal processing of regional produce to retain micronutrients and bioactives, with emphasis on under-utilized fruits.",
		focus: [
			"Non-thermal preservation (HPP, PEF, ohmic heating)",
			"Bioactive extraction from peels and pomace",
			"Instant mixes from under-utilised fruits",
			"Anti-oxidant rich convenience formulations"
		],
		researchHighlights: [
			{
				title: "Post-Harvest Management of Organic Produce",
				description: "Research assesses organic farm inputs on tomato and sweet lime quality, antioxidant levels and shelf stability under Jaivik Krishi methods.",
				keyResearchers: ["Dr. M. Srijaya"]
			},
			{
				title: "Bio-Based Edible Coatings",
				description: "Aloe gel and chitosan based edible antimicrobial coatings are studied for extending shelf life of papaya, figs and fresh-cut vegetables.",
				keyResearchers: ["Prof. N. Srividya"]
			},
			{
				title: "Waste Valorisation of Fruit and Vegetable Byproducts",
				description: "Fruit and vegetable processing byproducts are converted into jellies, yogurt, crackers and biodegradable packaging materials.",
				keyResearchers: ["Dr. A. Padmaja"]
			}
		],
		publications: ["N. Saiharini & A. Padmaja. (2022). Studies on nutrient and phytochemical composition and assessment of in vitro antioxidant properties of watermelon fruit by-products. Annals of Phytomedicine."],
		team: [{
			name: "Dr. (Mrs.) Ambati Padmaja",
			role: "Faculty Lead"
		}, {
			name: "Ms. Shrijana Rasaily",
			role: "Doctoral Scholar"
		}],
		projects: [{
			title: "Instant soup mix from Muntingia calabura fruit",
			detail: "Awarded 3rd Place – FOODS 2019, Chennai."
		}, {
			title: "Anthocyanin recovery from fruit waste",
			detail: "Solvent-free extraction for natural colourants."
		}]
	},
	{
		slug: "product-development",
		number: "04",
		title: "Food Product Development & Commercialization",
		short: "From concept to commercial shelf with sensory rigour.",
		emoji: "🧪",
		color: "turmeric",
		image: "/assets/domain-product-ZMa9QvmE.jpg",
		overview: "End-to-end product design — formulation, sensory evaluation, scale-up, regulatory documentation and market validation — delivered as a single pipeline.",
		focus: [
			"Recipe design & nutritional labelling",
			"Sensory & consumer acceptance testing",
			"Scale-up from kitchen to pilot plant",
			"Cost engineering and IP support"
		],
		researchHighlights: [
			{
				title: "Therapeutic Product Formulation",
				description: "Gluten-free millet snack bars, cookies and muesli are developed for celiac-friendly diets with convenient nutritional support.",
				keyResearchers: ["Dr. M. Meera"]
			},
			{
				title: "Athlete & Wellness Convenience Foods",
				description: "New products such as Shewins and frozen plant-based treats are formulated to improve strength, immunity, recovery and sensory appeal.",
				keyResearchers: ["Dr. Tapasya Anand", "Dr. M. Srijaya"]
			},
			{
				title: "Eye & Women’s Health Functional Foods",
				description: "Foods rich in lutein, zeaxanthin, anthocyanins and omega-3s are created for visual health and menopausal wellbeing.",
				keyResearchers: ["Dr. A. Sumana"]
			}
		],
		publications: ["N/A"],
		team: [{
			name: "Prof... (Mrs.) B Andallu",
			role: "Phytochemical Specialist"
		}, {
			name: "Ms. Alisha Pradhan",
			role: "Doctoral Scholar"
		}],
		projects: [{
			title: "Spice-based functional foods",
			detail: "Translating phytochemistry into shelf-ready blends."
		}, {
			title: "Therapeutic convenience foods",
			detail: "Pigmented-rice based ready mixes for diabetic care."
		}]
	},
	{
		slug: "packaging-shelf-life",
		number: "05",
		title: "Packaging & Shelf-Life Technology",
		short: "Sustainable barriers that keep nutrition locked in.",
		emoji: "📦",
		color: "sage",
		image: "/assets/domain-packaging-C6kHhz4U.jpg",
		overview: "Designing biodegradable, active and intelligent packaging systems that extend shelf life while protecting bioactives — with a focus on Indian climatic conditions.",
		focus: [
			"Biodegradable and edible films",
			"Active and intelligent packaging",
			"Accelerated shelf-life modelling",
			"Migration and barrier studies"
		],
		researchHighlights: [
			{
				title: "Biodegradable Film Development",
				description: "Starch–protein composite films are formulated from millet by-products for sustainable packaging with compostable end-of-life properties.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Intelligent Freshness Indicators",
				description: "Anthocyanin-based pH-sensitive films are developed to indicate spoilage in perishable dairy and fresh produce packaging.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Shelf-Life Prediction for Indigenous Foods",
				description: "Accelerated shelf-life modelling and barrier performance testing are being used to validate packaging for local ambient conditions.",
				keyResearchers: ["Dr. A. Sumana"]
			}
		],
		publications: ["M. Shalini & A. Sumana. (2023). Development of starch-protein biodegradable films from millet byproducts. Journal of Packaging Technology."],
		team: [{
			name: "Dr. (Mrs.) A Sumana",
			role: "Lead — Packaging Lab"
		}],
		projects: [{
			title: "Starch–protein composite edible films",
			detail: "From millet by-products."
		}, {
			title: "Indicator films for spoilage detection",
			detail: "Anthocyanin-based pH sensing in dairy."
		}]
	},
	{
		slug: "food-safety-adulteration",
		number: "06",
		title: "Food Safety, Quality & Adulteration Detection",
		short: "Rapid, lab-validated screens for the Indian food chain.",
		emoji: "🛡️",
		color: "pomegranate",
		image: "/assets/domain-safety-aY060pv1.jpg",
		overview: "Method development for rapid adulteration screening and microbial safety — supporting FSSAI compliance, HACCP and GMP implementation for industry partners.",
		focus: [
			"Rapid adulteration test methods",
			"HACCP and GMP advisory",
			"FSSAI labelling & compliance",
			"Microbiological quality assurance"
		],
		researchHighlights: [
			{
				title: "Rapid Adulteration Detection Kits",
				description: "Field-friendly test kits for spice powders and milk help small vendors identify adulterants such as synthetic colours, starch, and water dilution.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Quality Assurance for MSMEs",
				description: "HACCP, GMP and FSSAI compliance advisory is tailored for rural and women-led food enterprises to standardize safety practices.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Microbiological Safety in Traditional Foods",
				description: "Risk reduction studies for fermented and traditional foods identify contamination hazards and recommend improved processing controls.",
				keyResearchers: ["Dr. A. Sumana", "Sai Sruthi Shree"]
			}
		],
		publications: ["A. Sumana & S. Sruthi Shree. (2022). Development of a low-cost rapid milk adulteration detection toolkit for dairy cooperatives. International Journal of Food Quality."],
		team: [{
			name: "Dr. (Mrs.) A Sumana",
			role: "Regulatory & QA Lead"
		}, {
			name: "Ms. Sai Sruthi Shree K K",
			role: "Doctoral Scholar"
		}],
		projects: [{
			title: "Adulterant screening in spice powders",
			detail: "Spectroscopic + colour-based rapid kits."
		}, {
			title: "Milk adulteration detection toolkit",
			detail: "Low-cost field test for small dairies."
		}]
	},
	{
		slug: "resource-recovery",
		number: "07",
		title: "Resource Recovery from Food Stream",
		short: "Circular nutrition — turning by-products into value.",
		emoji: "♻️",
		color: "basil",
		image: "/assets/domain-recovery-D2BVo8M1.jpg",
		overview: "Valorising agri-food by-products — peels, pomace, brans, whey — into functional ingredients, biopolymers and energy, with a strong sustainability mandate.",
		focus: [
			"By-product valorisation",
			"Functional ingredients from waste",
			"Bran-based fibre & polyphenol enrichment",
			"Green extraction processes"
		],
		researchHighlights: [
			{
				title: "Nutraceutical Ingredients from By-Products",
				description: "Rice bran and fruit pomace are converted into fibre-rich nutraceutical powders and antioxidant concentrates for health-focused food applications.",
				keyResearchers: ["Dr. N. Srividya"]
			},
			{
				title: "Sustainable Protein & Prebiotic Ingredients",
				description: "By-product valorisation creates protein-rich pulse flours and prebiotic fibre blends suited for functional snack development.",
				keyResearchers: ["Dr. N. Srividya"]
			},
			{
				title: "Green Extraction of Bioactive Compounds",
				description: "Eco-friendly extraction techniques recover anthocyanins, carotenoids and phenolics from food waste for clean-label formulations.",
				keyResearchers: ["Dr. N. Srividya"]
			}
		],
		publications: ["N. Srividya. (2022). Green valorisation of rice bran and fruit pomace for functional food applications. Journal of Food Processing and Preservation."],
		team: [{
			name: "Dr. (Miss) N Srividya",
			role: "Faculty Lead"
		}],
		projects: [{
			title: "Pigmented rice bran nutraceuticals",
			detail: "Stabilisation and enrichment for daily use."
		}, {
			title: "Fruit waste polyphenol concentrates",
			detail: "For functional beverage applications."
		}]
	},
	{
		slug: "startup-incubation",
		number: "08",
		title: "Startup Incubation & Technology Transfer",
		short: "Women-led food entrepreneurship from idea to FSSAI.",
		emoji: "🚀",
		color: "turmeric",
		image: "/assets/domain-startup-D4SZ6iUx.jpg",
		overview: "A women-first incubation pathway — idea validation, prototype, pilot batch, regulatory support and investor connect — anchored in the CoE's translational research.",
		focus: [
			"Idea validation & prototyping",
			"Pilot batch production support",
			"FSSAI, GMP & export compliance",
			"Investor and FPO network connect"
		],
		researchHighlights: [
			{
				title: "Women-Led Startup Acceleration",
				description: "Incubation supports female entrepreneurs through co-creation workshops, product development clinics, and regulatory handholding.",
				keyResearchers: ["Dr. A. Sumana", "Prof. B. Andallu"]
			},
			{
				title: "Translation of Technology to Market",
				description: "Technology transfer pathways help license CoE-developed recipes and processes to food entrepreneurs and small-scale producers.",
				keyResearchers: ["Dr. A. Sumana"]
			},
			{
				title: "Pilot Batch Scale-Up Support",
				description: "Pilot plant production guidance enables women agripreneurs to move products from formulation to certified market-ready batches.",
				keyResearchers: ["Prof. B. Andallu"]
			}
		],
		publications: ["N/A"],
		team: [{
			name: "Dr. (Mrs.) A Sumana",
			role: "Incubation Mentor"
		}, {
			name: "Prof. (Mrs.) B Andallu",
			role: "Scientific Advisor"
		}],
		projects: [{
			title: "Women entrepreneur cohorts",
			detail: "Annual cohort focused on millet & dairy startups."
		}, {
			title: "Technology transfer pipeline",
			detail: "Licensing of CoE-developed recipes and processes."
		}]
	}
];
var FACULTY = [
	{
		name: "Prof. (Mrs.) B Andallu",
		role: "Phytochemical Specialist • 25+ Years",
		bio: "Invited speaker at the 107th Indian Science Congress on the role of phytochemicals in healthcare.",
		color: "plum"
	},
	{
		name: "Dr... (Miss) N Srividya",
		role: "Principal Investigator • Metabolomics",
		bio: "Leads ICMR-funded research on the antidiabetic potential of Indian pigmented rice varieties.",
		color: "pomegranate"
	},
	{
		name: "Dr. (Mrs.) A Sumana",
		role: "Food Industry Consultant • Regulatory Expert",
		bio: "Board of Studies member, KVR Government College — works at the intersection of safety and entrepreneurship.",
		color: "sage"
	},
	{
		name: "Dr. (Mrs.) Ambati Padmaja",
		role: "Product Development • Sensory Science",
		bio: "Awarded 3rd Place at FOODS 2019 for development of an instant soup mix from Muntingia calabura.",
		color: "turmeric"
	}
];
var SCHOLARS = [
	"Ms. Ashrita C Haldipur",
	"Ms. Manjula Devi Ghoora",
	"Ms. N Saiharini",
	"Ms. Shrijana Rasaily",
	"Ms. Alisha Pradhan",
	"Ms. Sai Sruthi Shree K K",
	"Ms. Sai Dharshini S"
];
var Route$6 = createFileRoute("/faculty")({
	head: () => ({ meta: [
		{ title: "Faculty & Scholars — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "Meet the women-led faculty and doctoral research scholars driving SSSIHL's Centre of Excellence in Food Processing & Preservation."
		},
		{
			property: "og:title",
			content: "Faculty & Scholars — SSSIHL CoE"
		},
		{
			property: "og:description",
			content: "Women-led food and nutrition research at SSSIHL."
		}
	] }),
	component: FacultyPage
});
function FacultyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pt-16 pb-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute top-20 right-10 size-72 rounded-full bg-pomegranate/15 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl relative animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6",
							children: "Academic Leadership"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl lg:text-7xl leading-[0.95] mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-shimmer",
								children: "Women"
							}), " at the heart of food science."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-plum-deep/70 leading-relaxed",
							children: "Our multi-disciplinary faculty combines decades of research with active mentorship of the next generation of food scientists."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: FACULTY.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up",
						style: { animationDelay: `${i * .1}s` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `size-20 rounded-3xl bg-${f.color} grid place-items-center font-display italic text-3xl text-cream shrink-0 shadow-lg`,
								children: f.name.split(" ").slice(-1)[0]?.[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl mb-2 leading-tight",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.15em] text-plum-deep/55 font-bold mb-4",
										children: f.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-plum-deep/75 leading-relaxed",
										children: f.bio
									})
								]
							})]
						})
					}, f.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-plum-deep text-cream py-20 mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4",
								children: "Doctoral Scholars"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl lg:text-5xl leading-tight",
								children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "next generation."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/70 mt-6 leading-relaxed",
								children: "Several SSSIHL scholars have qualified UGC-NET (LS) in Home Science and contribute to national-level workshops and symposia."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-3",
							children: SCHOLARS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-turmeric",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: s
								})]
							}, s))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$5 = createFileRoute("/domains")({ component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "Partner with the SSSIHL Centre of Excellence in Food Processing & Preservation. Department of Food & Nutritional Sciences, Anantapur."
		},
		{
			property: "og:title",
			content: "Contact — SSSIHL CoE"
		},
		{
			property: "og:description",
			content: "Get in touch with the Department of Food & Nutritional Sciences at SSSIHL."
		}
	] }),
	component: ContactPage
});
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pt-16 pb-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute top-20 right-0 size-72 rounded-full bg-sage/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl relative animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl lg:text-7xl leading-[0.95] mb-6",
							children: [
								"Let's build something ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-shimmer",
									children: "nourishing"
								}),
								" together."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-plum-deep/70 leading-relaxed",
							children: "Whether you are an industry partner, FPO, founder, or fellow researcher — we'd love to hear from you."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-12 grid lg:grid-cols-[1fr_1.2fr] gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 rounded-3xl bg-card ring-1 ring-plum/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.22em] text-pomegranate font-bold mb-3",
									children: "Address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl leading-snug",
									children: "Department of Food & Nutritional Sciences"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-plum-deep/70 mt-2 leading-relaxed",
									children: [
										"Sri Sathya Sai Institute of Higher Learning",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Anantapur, Andhra Pradesh – 515001, India"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 rounded-3xl bg-plum-deep text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.22em] text-turmeric font-bold mb-3",
								children: "Department site"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.sssihl.edu.in/departments/food-nutritional-sciences/",
								target: "_blank",
								rel: "noreferrer",
								className: "font-display text-lg italic underline decoration-turmeric/60 underline-offset-4 hover:text-turmeric transition-colors",
								children: "sssihl.edu.in / food-nutritional-sciences ↗"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 rounded-3xl bg-sage-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.22em] text-basil font-bold mb-3",
								children: "Engagement Areas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-sm space-y-2 text-plum-deep/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Contract R&D and product formulation" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Startup incubation & FSSAI guidance" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Research collaboration & co-publications" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Training programs & workshops" })
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "p-8 lg:p-10 rounded-[32px] bg-card ring-1 ring-plum/10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all",
									placeholder: "Your name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60",
									children: "Organization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all",
									placeholder: "Company / FPO / Institute"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: "mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all",
								placeholder: "you@example.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60",
								children: "Area of interest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Research collaboration" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Contract R&D / product development" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Startup incubation" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Training & workshops" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Media / general inquiry" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 5,
								className: "mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all resize-none",
								placeholder: "Tell us what you'd like to explore…"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-full px-7 py-4 bg-plum text-cream rounded-full font-bold hover:bg-pomegranate transition-all shadow-xl shadow-plum/20",
							children: "Send message →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-plum-deep/50 text-center",
							children: "This form is for demonstration only. Please contact the department directly via the SSSIHL website."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Vision & Mission — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "The vision, mission and mandate of SSSIHL's Centre of Excellence in Food Processing & Preservation."
		},
		{
			property: "og:title",
			content: "Vision & Mission — SSSIHL Centre of Excellence"
		},
		{
			property: "og:description",
			content: "Translational food research with a women-first mandate."
		}
	] }),
	component: AboutPage
});
var PILLARS = [
	{
		title: "Translational Research",
		body: "Move discoveries from petri dish to plate — backed by metabolomics, sensory science and rigorous trials.",
		color: "bg-pomegranate"
	},
	{
		title: "Commercialization",
		body: "Bridge academia and industry with technology transfer, IP support and FSSAI-ready product pipelines.",
		color: "bg-saffron"
	},
	{
		title: "Women's Empowerment",
		body: "Centre women's health and financial empowerment in every research, product and incubation decision.",
		color: "bg-sage"
	}
];
var INFRA = [
	"Food Chemistry & Biochemistry Laboratory",
	"Food Microbiology & Safety Lab",
	"Sensory Evaluation Suite",
	"Pilot-scale Food Processing Unit",
	"Spectroscopy & EDXRF facility (UGC-DAE collaboration)",
	"Bio-processing & Fermentation Unit",
	"Packaging Materials & Shelf-life Testing",
	"Nutrition Assessment & Analytics Lab"
];
var SERVICES = [
	{
		title: "Product Formulation",
		emoji: "🧪"
	},
	{
		title: "Process Optimization",
		emoji: "⚙️"
	},
	{
		title: "Shelf-life Studies",
		emoji: "📅"
	},
	{
		title: "Nutritional Enhancement",
		emoji: "🌱"
	},
	{
		title: "Scale-up Support",
		emoji: "📈"
	},
	{
		title: "Contract R&D",
		emoji: "🔬"
	},
	{
		title: "FSSAI / HACCP / GMP",
		emoji: "🛡️"
	},
	{
		title: "Technology Transfer",
		emoji: "🤝"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pt-16 pb-24 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute top-20 right-0 size-72 rounded-full bg-sage/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl relative animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6",
							children: "Vision & Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl lg:text-7xl leading-[0.95] mb-8",
							children: [
								"Establishing a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-shimmer",
									children: "Centre of Excellence"
								}),
								" in Food & Nutritional Science."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-plum-deep/75 leading-relaxed mb-6",
							children: "Drawing from extensive research experience in food processing, preservation and storage stability, the Department of Food & Nutritional Sciences at SSSIHL is building a Centre of Excellence with translational research, commercialization and women-specific health and financial empowerment at its core."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4",
							children: "Department"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl lg:text-4xl mb-4",
							children: "Aum Sri Sai Ram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/70 mb-2",
							children: "Department of Food and Nutritional Sciences"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/70 mb-2",
							children: "Sri Sathya Sai Institute of Higher Learning — Anantapur Campus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mt-6",
							children: "Vision / Aim"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/70",
							children: "The department intends to establish a center of excellence in food processing and preservation, drawing from its extensive research experience in various food processing methods and ensuring the stability of the resulting products during storage."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mt-6",
							children: "Our Research Themes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc list-inside text-plum-deep/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Processing of foods for sustainability and stability" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Postharvest technology of horticultural products" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Food material characterization" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Food product development and evaluation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Food processing waste utilization for value addition" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Food safety and quality" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mt-6",
							children: "Team & Interdisciplinary Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/70",
							children: "Team of experts: Faculty and Research Scholars from the DFNS, SSSIHL. Supporting team: Research Scholars from the DFNS, SSSIHL."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mt-6",
							children: "Specific Objectives (examples)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-plum-deep/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Research theme:" }),
									" Food safety and quality",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Main area of work:" }),
									" Rapid adulteration detection kits",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Objective:" }),
									" Develop low-cost, field-deployable tests for common adulterants",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Working team members:" }),
									" Faculty lead, 2 doctoral scholars",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Publications:" }),
									" Ongoing — methodology papers and validation reports"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Research theme:" }),
									" Product development and evaluation",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Main area of work:" }),
									" Millet-based therapeutic convenience foods",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Objective:" }),
									" Formulate shelf-stable, low-GI instant mixes for diabetic care",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Working team members:" }),
									" Faculty lead, sensory scientist, 2 scholars"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Research theme:" }),
									" Waste valorisation",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Main area of work:" }),
									" Polyphenol recovery from fruit pomace",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Objective:" }),
									" Convert waste streams into value-added extracts for beverages"
								] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid lg:grid-cols-3 gap-6",
					children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 transition-all animate-fade-up",
						style: { animationDelay: `${i * .1}s` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-12 ${p.color} rounded-2xl mb-6` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mb-3",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-plum-deep/70 leading-relaxed",
								children: p.body
							})
						]
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-plum-deep text-cream py-24 my-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page grid lg:grid-cols-2 gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4",
							children: "Infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl lg:text-5xl leading-tight mb-6",
							children: [
								"A working ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "food research"
								}),
								" ecosystem."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/70 text-lg leading-relaxed",
							children: "The CoE is built on existing SSSIHL laboratories within the Department of Food & Nutritional Sciences — a foundation we are extending with packaging, adulteration-detection and incubation facilities."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid sm:grid-cols-2 gap-3",
						children: INFRA.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 p-4 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-turmeric font-mono text-xs mt-1",
								children: String(idx + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: i
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4",
						children: "Industry Support Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl lg:text-5xl",
						children: ["How ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "industry benefits."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-6 rounded-2xl ring-1 ring-plum/10 hover:ring-saffron hover:-translate-y-1 transition-all text-center group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl mb-3 group-hover:scale-110 transition-transform",
							children: s.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-sm",
							children: s.title
						})]
					}, s.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[40px] bg-sage-soft p-12 lg:p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl lg:text-4xl mb-4",
							children: ["Ready to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-pomegranate",
								children: "collaborate?"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-plum-deep/70 mb-8 max-w-xl mx-auto",
							children: "Bring a problem, a product idea, or a research question. We'll help you take it from lab to market."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex px-8 py-4 bg-plum text-cream rounded-full font-bold hover:bg-pomegranate transition-all shadow-xl",
							children: "Get in touch →"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var COLOR_MAP = {
	plum: {
		bg: "bg-plum/8",
		hover: "hover:bg-plum hover:text-cream",
		text: "text-plum",
		ring: "ring-plum/20"
	},
	sage: {
		bg: "bg-sage/10",
		hover: "hover:bg-sage hover:text-cream",
		text: "text-sage",
		ring: "ring-sage/20"
	},
	pomegranate: {
		bg: "bg-pomegranate/10",
		hover: "hover:bg-pomegranate hover:text-cream",
		text: "text-pomegranate",
		ring: "ring-pomegranate/20"
	},
	turmeric: {
		bg: "bg-turmeric/15",
		hover: "hover:bg-turmeric hover:text-plum-deep",
		text: "text-saffron",
		ring: "ring-turmeric/30"
	},
	saffron: {
		bg: "bg-saffron/10",
		hover: "hover:bg-saffron hover:text-cream",
		text: "text-saffron",
		ring: "ring-saffron/20"
	},
	basil: {
		bg: "bg-basil/10",
		hover: "hover:bg-basil hover:text-cream",
		text: "text-basil",
		ring: "ring-basil/20"
	}
};
function DomainCard({ domain }) {
	const c = COLOR_MAP[domain.color];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/domains/$slug",
		params: { slug: domain.slug },
		className: `group relative overflow-hidden rounded-3xl p-7 ring-1 ${c.ring} ${c.bg} ${c.hover} transition-all duration-500 flex flex-col justify-between min-h-[300px]`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 size-32 rounded-full bg-current opacity-[0.04] animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-mono ${c.text} group-hover:text-current/70`,
							children: domain.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500",
							children: domain.emoji
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl leading-tight mb-3",
						children: domain.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-70 leading-relaxed",
						children: domain.short
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] group-hover:gap-4 transition-all",
				children: ["Explore Domain", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-6 rounded-full grid place-items-center ring-1 ring-current",
					children: "→"
				})]
			})
		]
	});
}
var hero_rice_default = "/assets/hero-rice-B25gEd0G.jpg";
var hero_spices_default = "/assets/hero-spices-BDy9yB6z.jpg";
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "SSSIHL Centre of Excellence — Food Processing & Preservation" },
		{
			name: "description",
			content: "Eight flagship research domains in translational food science, women-led innovation and startup incubation at SSSIHL."
		},
		{
			property: "og:title",
			content: "SSSIHL Centre of Excellence — Food Processing & Preservation"
		},
		{
			property: "og:description",
			content: "Translational food science with a women-first mandate at SSSIHL."
		}
	] }),
	component: HomePage
});
var METRICS = [
	{
		value: "08",
		label: "Flagship Domains",
		color: "text-pomegranate"
	},
	{
		value: "₹24L+",
		label: "ICMR Funded Research",
		color: "text-saffron"
	},
	{
		value: "15+",
		label: "Doctoral Scholars",
		color: "text-sage"
	},
	{
		value: "100%",
		label: "Women-Led Faculty",
		color: "text-plum"
	}
];
var ROADMAP = [
	{
		years: "Year 1–2",
		title: "Foundation & Infrastructure",
		body: "Strengthen Millet & Dairy Technology cores. Establish the Packaging Lab.",
		color: "bg-saffron"
	},
	{
		years: "Year 3–4",
		title: "Safety & Adulteration Centre",
		body: "Launch national training programs and the Food Safety & Adulteration detection hub.",
		color: "bg-pomegranate"
	},
	{
		years: "Year 5",
		title: "Food Innovation Hub",
		body: "Support 100+ food startups. Develop export-ready technologies for South Asia.",
		color: "bg-sage"
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -top-32 -left-32 size-96 rounded-full bg-turmeric/20 blur-3xl animate-blob"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute top-1/3 -right-40 size-[28rem] rounded-full bg-pomegranate/15 blur-3xl animate-blob",
						style: { animationDelay: "2s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/15 text-sage text-[11px] font-bold uppercase tracking-[0.18em] mb-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex size-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex size-full rounded-full bg-sage opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-sage" })]
									}), "Established 2024 • SSSIHL"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8",
									children: [
										"Where ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-shimmer",
											children: "Science"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Meets ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-pomegranate",
											children: "Sustenance."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-plum-deep/70 leading-relaxed max-w-xl mb-10",
									children: "The Centre of Excellence in Food Processing & Preservation bridges ancient Indian wisdom with modern nutritional precision — led by women researchers, translating laboratory breakthroughs into community-wide health and financial empowerment."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/domains",
										className: "px-7 py-3.5 bg-plum text-cream rounded-full font-semibold hover:bg-pomegranate transition-all shadow-xl shadow-plum/25 hover:-translate-y-0.5",
										children: "Explore 8 Domains"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "px-7 py-3.5 border-2 border-plum/20 text-plum rounded-full font-semibold hover:bg-plum/5 transition-all",
										children: "Our Vision →"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group animate-fade-up",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-plum/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero_rice_default,
										alt: "Indian pigmented rice from a woven basket",
										width: 1280,
										height: 1280,
										className: "size-full object-cover group-hover:scale-105 transition-transform duration-700"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-plum-deep/30 via-transparent to-transparent" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl ring-1 ring-plum/10 max-w-[220px] animate-float-slow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl italic text-pomegranate",
										children: "570M"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-medium uppercase tracking-tight text-plum-deep/60",
										children: "Tonnes of global rice demand by 2025"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-8 -right-4 size-24 rounded-full bg-turmeric/30 animate-spin-slow ring-1 ring-turmeric/40" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-12 border-y border-plum/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
					children: METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `font-display italic text-5xl lg:text-6xl mb-2 ${m.color} group-hover:scale-110 transition-transform`,
							children: m.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.22em] font-bold text-plum-deep/60",
							children: m.label
						})]
					}, m.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "domains",
				className: "container-page py-24 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4",
							children: "08 Core Specializations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl lg:text-6xl mb-6",
							children: ["Flagship ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Research Domains"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-1 bg-turmeric mx-auto mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl mx-auto text-plum-deep/70",
							children: "From ancient grain restoration to futuristic packaging — eight verticals devoted to the complete lifecycle of food preservation, safety and commercialization."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: DOMAINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainCard, { domain: d }, d.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-plum-deep text-cream py-24 lg:py-32 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute top-10 right-10 size-72 border border-turmeric/20 rounded-full animate-spin-slow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute bottom-10 left-10 size-48 border border-pomegranate/30 rounded-full animate-spin-slow",
						style: { animationDirection: "reverse" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page grid lg:grid-cols-2 gap-16 items-center relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_spices_default,
								alt: "Spices in scientific glassware",
								width: 1024,
								height: 1280,
								loading: "lazy",
								className: "rounded-[40px] aspect-[4/5] object-cover shadow-2xl"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -right-6 bg-turmeric text-plum-deep p-5 rounded-2xl shadow-xl max-w-[200px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold uppercase tracking-widest mb-1",
									children: "ICMR Funded"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display italic text-2xl leading-tight",
									children: "₹24 Lakhs"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-turmeric text-[10px] font-bold uppercase tracking-[0.25em] mb-4",
								children: "Research Spotlight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl lg:text-5xl leading-tight mb-6",
								children: ["Antidiabetic potential of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "Indian pigmented rice"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/70 text-lg leading-relaxed mb-8",
								children: "A mechanistic, metabolomic approach to understanding how phenolic acids and anthocyanins in heritage rice varieties can manage glycemic response and reduce diabetes risk across Asia."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4 mb-10",
								children: [
									"Metabolomic profiling of phenolics & anthocyanins",
									"Glycemic response evaluation in vivo",
									"Gluten-free therapeutic convenience foods"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-6 rounded-full bg-sage/30 ring-1 ring-sage grid place-items-center text-xs mt-0.5",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-5 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur w-fit",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 bg-pomegranate rounded-full grid place-items-center font-display italic text-cream",
									children: "Dr"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: "Dr. (Miss) N Srividya"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-cream/60 uppercase tracking-widest",
									children: "Principal Investigator"
								})] })]
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-24 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4",
						children: "Academic Leadership"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl lg:text-5xl",
						children: ["Led by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-pomegranate",
							children: "women scientists"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faculty",
						className: "text-sm font-bold uppercase tracking-widest text-plum hover:text-pomegranate flex items-center gap-2 group",
						children: ["See full faculty ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "group-hover:translate-x-1 transition-transform",
							children: "→"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: FACULTY.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up",
						style: { animationDelay: `${i * .1}s` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `size-14 rounded-2xl mb-5 grid place-items-center font-display italic text-2xl text-cream bg-${f.color}`,
								children: f.name.split(" ").slice(-1)[0]?.[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-xl mb-2 leading-tight",
								children: f.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-plum-deep/50 font-bold mb-4",
								children: f.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-plum-deep/70 leading-relaxed",
								children: f.bio
							})
						]
					}, f.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4",
						children: "5 Year Roadmap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl lg:text-5xl",
						children: ["The future of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "SSSIHL CoE"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-3xl mx-auto border-l-2 border-plum/15 pl-2",
					children: ROADMAP.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-12 pb-14 last:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -left-[11px] top-1 size-5 rounded-full ${r.color} ring-4 ring-cream` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono uppercase tracking-widest text-pomegranate block mb-2",
								children: r.years
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mb-3",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-plum-deep/70 leading-relaxed",
								children: r.body
							})
						]
					}, r.years))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-[40px] bg-gradient-to-br from-plum via-pomegranate to-saffron p-12 lg:p-20 text-cream overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -top-20 -right-20 size-80 rounded-full bg-turmeric/30 blur-3xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl lg:text-5xl leading-tight mb-6",
								children: ["Partner with our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "Centre of Excellence."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/85 text-lg mb-8",
								children: "Industry, academia, FPOs and entrepreneurs — collaborate on translational food research, FSSAI-ready product development, and women-first incubation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex px-8 py-4 bg-cream text-plum rounded-full font-bold hover:bg-turmeric transition-all shadow-xl",
								children: "Start a conversation →"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$1 = createFileRoute("/domains/")({
	head: () => ({ meta: [
		{ title: "Flagship Domains — SSSIHL Centre of Excellence" },
		{
			name: "description",
			content: "Eight flagship research domains spanning cereal & millet technology, dairy, fruits, packaging, food safety and startup incubation."
		},
		{
			property: "og:title",
			content: "Flagship Domains — SSSIHL Centre of Excellence"
		},
		{
			property: "og:description",
			content: "Eight verticals devoted to the complete lifecycle of food preservation, safety and commercialization."
		}
	] }),
	component: DomainsIndex
});
function DomainsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page pt-16 pb-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -top-12 right-0 size-80 rounded-full bg-turmeric/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl relative animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6",
							children: "08 Flagship Domains"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl lg:text-7xl leading-[0.95] mb-6",
							children: ["One Centre, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-shimmer",
								children: "eight expert verticals."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-plum-deep/70 leading-relaxed",
							children: "Each domain combines focused research, industry-ready services and a women-led team. Click any card to explore the team, ongoing projects and translational outcomes."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: DOMAINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainCard, { domain: d }, d.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route = createFileRoute("/domains/$slug")({
	loader: ({ params }) => {
		const domain = DOMAINS.find((d) => d.slug === params.slug);
		if (!domain) throw notFound();
		return { domain };
	},
	head: ({ loaderData }) => {
		const d = loaderData?.domain;
		if (!d) return { meta: [{ title: "Domain — SSSIHL CoE" }] };
		return { meta: [
			{ title: `${d.title} — SSSIHL Centre of Excellence` },
			{
				name: "description",
				content: d.short
			},
			{
				property: "og:title",
				content: `${d.title} — SSSIHL CoE`
			},
			{
				property: "og:description",
				content: d.short
			},
			{
				property: "og:image",
				content: d.image
			}
		] };
	},
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-32 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl mb-4",
					children: "Domain not found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/domains",
					className: "text-pomegranate underline",
					children: "← Back to all domains"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	}),
	component: DomainDetail
});
var COLOR_BG = {
	plum: "from-plum to-plum-deep",
	sage: "from-sage to-basil",
	pomegranate: "from-pomegranate to-plum",
	turmeric: "from-turmeric to-saffron",
	saffron: "from-saffron to-pomegranate",
	basil: "from-basil to-sage"
};
function DomainDetail() {
	const { domain: d } = Route.useLoaderData();
	const next = DOMAINS[(DOMAINS.findIndex((x) => x.slug === d.slug) + 1) % DOMAINS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `relative bg-gradient-to-br ${COLOR_BG[d.color]} text-cream pt-12 pb-20 overflow-hidden`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -top-20 -right-20 size-96 rounded-full bg-cream/10 blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute bottom-0 -left-32 size-72 rounded-full bg-cream/10 blur-3xl animate-blob"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/domains",
							className: "text-cream/70 hover:text-cream text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 mb-10",
							children: "← All domains"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade-up",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm opacity-70",
											children: d.number
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-5xl animate-float-slow",
											children: d.emoji
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-display text-4xl lg:text-6xl leading-[1] mb-6",
										children: d.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl text-cream/85 leading-relaxed max-w-xl",
										children: d.short
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.title,
									width: 1024,
									height: 768,
									loading: "lazy",
									className: "w-full aspect-[4/3] object-cover rounded-[32px] shadow-2xl ring-1 ring-cream/20"
								})
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-20 grid lg:grid-cols-[1fr_1.2fr] gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4",
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl lg:text-4xl leading-tight mb-6",
						children: "What this domain delivers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-plum-deep/75 leading-relaxed text-lg",
						children: d.overview
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4",
					children: "Focus Areas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid sm:grid-cols-2 gap-3",
					children: d.focus.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-5 rounded-2xl bg-card ring-1 ring-plum/10 hover:ring-pomegranate hover:-translate-y-0.5 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-pomegranate block mb-2",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium leading-snug",
							children: f
						})]
					}, f))
				})] })]
			}),
			d.researchHighlights?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4",
						children: "Research Highlights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl lg:text-4xl leading-tight",
						children: "Evidence-driven research themes."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid lg:grid-cols-2 gap-5",
					children: d.researchHighlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7 rounded-3xl bg-card ring-1 ring-plum/10 hover:ring-saffron transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl mb-3 leading-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-plum-deep/75 leading-relaxed mb-4",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm uppercase tracking-[0.18em] text-plum-deep/60",
								children: "Lead investigators"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-plum-deep",
								children: item.keyResearchers.join(" • ")
							})
						]
					}, item.title))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-sage-soft py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-between mb-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-basil font-bold mb-4",
							children: "Team"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl lg:text-4xl",
							children: ["Researchers ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "on this domain"
							})]
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
						children: d.team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-cream p-6 rounded-3xl ring-1 ring-plum/10 hover:shadow-xl transition-all flex items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-14 rounded-full bg-plum text-cream font-display italic text-xl grid place-items-center shrink-0",
								children: m.name.split(" ").slice(-1)[0]?.[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold leading-tight",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-plum-deep/55 mt-1",
								children: m.role
							})] })]
						}, m.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4",
						children: "Selected Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl lg:text-4xl mb-10",
						children: ["Translational ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "research in motion."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: d.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 rounded-3xl bg-card ring-1 ring-plum/10 hover:ring-saffron transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl mb-3 leading-tight",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-plum-deep/70 leading-relaxed",
								children: p.detail
							})]
						}, p.title))
					})
				]
			}),
			d.publications?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-soft py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-plum font-bold mb-4",
							children: "Publications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl lg:text-4xl mb-10",
							children: "Evidence & peer-reviewed outputs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: d.publications.map((pub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-3xl bg-white p-6 ring-1 ring-plum/10 text-plum-deep leading-relaxed",
								children: pub
							}, pub))
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/domains/$slug",
					params: { slug: next.slug },
					className: "block rounded-[32px] bg-plum-deep text-cream p-10 hover:bg-plum transition-colors group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-3",
							children: "Next Domain →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: next.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-5xl group-hover:translate-x-2 transition-transform",
							children: next.emoji
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var ResearchRoute = Route$8.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$9
});
var PublicationsRoute = Route$7.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => Route$9
});
var FacultyRoute = Route$6.update({
	id: "/faculty",
	path: "/faculty",
	getParentRoute: () => Route$9
});
var DomainsRoute = Route$5.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var DomainsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => DomainsRoute
});
var DomainsRouteChildren = {
	DomainsSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => DomainsRoute
	}),
	DomainsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	DomainsRoute: DomainsRoute._addFileChildren(DomainsRouteChildren),
	FacultyRoute,
	PublicationsRoute,
	ResearchRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
