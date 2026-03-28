import Link from "next/link";

import { WaitlistForm } from "~/app/_components/waitlist-form";

const featuredPlants = [
	{
		name: "Variegated Alocasia",
		note: "Collector releases with pink, cream, and green marbling.",
		status: "Current focus",
	},
	{
		name: "Rare Anthuriums",
		note: "Velvet leaves, dramatic veins, and slower-burn collector appeal.",
		status: "Day-one category",
	},
	{
		name: "Future Specimens",
		note: "Uncommon plants sourced for future Brisbane-first releases.",
		status: "Waitlist interest",
	},
] as const;

const trustPoints = [
	"Brisbane-first collector brand with a real grower identity behind it.",
	"Rare plant interest without making customers take on the sourcing complexity.",
	"Releases stay limited and waitlist-led instead of pretending everything is always in stock.",
] as const;

const howItWorks = [
	{
		step: "01",
		title: "Source with taste",
		body: "Plantr by Mingie focuses on uncommon alocasia, anthuriums, and high-interest collector plants that stand out from the usual local catalog.",
	},
	{
		step: "02",
		title: "Grow before release",
		body: "The priority is healthy, established plants and realistic release timing, not rushed hype or fragile stock.",
	},
	{
		step: "03",
		title: "Release to the waitlist",
		body: "Subscribers hear first when a plant is ready, with early access shaped around small, limited releases.",
	},
] as const;

const faqs = [
	{
		question: "What is Plantr by Mingie?",
		answer:
			"A Brisbane-first rare plant brand focused on variegated alocasia, rare anthuriums, and future collector releases for Australian plant enthusiasts.",
	},
	{
		question: "Can I buy plants from the website right now?",
		answer:
			"Not yet. The current site is for waitlist signup and release updates, not live ecommerce.",
	},
	{
		question: "Why join the waitlist?",
		answer:
			"The waitlist gets first access to releases, launch updates, and early notice when plants are actually ready.",
	},
	{
		question: "Will every release be fast?",
		answer:
			"No. Some collector plants take time, and the site is intentionally transparent about that. Quality matters more than speed.",
	},
	{
		question: "Is joining the waitlist a preorder?",
		answer:
			"No. Joining is free and carries no purchase obligation. It simply gives you earlier access when releases become real.",
	},
] as const;

function SectionEyebrow({ children }: { children: React.ReactNode }) {
	return (
		<p className="mb-4 font-medium text-black/50 text-xs uppercase tracking-[0.3em]">
			{children}
		</p>
	);
}

function PlantChip({
	tone,
	children,
}: {
	tone: "leaf" | "blush" | "cream";
	children: React.ReactNode;
}) {
	const toneClass =
		tone === "leaf"
			? "bg-[rgb(52_85_59_/_0.14)] text-[var(--color-leaf)]"
			: tone === "blush"
				? "bg-[rgb(242_201_211_/_0.45)] text-[#7e4351]"
				: "bg-[rgb(250_242_230_/_0.95)] text-[var(--color-soil)]";

	return (
		<span
			className={`inline-flex items-center rounded-full px-3 py-1 font-medium text-xs ${toneClass}`}
		>
			{children}
		</span>
	);
}

