import Link from "next/link";
import ControlsTable from "@/components/ControlsTable";
import GuidePage from "@/components/GuidePage";
import { soloControls, twoPlayerControls } from "@/lib/game-content";
import { buildMetadata } from "@/lib/seo";

const title = "Wrestle Bros Controls – Solo & 2 Player Keyboard Guide";
const description =
  "Complete Wrestle Bros controls for solo and local two-player mode. Keyboard maps, pin controls, and fixes when the game does not respond.";
const path = "/wrestle-bros-controls";

export const metadata = buildMetadata({ title, description, path });

const faqs = [
  {
    question: "What are the controls in Wrestle Bros?",
    answer:
      "Solo play uses A and D or the Left and Right Arrow keys to move, W or Up to jump, S or Down to block, and Space or Enter for the main action. A pin is attempted with a double jump.",
  },
  {
    question: "What are the two-player controls?",
    answer:
      "Player 1 moves with W, A, S, and D and acts with G. Player 2 uses the Arrow Keys to move and L to act. Both players share one keyboard in local two-player mode.",
  },
  {
    question: "How do you jump in Wrestle Bros?",
    answer:
      "Press W or the Up Arrow in solo play. In local two-player mode, Player 1 presses W and Player 2 presses the Up Arrow. Press jump twice in a row to attempt a pin on a downed opponent.",
  },
  {
    question: "How do you block?",
    answer:
      "Press S or the Down Arrow in solo play. Blocking is most useful when you expect an attack; holding it constantly can leave you unable to answer while the opponent recovers.",
  },
  {
    question: "Why does the page scroll when I press the keys?",
    answer:
      "The game frame does not have keyboard focus. Click once inside the playable area, then try the keys again. Using the fullscreen button usually makes it obvious where the focus sits.",
  },
  {
    question: "Can I change the keyboard layout?",
    answer:
      "This page does not include a key remapper, so use the default layout listed above. On a non-QWERTY keyboard, the printed labels may not match the keys the game expects.",
  },
] as const;

export default function WrestleBrosControlsPage() {
  return (
    <GuidePage
      kicker="Keyboard reference"
      title={title}
      description={description}
      path={path}
      intro="Wrestle Bros is played with a small set of keys: move, jump, block, and one action key. This page lists the solo and local two-player layouts, explains what each input does, and covers the usual reasons the game ignores the keyboard."
      faqTitle="Wrestle Bros controls FAQ"
      faqs={faqs}
    >
      <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Solo controls
      </h2>
      <p className="prose-copy mt-4">
        Solo play against the CPU uses one side of the keyboard. The same layout
        applies in Tournament and in casual matches. You do not need the mouse
        once a match has started.
      </p>
      <ControlsTable label="Wrestle Bros solo keyboard controls" rows={soloControls} />

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Local two-player controls
      </h2>
      <p className="prose-copy mt-4">
        Local two-player mode puts both wrestlers on one keyboard. Player 1 uses
        the left-hand cluster, while Player 2 uses the Arrow Keys and the L key.
        Sit slightly to the left and right of the keyboard so neither player is
        reaching across the other.
      </p>
      <ControlsTable
        label="Wrestle Bros local two-player keyboard controls"
        rows={twoPlayerControls}
      />
      <p className="mt-4 text-sm leading-6 text-slate-600">
        In two-player mode, Player 1 jumps with W and Player 2 jumps with the Up
        Arrow. A double jump with the same key attempts a pin. If both players
        press keys at once and nothing happens, check that the game frame still
        has focus.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        What each key does
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-heading text-lg font-extrabold text-ink">Move</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A and D or the Left and Right Arrow keys walk your wrestler along the
            ring. Short taps are easier to control than long holds, especially near
            the ropes.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-heading text-lg font-extrabold text-ink">Jump</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            W or the Up Arrow leaves the mat. Jumping is also the second half of a
            pin attempt: press jump twice when the opponent is down.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-heading text-lg font-extrabold text-ink">Block</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            S or the Down Arrow guards. Blocking is a response to pressure, not a
            default stance. Drop the block when the opponent backs off so you can
            move or attack again.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-heading text-lg font-extrabold text-ink">Action</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Space or Enter performs the main action in solo play. In local
            two-player mode, the action keys are G for Player 1 and L for Player 2.
          </p>
        </div>
      </div>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        How to pin with the keyboard
      </h2>
      <p className="prose-copy mt-4">
        The pin is not a separate key. Wear the opponent down until they are on the
        mat, stand close, then jump twice with your jump key. The second jump starts
        the pin attempt. Starting it while the opponent is still standing or
        recovering wastes the chance.
      </p>
      <p className="prose-copy mt-4">
        The full sequence, timing cues, and common mistakes are covered in{" "}
        <Link
          href="/wrestle-bros-how-to-pin"
          className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          how to pin in Wrestle Bros
        </Link>
        .
      </p>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        When the controls do not respond
      </h2>
      <p className="prose-copy mt-4">
        Most “broken controls” reports are focus problems. The page keeps scrolling
        because the keys are going to the browser, not to the game. Work through
        these checks in order before assuming the game itself is faulty.
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
        <li>
          <strong className="text-ink">Click inside the game frame.</strong> A
          single click on the ring restores keyboard focus after you scroll, switch
          tabs, or click outside the frame.
        </li>
        <li>
          <strong className="text-ink">Use fullscreen.</strong> The fullscreen
          button gives the frame more room and removes most of the surrounding page
          from the click target.
        </li>
        <li>
          <strong className="text-ink">Turn off modifier keys.</strong> Caps Lock
          and a held Shift or Command key can change what the game receives. Press
          the keys cleanly and try again.
        </li>
        <li>
          <strong className="text-ink">Pause script blockers.</strong> Privacy
          extensions and strict browser modes can block the embedded frame or the
          scripts that read the keyboard.
        </li>
        <li>
          <strong className="text-ink">Try another browser.</strong> A current
          version of Chrome, Edge, or Firefox is the most reliable. Reload the page
          after switching.
        </li>
        <li>
          <strong className="text-ink">Check the keyboard itself.</strong> Test the
          same keys in a text field. If they fail there too, the problem is the
          keyboard or the connection, not Wrestle Bros.
        </li>
      </ul>
      <p className="prose-copy mt-4">
        If the keys register but the wrestler moves oddly, the cause is usually the
        keyboard layout. On AZERTY and other non-QWERTY layouts, the printed W, A,
        S, and D labels may not line up with the keys the game expects. Use the
        Arrow Key layout in solo play if the left-hand cluster feels wrong.
      </p>

      <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <h2 className="font-heading text-xl font-extrabold text-ink">
          Ready to try the layout?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Open the game, choose Tournament, and spend one match only moving and
          blocking. The controls become automatic faster than a full match of
          button mashing will teach you.
        </p>
        <Link
          href="/wrestle-bros-unblocked"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-orange-800"
        >
          Play Wrestle Bros
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </GuidePage>
  );
}
