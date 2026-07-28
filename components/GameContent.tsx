import Image from "next/image";
import FaqList from "./FaqList";
import { gameFaqs } from "@/lib/game-content";

const modeCards = [
  {
    number: "01",
    title: "Tournament",
    text: "Work through a run of CPU opponents. Wins are the main route to unlocking more wrestlers and gear.",
  },
  {
    number: "02",
    title: "Two players, same PC",
    text: "Share one keyboard for a quick local match. The split control layout keeps both players on the same screen.",
  },
  {
    number: "03",
    title: "Online game",
    text: "Host a room or join a friend with the room code shown in the game menu.",
  },
];

const playSteps = [
  {
    title: "Choose a mode",
    text: "Tournament is the simplest place to learn. Use the local or online options when you want a head-to-head match.",
  },
  {
    title: "Control the space",
    text: "Move in and out of range instead of holding the action key. A missed attack gives the other wrestler an opening.",
  },
  {
    title: "Set up the pin",
    text: "Once the opponent is worn down and on the mat, double jump to attempt a pin. Going too early makes the escape easier.",
  },
];

export default function GameContent() {
  return (
    <article>
      <section className="content-section" aria-labelledby="about-game">
        <p className="section-kicker">About the game</p>
        <h2 id="about-game" className="section-title">
          A quick wrestling game with more timing than it first appears
        </h2>
        <div className="prose-copy mt-5 space-y-4">
          <p>
            Wrestle Bros is an arcade wrestling game from Blue Wizard Digital.
            Matches use a small set of controls—movement, jump, block, and one
            main action—so a new player can get into a bout without learning a
            long move list.
          </p>
          <p>
            The simple layout does not make every match automatic. Positioning,
            attack timing, and knowing when to go for a pin matter, especially
            against a player who knows how to use the ropes and recover.
          </p>
        </div>

        <Image
          src="/wrestlebros-desc-01.png"
          alt="Two wrestlers facing each other in the Wrestle Bros ring"
          width={1714}
          height={970}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="mt-7 h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>

      <section
        id="how-to-play"
        className="content-section content-section--tinted scroll-mt-24"
        aria-labelledby="how-to-play-title"
      >
        <p className="section-kicker">How to play</p>
        <h2 id="how-to-play-title" className="section-title">
          Win the exchange, then go for the pin
        </h2>
        <p className="prose-copy mt-5 max-w-3xl">
          Your aim is to wear the other wrestler down and keep their shoulders
          on the mat. The action button changes with the situation, so good
          spacing and timing are more useful than pressing it continuously.
        </p>

        <ol className="mt-7 grid gap-4 md:grid-cols-3">
          {playSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-heading text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 font-heading text-lg font-extrabold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>

        <Image
          src="/wrestlebros-desc-02.png"
          alt="A successful suplex during a Wrestle Bros match"
          width={1714}
          height={994}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="mt-7 h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>

      <section className="content-section" aria-labelledby="game-modes">
        <p className="section-kicker">Ways to play</p>
        <h2 id="game-modes" className="section-title">
          Wrestle Bros game modes
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {modeCards.map((mode) => (
            <div key={mode.title} className="rounded-2xl bg-ink p-5 text-white">
              <span className="font-heading text-xs font-black tracking-[0.2em] text-orange-300">
                {mode.number}
              </span>
              <h3 className="mt-3 font-heading text-xl font-extrabold">{mode.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{mode.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="controls"
        className="content-section content-section--tinted scroll-mt-24"
        aria-labelledby="controls-title"
      >
        <p className="section-kicker">Keyboard guide</p>
        <h2 id="controls-title" className="section-title">
          Wrestle Bros controls
        </h2>
        <p className="prose-copy mt-5">
          Click inside the game first so the iframe receives your keyboard input.
          The game shows the final mapping after you choose a mode.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <ControlCard
            badge="Solo"
            badgeClass="bg-primary"
            rows={[
              ["Move", "A / D or ← / →"],
              ["Jump", "W or ↑"],
              ["Block", "S or ↓"],
              ["Action", "Space or Enter"],
              ["Pin", "Double jump"],
            ]}
          />
          <ControlCard
            badge="Local 2P"
            badgeClass="bg-secondary"
            rows={[
              ["Player 1 move", "W A S D"],
              ["Player 1 action", "G"],
              ["Player 2 move", "Arrow Keys"],
              ["Player 2 action", "L"],
            ]}
          />
        </div>
      </section>

      <section className="content-section" aria-labelledby="quick-tips">
        <p className="section-kicker">Match notes</p>
        <h2 id="quick-tips" className="section-title">
          Four useful Wrestle Bros tips
        </h2>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
          {[
            "Use short bursts of movement. Running straight at the opponent makes your next attack easy to read.",
            "Block when you expect an attack, then answer while the other wrestler is still recovering.",
            "Use the ropes to change your movement and create a different approach angle.",
            "Wait until the opponent is properly down before attempting the double-jump pin.",
          ].map((tip) => (
            <li key={tip} className="flex gap-3 rounded-xl border border-slate-200 p-4">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="faq"
        className="content-section content-section--tinted scroll-mt-24"
        aria-labelledby="faq-title"
      >
        <p className="section-kicker">Common questions</p>
        <h2 id="faq-title" className="section-title">
          Wrestle Bros FAQ
        </h2>
        <div className="mt-7">
          <FaqList faqs={gameFaqs} />
        </div>
      </section>
    </article>
  );
}

function ControlCard({
  badge,
  badgeClass,
  rows,
}: {
  badge: string;
  badgeClass: string;
  rows: Array<[string, string]>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="flex items-center gap-3 font-heading text-lg font-extrabold text-ink">
        <span className={`rounded-lg px-2.5 py-1 text-xs font-black text-white ${badgeClass}`}>
          {badge}
        </span>
        Controls
      </h3>
      <dl className="mt-4 divide-y divide-slate-100 text-sm">
        {rows.map(([label, keys]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3">
            <dt className="text-slate-700">{label}</dt>
            <dd>
              <kbd className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs font-bold text-ink">
                {keys}
              </kbd>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