export default function HomePage() {
	return (
		<main className="page-shell overflow-x-hidden">
			<section className="mx-auto max-w-7xl px-5 pt-6 pb-10 sm:px-8 lg:px-10">
				<div className="flex items-center justify-between gap-6">
					<div>
						<p className="font-display text-2xl text-[var(--color-ink)] italic tracking-[0.02em]">
							Plantr
						</p>
						<p className="-mt-1 text-black/45 text-xs uppercase tracking-[0.28em]">
							by Mingie
						</p>
					</div>
					<Link
						className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-black/70 text-sm hover:border-[var(--color-leaf)] hover:text-[var(--color-leaf)]"
						href="https://www.instagram.com/mingie_plants/"
						rel="noreferrer"
						target="_blank"
					>
						View Instagram
					</Link>
				</div>

				<div className="mt-8 grid gap-8">
					<div className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_24px_80px_rgba(31,36,29,0.08)] backdrop-blur md:p-8 lg:p-10">
						<PlantChip tone="cream">
							Brisbane-first rare plant releases
						</PlantChip>
						<h1 className="mt-6 max-w-3xl font-display text-5xl text-[var(--color-ink)] leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
							Rare and variegated plants for Australian collectors.
						</h1>
						<p className="mt-6 max-w-2xl text-base text-black/72 leading-8 sm:text-lg">
							Plantr by Mingie brings hard-to-source collector plants into a
							softer, more trustworthy release experience. Follow the grower,
							join the waitlist, and hear first when rare plants are actually
							ready.
						</p>

						<div className="mt-8 max-w-2xl">
							<WaitlistForm />
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							<PlantChip tone="leaf">Variegated alocasia Australia</PlantChip>
							<PlantChip tone="blush">Rare anthuriums</PlantChip>
							<PlantChip tone="cream">Limited releases</PlantChip>
						</div>
					</div>

					<div className="specimen-grid rounded-[2rem] border border-black/8 bg-[rgb(255_255_255_/_0.56)] p-5 shadow-[0_24px_80px_rgba(31,36,29,0.08)] backdrop-blur md:p-6">
						<div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
							<article className="leaf-card rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,#28422c_0%,#17241a_100%)] p-5 text-white shadow-[0_18px_40px_rgba(31,36,29,0.22)]">
								<div className="flex items-center justify-between">
									<PlantChip tone="blush">Specimen focus</PlantChip>
									<span className="text-white/55 text-xs uppercase tracking-[0.25em]">
										Release-led
									</span>
								</div>
								<div className="mt-8 flex items-end gap-4">
									<div className="hero-leaf h-72 w-full border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" />
									<div className="mb-4 h-20 w-2 rounded-full bg-[rgb(114_85_59_/_0.9)]" />
								</div>
								<p className="mt-6 text-sm text-white/74 leading-7">
									Inspired by the pink variegation and lush contrast of the
									reference alocasia imagery, but built as a brand-forward
									launch surface rather than a single-product store.
								</p>
							</article>

							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
								<article className="rounded-[1.75rem] border border-black/8 bg-[rgb(250_242_230_/_0.88)] p-5">
									<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
										Why it works
									</p>
									<ul className="mt-5 space-y-4 text-black/72 text-sm leading-7">
										{trustPoints.map((point) => (
											<li
												className="rounded-2xl bg-white/68 px-4 py-3"
												key={point}
											>
												{point}
											</li>
										))}
									</ul>
								</article>

								<article className="rounded-[1.75rem] border border-black/8 bg-[rgb(219_231_213_/_0.72)] p-5">
									<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
										Waitlist outcome
									</p>
									<p className="mt-4 font-display text-4xl text-[var(--color-leaf)] leading-none">
										First access,
										<br />
										no pressure.
									</p>
									<p className="mt-4 text-black/68 text-sm leading-7">
										The page is designed to convert social traffic into owned
										demand without pretending stock is always live.
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
				<div className="grid gap-4 rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_20px_80px_rgba(31,36,29,0.06)] backdrop-blur md:grid-cols-3">
					<div className="rounded-[1.5rem] bg-[rgb(250_242_230_/_0.95)] p-5">
						<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
							Brisbane-led trust
						</p>
						<p className="mt-3 text-black/72 text-sm leading-7">
							A local grower voice and a collector-first point of view do more
							for legitimacy than pretending to be a polished nationwide store.
						</p>
					</div>
					<div className="rounded-[1.5rem] bg-[rgb(255_255_255_/_0.95)] p-5">
						<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
							Instagram as proof
						</p>
						<p className="mt-3 text-black/72 text-sm leading-7">
							The website is the conversion endpoint. Instagram remains the live
							proof layer for the plants, the process, and the eye behind the
							brand.
						</p>
					</div>
					<div className="rounded-[1.5rem] bg-[rgb(242_201_211_/_0.4)] p-5">
						<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
							Release-driven
						</p>
						<p className="mt-3 text-black/72 text-sm leading-7">
							Healthy, ready plants matter more than fast promises. Waitlists
							should build appetite without forcing deadlines.
						</p>
					</div>
				</div>
			</section>

			<section
				className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10"
				id="collector-plants"
			>
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
					<div className="max-w-xl">
						<SectionEyebrow>Collector categories</SectionEyebrow>
						<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							Built as a broader rare-plant brand from day one.
						</h2>
						<p className="mt-5 text-base text-black/72 leading-8">
							The homepage should not look like a one-plant microsite. It needs
							to frame Plantr by Mingie as a taste-driven collector brand with
							room to expand, while keeping the initial SEO focus tight enough
							to rank around variegated alocasia in Australia.
						</p>
					</div>

					<div className="grid gap-4 md:grid-cols-3">
						{featuredPlants.map((plant, index) => (
							<article
								className="rounded-[1.75rem] border border-black/8 bg-white/78 p-5 shadow-[0_18px_60px_rgba(31,36,29,0.05)] backdrop-blur"
								key={plant.name}
							>
								<PlantChip
									tone={index === 0 ? "blush" : index === 1 ? "leaf" : "cream"}
								>
									{plant.status}
								</PlantChip>
								<div
									className={`mt-5 h-48 rounded-[1.5rem] border border-black/8 ${
										index === 0
											? "bg-[linear-gradient(160deg,#1f3422_0%,#375b3f_48%,#f2c9d3_48%,#f4dfe5_100%)]"
											: index === 1
												? "bg-[linear-gradient(160deg,#1f1f1d_0%,#2f382f_48%,#dce8d6_100%)]"
												: "bg-[linear-gradient(160deg,#dfebd5_0%,#f8eee0_50%,#e6c7cf_100%)]"
									}`}
								/>
								<h3 className="mt-5 font-display text-3xl text-[var(--color-ink)] leading-none">
									{plant.name}
								</h3>
								<p className="mt-4 text-black/68 text-sm leading-7">
									{plant.note}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<SectionEyebrow>How it works</SectionEyebrow>
						<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							Less sourcing headache, more collector access.
						</h2>
						<p className="mt-5 text-base text-black/72 leading-8">
							The copy needs to make the value proposition obvious without
							leaning on risky or over-detailed import claims. The customer
							outcome is simple: a more credible path to rare plants, filtered
							through a Brisbane grower and released with better timing.
						</p>
					</div>
					<div className="grid gap-4">
						{howItWorks.map((item, index) => (
							<article
								className={`rounded-[1.75rem] border border-black/8 p-5 ${
									index === 1 ? "bg-[rgb(219_231_213_/_0.72)]" : "bg-white/80"
								}`}
								key={item.title}
							>
								<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
									{item.step}
								</p>
								<h3 className="mt-3 font-display text-3xl leading-none">
									{item.title}
								</h3>
								<p className="mt-4 text-black/70 text-sm leading-7">
									{item.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
				<div className="grid gap-6 rounded-[2rem] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(242,201,211,0.34))] p-6 shadow-[0_20px_80px_rgba(31,36,29,0.06)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
					<div>
						<SectionEyebrow>Expectation setting</SectionEyebrow>
						<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							Honest wait times build better demand than empty urgency.
						</h2>
						<p className="mt-5 text-base text-black/72 leading-8">
							This section exists to answer the three objections that matter
							most: legitimacy, plant health, and timing. The page should say
							clearly that waitlist access is not a preorder and that releases
							happen when plants are ready.
						</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<article className="rounded-[1.5rem] bg-white/78 p-5">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Legitimacy
							</p>
							<p className="mt-4 text-black/70 text-sm leading-7">
								Built around a real grower identity, a real Instagram presence,
								and real collector taste rather than anonymous ecommerce copy.
							</p>
						</article>
						<article className="rounded-[1.5rem] bg-white/78 p-5">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Plant health
							</p>
							<p className="mt-4 text-black/70 text-sm leading-7">
								Healthy, established plants should be the release benchmark
								wherever possible. Quality comes before speed.
							</p>
						</article>
						<article className="rounded-[1.5rem] bg-white/78 p-5 md:col-span-2">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Waitlist promise
							</p>
							<p className="mt-4 text-black/70 text-sm leading-7">
								Joining the waitlist means first access to releases and updates.
								It does not mean a purchase obligation, a fixed date, or a hard
								sell.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
				<div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
					<div className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_20px_80px_rgba(31,36,29,0.05)] backdrop-blur lg:p-8">
						<SectionEyebrow>Why join</SectionEyebrow>
						<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							Join for early access, stay for the collector eye behind the
							brand.
						</h2>
						<div className="mt-8 grid gap-4 md:grid-cols-2">
							<div className="rounded-[1.5rem] bg-[rgb(250_242_230_/_0.9)] p-5">
								<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
									Waitlist benefit
								</p>
								<p className="mt-4 text-black/72 text-sm leading-7">
									Hear about releases before they go wider and get closer to the
									top of the queue when stock is genuinely limited.
								</p>
							</div>
							<div className="rounded-[1.5rem] bg-[rgb(219_231_213_/_0.72)] p-5">
								<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
									Brand rhythm
								</p>
								<p className="mt-4 text-black/72 text-sm leading-7">
									The email list exists to support releases, not to drown
									subscribers in generic newsletters.
								</p>
							</div>
						</div>
						<div className="mt-8">
							<WaitlistForm />
						</div>
					</div>

					<div className="rounded-[2rem] border border-black/8 bg-[rgb(31_36_29_/_0.94)] p-6 text-white shadow-[0_20px_80px_rgba(31,36,29,0.18)] lg:p-8">
						<SectionEyebrow>Instagram bridge</SectionEyebrow>
						<h2 className="font-display text-4xl text-white leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							The website converts. Instagram keeps the plants alive.
						</h2>
						<p className="mt-5 text-base text-white/72 leading-8">
							Plantr by Mingie should feel like an extension of the Instagram
							account rather than a disconnected startup shell. Plant imagery,
							soft daylight tones, and collector-first language should carry
							across both surfaces.
						</p>
						<div className="mt-8 space-y-4">
							<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
								<p className="text-white/50 text-xs uppercase tracking-[0.26em]">
									Proof layer
								</p>
								<p className="mt-3 text-sm text-white/72 leading-7">
									Use Instagram to show progress, foliage detail, and the human
									judgment behind each release.
								</p>
							</div>
							<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
								<p className="text-white/50 text-xs uppercase tracking-[0.26em]">
									Conversion endpoint
								</p>
								<p className="mt-3 text-sm text-white/72 leading-7">
									Use the homepage for the single action that matters now:
									getting serious interest onto the email list.
								</p>
							</div>
						</div>
						<Link
							className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 font-medium text-sm text-white hover:-translate-y-0.5 hover:bg-white/8"
							href="https://www.instagram.com/mingie_plants/"
							rel="noreferrer"
							target="_blank"
						>
							Follow @mingie_plants
						</Link>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
				<div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<SectionEyebrow>FAQ</SectionEyebrow>
						<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
							Questions the page should answer before anyone hesitates.
						</h2>
					</div>
					<div className="grid gap-4">
						{faqs.map((item) => (
							<article
								className="rounded-[1.5rem] border border-black/8 bg-white/78 p-5 shadow-[0_12px_40px_rgba(31,36,29,0.04)]"
								key={item.question}
							>
								<h3 className="font-medium text-[var(--color-ink)] text-lg">
									{item.question}
								</h3>
								<p className="mt-3 text-black/70 text-sm leading-7">
									{item.answer}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pt-6 pb-10 text-black/58 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
				<p>
					Plantr by Mingie. Brisbane-first rare plant releases for collectors.
				</p>
				<div className="flex flex-wrap items-center gap-4">
					<Link className="hover:text-[var(--color-leaf)]" href="/privacy">
						Privacy
					</Link>
					<Link
						className="hover:text-[var(--color-leaf)]"
						href="https://www.instagram.com/mingie_plants/"
						rel="noreferrer"
						target="_blank"
					>
						Instagram
					</Link>
				</div>
			</footer>
		</main>
	);
}
