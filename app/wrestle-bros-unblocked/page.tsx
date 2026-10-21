import Image from "next/image";
import Link from "next/link";
import ControlsTable from "@/components/ControlsTable";
import GuidePage from "@/components/GuidePage";
import SchemaMarkup from "@/components/SchemaMarkup";
import { soloControls, twoPlayerControls } from "@/lib/game-content";
import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";

const title = "Wrestle Bros Unblocked – Play Free in Your Browser";
const description =
  "Play Wrestle Bros unblocked in your browser. No download or account needed. Check controls, game modes, and fixes for common loading problems.";
const path = "/wrestle-bros-unblocked";

export const metadata = buildMetadata({ title, description, path });

const faqs = [
  {
    question: "Is Wrestle Bros unblocked free to play?",
    answer:
      "Yes. The version on this page opens in a browser and does not require a download, account, or payment. The site is supported by advertising.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. You need a browser with JavaScript enabled and a keyboard for the standard controls. A desktop or laptop is the most reliable setup.",
  },
  {
    question: "Can I play Wrestle Bros unblocked on a school Chromebook?",
    answer:
      "It may work if the network allows both this page and the embedded game domain. This site does not provide a proxy or a way to bypass school filters, so availability depends on the network you are using.",
  },
  {
    question: "Why is the game frame blank?",
    answer:
      "The page can load while the embedded game does not. Refresh once, allow scripts for the game domain, or try another browser. If the rest of the page works and only the frame is empty, the game provider may be temporarily unavailable.",
  },
  {
    question: "Can two players use one keyboard?",
    answer:
      "Yes. Choose the local two-player mode, click inside the game, and use WASD plus G for Player 1 and the Arrow Keys plus L for Player 2.",
  },
  {
    question: "Is this the official Wrestle Bros website?",
    answer:
      "No. WrestleBros.xyz is an independent play-and-guide site. Wrestle Bros was developed by Blue Wizard Digital, and the playable frame loads from the game provider’s domain.",
  },
] as const;

const modes = [
  {
    title: "Tournament",
    text: "A run of CPU opponents. This is the best place to learn pin timing without another player, and wins unlock more wrestlers and gear.",
  },
  {
    title: "Local two-player",
    text: "One keyboard, two wrestlers. Player 1 uses WASD and G; Player 2 uses the Arrow Keys and L. Use fullscreen so both players can see the ring.",
  },
  {
    title: "Online game",
    text: "Host a room or join one with the code shown in the menu. A stable connection helps, but learn the controls in Tournament before taking a match online.",
  },
];

