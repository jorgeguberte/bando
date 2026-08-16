import Link from 'next/link';
import { ArrowRight, BrainCircuit, GitBranch, ShieldCheck, Workflow } from 'lucide-react';

const pillars = [
  { icon: BrainCircuit, title: 'Epistemic by construction', body: 'Claims, attestations, beliefs, and evidence remain distinct values with explicit provenance.' },
  { icon: ShieldCheck, title: 'Authority outside the prompt', body: 'Capabilities and atomic gates decide what may affect the world. Text cannot grant authority.' },
  { icon: Workflow, title: 'Agent-native runtime', body: 'Intent frames, structured delegation, budgets, settlement, and convergence are runtime concepts.' },
  { icon: GitBranch, title: 'A lowering contract', body: 'SOMA-IR preserves types, effects, authority, lineage, gates, budgets, and concurrency.' },
];

export default function HomePage() {
  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative border-b px-6 py-24 md:py-32">
        <div className="soma-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center rounded-full border bg-fd-background/70 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">Development codename · Specification in progress</div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">A programming model for agents that must reason, delegate, and act safely.</h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-fd-muted-foreground md:text-xl">SOMA makes uncertainty, authority, resource ownership, and effects visible to the language and runtime—not hidden inside prompts and framework glue.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/docs" className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground hover:opacity-90">Read the specification <ArrowRight className="size-4" /></Link>
            <Link href="/docs/reference/status" className="inline-flex items-center rounded-full border bg-fd-background px-5 py-2.5 text-sm font-medium hover:bg-fd-accent">Stability matrix</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-px border-x bg-fd-border md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, body }) => (
          <article key={title} className="bg-fd-background p-8 md:p-10">
            <Icon className="mb-5 size-5 text-fd-primary" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 max-w-md leading-7 text-fd-muted-foreground">{body}</p>
          </article>
        ))}
      </section>
      <section className="border-t px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div><p className="text-sm font-medium text-fd-primary">The central separation</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Permission is not scheduling.</h2><p className="mt-4 leading-7 text-fd-muted-foreground">The type and capability system answers whether an operation may happen. The SOMA-VM decides which eligible operation should happen next.</p></div>
          <pre className="overflow-x-auto rounded-2xl border bg-fd-card p-6 text-sm leading-7 text-fd-card-foreground"><code>{`Language semantics
  types · claims · attestations
  effects · capabilities · gates

SOMA-VM
  IntentFrame · delegate · await
  budgets · settlement · ConvergeFrame`}</code></pre>
        </div>
      </section>
    </main>
  );
}
