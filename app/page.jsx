const features = [
    {
        title: 'Slimme contentkalender',
        description:
            'Genereer in minuten een maandplanning met lokale thema\'s, feestdagen en acties voor jouw buurt.',
    },
    {
        title: 'Posts op maat per platform',
        description:
            'Maak automatisch varianten voor Instagram, Facebook, TikTok en LinkedIn met de juiste tone-of-voice.',
    },
    {
        title: 'Foto- en video-ideeën',
        description:
            'Krijg concrete scripts, hooks en shotlists zodat je team direct content kan opnemen in de zaak.',
    },
    {
        title: 'Inbox assistent',
        description:
            'Ontvang snelle, vriendelijke conceptantwoorden op DM\'s en reviews, inclusief escalatie bij klachten.',
    },
    {
        title: 'Lokale advertentieboost',
        description:
            'Laat AI advertentieteksten en doelgroepen voorstellen voor klanten binnen jouw straal.',
    },
    {
        title: 'Resultatenrapport per week',
        description:
            'Zie in één dashboard welke content omzet, reserveringen of winkelbezoeken oplevert.',
    },
];

const workflow = [
    'Vertel kort wat je bedrijf doet, wie je doelgroep is en welke regio je bedient.',
    'Kies jouw merkstem (bijv. professioneel, speels of premium) en postfrequentie.',
    'De assistent maakt direct een contentplan + captions + hashtags + CTA\'s.',
    'Plan of publiceer berichten, monitor reacties en optimaliseer automatisch elke week.',
];

export default function Page() {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 py-6">
            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-emerald-500/10 p-8 sm:p-12">
                <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                    AI Social Media Assistant
                </p>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                    Meer lokale klanten met minder social media werk
                </h1>
                <p className="mb-8 max-w-3xl text-lg text-gray-200">
                    Deze AI-assistent helpt lokale bedrijven met contentideeën, captions, planning en community management
                    — zodat jij zichtbaar blijft terwijl je focust op je zaak.
                </p>
                <div className="flex flex-wrap gap-3">
                    <button className="btn btn-lg">Start gratis demo</button>
                    <button className="btn btn-lg btn-outline">Bekijk voorbeeldweek</button>
                </div>
            </section>

            <section>
                <h2 className="mb-6 text-2xl font-semibold">Wat de assistent voor je doet</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                            <p className="text-sm text-gray-300">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8">
                <h2 className="mb-4 text-2xl font-semibold">Zo werkt het in 4 stappen</h2>
                <ol className="space-y-3 text-gray-200">
                    {workflow.map((step, index) => (
                        <li key={step} className="flex gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-sm text-cyan-200">
                                {index + 1}
                            </span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