export default function WrestleBrosUnblockedPage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <GuidePage
        kicker="Play in your browser"
        title={title}
        description={description}
        path={path}
        intro="Wrestle Bros is a free physics-based wrestling game from Blue Wizard Digital, and this page loads it directly in your browser. No download, no account, and no install screen: choose a mode, click inside the game frame, and use the keyboard to play."
        faqTitle="Wrestle Bros unblocked FAQ"
        faqs={faqs}
        playFirst
      >
        <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
          What “unblocked” means on this page
        </h2>
        <p className="prose-copy mt-4">
          On this site, “unblocked” means the game runs in an ordinary browser tab
          instead of an installed app. There is no download step and no account
          wall. Whether the page opens on a school or workplace network depends on
          that network’s own rules; this site does not provide a proxy, VPN, or
          filter-bypass tool. If the page is blocked where you are, the same game
          may be available on another network or through the developer’s official
          distribution.
        </p>
        <p className="prose-copy mt-4">
          The playable area is an embedded frame served by the Wrestle Bros game
          domain. If that provider is down, the frame can be empty even when this
          page loads normally. WrestleBros.xyz is an independent play-and-guide
          site, not the developer’s official website. The notes below cover the
          controls and the most common loading fixes, so you can tell a network
          problem apart from a game problem.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
          How to start a match
        </h2>
        <p className="prose-copy mt-4">
          The game does not need a tutorial screen. Pick a mode, give the frame
          keyboard focus, and learn the two or three keys that matter. The first
          match is usually more about spacing than about attacking.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700">
          <li>
            <strong className="text-ink">Pick a mode.</strong> Tournament is the
            simplest place to learn because the CPU gives you repeated chances to
            practice the pin. Local two-player is the fastest way to start a
            head-to-head match. Online play needs a room code and a stable
            connection.
          </li>
          <li>
            <strong className="text-ink">Click inside the game.</strong> The frame
            needs keyboard focus. If your keys scroll the page instead of moving
            the wrestler, click the ring once and try again.
          </li>
          <li>
            <strong className="text-ink">Start with movement and block.</strong>{" "}
            Move in short bursts, block when you expect an attack, and answer
            while the other wrestler is recovering. Do not hold the action key and
            hope for the best.
          </li>
        </ol>

        <h3 className="mt-8 font-heading text-xl font-extrabold text-ink">
          Solo and two-player controls at a glance
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-slate-700">Solo</p>
            <ControlsTable label="Wrestle Bros solo controls" rows={soloControls} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-700">Local two-player</p>
            <ControlsTable
              label="Wrestle Bros local two-player controls"
              rows={twoPlayerControls}
            />
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          For what each key does and what to check when the game ignores your
          keyboard, read the{" "}
          <Link
            href="/wrestle-bros-controls"
            className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            full Wrestle Bros controls guide
          </Link>
          .
        </p>

        <figure className="mt-8">
          <Image
            src="/wrestlebros-desc-01.png"
            alt="Two wrestlers facing each other in the Wrestle Bros ring"
            width={1714}
            height={970}
            sizes="(max-width: 768px) 100vw, 896px"
            className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
          />
          <figcaption className="mt-3 text-center text-xs text-slate-500">
            A solo match in progress. The clock and health bars sit at the top;
            the ropes are part of the movement space, not just background.
          </figcaption>
        </figure>

        <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
          Which mode should you play first?
        </h2>
        <p className="prose-copy mt-4">
          If you have never played before, start with Tournament. If a friend is
          sitting next to you, local two-player is quicker. Online play is better
          once you can move, block, and recover without looking at the keyboard.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="font-heading text-lg font-extrabold text-ink">
                {mode.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{mode.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">
          Tournament is also the best place to practice the finish. See{" "}
          <Link
            href="/wrestle-bros-how-to-pin"
            className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            how to pin in Wrestle Bros
          </Link>{" "}
          for the timing sequence.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
          If the game does not load
        </h2>
        <p className="prose-copy mt-4">
          Most empty-frame problems come from focus, script blocking, or the game
          provider rather than from the page itself. Work through these checks in
          order.
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
          <li>
            <strong className="text-ink">Click inside the frame.</strong> If the
            page scrolls when you press a movement key, the game does not have
            keyboard focus yet.
          </li>
          <li>
            <strong className="text-ink">Refresh once.</strong> A single refresh
            clears many temporary loading failures, especially after a network
            change.
          </li>
          <li>
            <strong className="text-ink">Allow the game domain.</strong> Script
            blockers, privacy extensions, and strict browser modes can block an
            embedded frame or the scripts it needs.
          </li>
          <li>
            <strong className="text-ink">Try fullscreen or another browser.</strong>{" "}
            Fullscreen gives the frame more room and makes keyboard focus easier to
            see. If fullscreen fails, try a current version of Chrome, Edge, or
            Firefox.
          </li>
          <li>
            <strong className="text-ink">Check the network policy.</strong> On a
            school or workplace network, the page itself may be filtered. In that
            case the fix is on the network side, not in the game.
          </li>
          <li>
            <strong className="text-ink">Wait if only the frame is empty.</strong>{" "}
            The embedded game provider can be temporarily unavailable. If the rest
            of this page loads and the frame stays blank, try again later.
          </li>
        </ul>
        <p className="prose-copy mt-4">
          If the controls work but the match is not going your way, the problem is
          usually spacing rather than input lag. Block first, move out of range,
          and look for a chance to put the opponent on the mat before attempting a
          pin.
        </p>
      </GuidePage>
    </>
  );
}
