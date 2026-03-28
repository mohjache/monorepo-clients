import Link from "next/link";

import { WaitlistForm } from "~/app/_components/waitlist-form";

const featuredPlants = [
	{
		name: "Pink variegated forms",
		note: "Highly expressive alocasias with dramatic pink, cream, and green marbling.",
		status: "Current focus",
	},
	{
		name: "Collector-grade foliage",
		note: "Rare alocasia selections chosen for standout shape, texture, and variegation.",
		status: "Quality-led",
	},
	{
		name: "Small-batch progress",
		note: "Rare alocasia updates shaped around growth, readiness, and presentation.",
		status: "Waitlist interest",
	},
] as const;

const trustPoints = [
	"Brisbane-first collector brand with a real grower identity behind it.",
	"Rare alocasias grown with patience, care, and close attention over time.",
	"Updates are shaped around genuine progress instead of pushing people toward a sale.",
] as const;

const howItWorks = [
	{
		step: "01",
		title: "Select exceptional alocasias",
		body: "Plantr by Mingie stays tightly focused on rare alocasias with standout variegation, strong shape, and collector appeal.",
	},
	{
		step: "02",
		title: "Grow slowly and observe closely",
		body: "Each update should be shaped by patience, plant stability, and careful attention rather than speed.",
	},
	{
		step: "03",
		title: "Share progress",
		body: "Subscribers receive thoughtful updates as plants develop, mature, and reach a standard worth showing.",
	},
] as const;

const faqs = [
	{
		question: "What is Plantr by Mingie?",
		answer:
			"A Brisbane-first brand focused on the growing journey of rare alocasias for Australian collectors.",
	},
	{
		question: "Can I buy plants from the website right now?",
		answer:
			"Not yet. The current site is for following the journey and receiving updates, not live ecommerce.",
	},
	{
		question: "Why join the waitlist?",
		answer:
			"It is a simple way to follow the journey, see meaningful progress, and stay close to future updates without any pressure to buy.",
	},
	{
		question: "Will every update be frequent?",
		answer:
			"No. Some collector plants take time, and the site is intentionally transparent about that. Meaningful progress matters more than speed.",
	},
	{
		question: "Is joining the waitlist a preorder?",
		answer:
			"No. Joining is free and carries no purchase obligation. It simply gives you a calmer way to stay close to the journey as progress becomes real.",
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
	tone: "leaf" | "blush" | "blush-strong" | "cream";
	children: React.ReactNode;
}) {
	const toneClassMap = {
		leaf: "bg-[rgb(52_85_59_/_0.14)] text-[var(--color-leaf)]",
		blush: "bg-[rgb(242_201_211_/_0.45)] text-[#7e4351]",
		"blush-strong":
			"bg-[rgb(242_201_211_/_0.92)] text-[#5f2d38] shadow-[0_10px_24px_rgba(20,14,16,0.18)]",
		cream: "bg-[rgb(250_242_230_/_0.95)] text-[var(--color-soil)]",
	} as const;
	const toneClass = toneClassMap[tone];

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
							Brisbane-first rare alocasia journey
						</PlantChip>
						<h1 className="mt-6 max-w-3xl font-display text-5xl text-[var(--color-ink)] leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
							Rare alocasias, grown with patience.
						</h1>
						<p className="mt-6 max-w-2xl text-base text-black/72 leading-8 sm:text-lg">
							Plantr by Mingie is a Brisbane-based home for people interested in
							the growing journey of rare alocasias. Follow along for thoughtful
							updates, visible care, and a calmer pace without the pressure of a
							hard sell.
						</p>

						<div className="mt-8 max-w-2xl">
							<WaitlistForm />
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							<PlantChip tone="leaf">Variegated alocasia Australia</PlantChip>
							<PlantChip tone="blush">Patient growing approach</PlantChip>
							<PlantChip tone="cream">Thoughtful growing updates</PlantChip>
						</div>
					</div>

					<div className="specimen-grid rounded-[2rem] border border-black/8 bg-[rgb(255_255_255_/_0.56)] p-5 shadow-[0_24px_80px_rgba(31,36,29,0.08)] backdrop-blur md:p-6">
						<div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
							<article className="leaf-card rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,#28422c_0%,#17241a_100%)] p-5 text-white shadow-[0_18px_40px_rgba(31,36,29,0.22)]">
								<div className="flex items-center justify-between">
									<PlantChip tone="blush-strong">Specimen focus</PlantChip>
									<span className="text-white/55 text-xs uppercase tracking-[0.25em]">
										Progress-led
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
										Signup outcome
									</p>
									<p className="mt-4 font-display text-4xl text-[var(--color-leaf)] leading-none">
										Stay close,
										<br />
										no pressure.
									</p>
									<p className="mt-4 text-black/68 text-sm leading-7">
										The page is designed to capture genuine interest in the
										growing journey without forcing a buying decision.
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
							Visible care
						</p>
						<p className="mt-3 text-black/72 text-sm leading-7">
							Every update should reflect real progress, careful growing, and
							close attention to how each plant is developing over time.
						</p>
					</div>
					<div className="rounded-[1.5rem] bg-[rgb(242_201_211_/_0.4)] p-5">
						<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
							Patience-led
						</p>
						<p className="mt-3 text-black/72 text-sm leading-7">
							Healthy, ready plants matter more than fast promises. Email
							updates should build trust without forcing deadlines.
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
							A narrow focus can be stronger than a broad catalog.
						</h2>
						<p className="mt-5 text-base text-black/72 leading-8">
							The homepage should stay tightly focused on rare alocasias so the
							brand promise is clear, the SEO target stays sharp, and the
							waitlist attracts the right kind of collector interest.
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
							Slower updates. Stronger trust.
						</h2>
						<p className="mt-5 text-base text-black/72 leading-8">
							The value proposition should focus on patience, plant care, and
							visible progress. The customer outcome is simple: better rare
							alocasias grown with more care and less rushed risk.
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
							clearly that waitlist access is not a preorder and that updates
							come when plants are genuinely worth sharing.
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
								Healthy, established plants should be the benchmark wherever
								possible. Care comes before speed.
							</p>
						</article>
						<article className="rounded-[1.5rem] bg-white/78 p-5 md:col-span-2">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Waitlist promise
							</p>
							<p className="mt-4 text-black/70 text-sm leading-7">
								Signing up means following the journey and receiving updates. It
								does not mean a purchase obligation, a fixed date, or a hard
								sell.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
				<div className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_20px_80px_rgba(31,36,29,0.05)] backdrop-blur lg:p-8">
					<SectionEyebrow>Why join</SectionEyebrow>
					<h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
						Follow the journey of rare alocasias.
					</h2>
					<div className="mt-8 grid gap-4 md:grid-cols-2">
						<div className="rounded-[1.5rem] bg-[rgb(250_242_230_/_0.9)] p-5">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Why sign up
							</p>
							<p className="mt-4 text-black/72 text-sm leading-7">
								Stay connected to meaningful progress, plant development, and
								the standards behind what gets shared.
							</p>
						</div>
						<div className="rounded-[1.5rem] bg-[rgb(219_231_213_/_0.72)] p-5">
							<p className="text-black/40 text-xs uppercase tracking-[0.26em]">
								Quality promise
							</p>
							<p className="mt-4 text-black/72 text-sm leading-7">
								Email updates should reflect a higher bar for health, readiness,
								and presentation before anything is pushed forward.
							</p>
						</div>
					</div>
					<div className="mt-8">
						<WaitlistForm />
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
					Plantr by Mingie. Brisbane-first rare alocasia updates for collectors.
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
