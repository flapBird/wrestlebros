import Image from "next/image";
import Link from "next/link";
import GuidePage from "@/components/GuidePage";
import { buildMetadata } from "@/lib/seo";

const title = "How to Pin in Wrestle Bros – Timing & Setup Guide";
const description =
  "Learn how to pin in Wrestle Bros: wear down the opponent, wait for the mat, then double jump. Timing tips, common mistakes, and practice drills.";
const path = "/wrestle-bros-how-to-pin";

export const metadata = buildMetadata({ title, description, path });

const faqs = [
  {
    question: "How do you pin in Wrestle Bros?",
    answer:
      "Knock the opponent down, stand next to them, then press jump twice in quick succession. The double jump starts the pin. You cannot pin an opponent who is still standing or getting back up.",
  },
  {
    question: "Is there a dedicated pin button?",
    answer:
      "No. The pin is an input sequence rather than a separate key. In solo play, double-tap W or the Up Arrow. In local two-player mode, Player 1 double-taps W and Player 2 double-taps the Up Arrow.",
  },
  {
    question: "When exactly should I double jump?",
    answer:
      "Start the double jump while the opponent is flat on the mat and you are close enough to land on them. The window is short, so begin the input as they settle rather than waiting for them to move again.",
  },
  {
    question: "Why does my opponent keep escaping the pin?",
    answer:
      "The usual causes are starting too early, jumping from too far away, or only pressing jump once. If the opponent is still recovering or moving, the pin does not connect and they get a free chance to counter.",
  },
  {
    question: "Can you pin in two-player mode?",
    answer:
      "Yes. Local two-player mode uses the same rule: knock the other wrestler down, get close, and double jump with your own jump key. Player 1 uses W twice; Player 2 uses the Up Arrow twice.",
  },
  {
    question: "Does a pin require low health?",
    answer:
      "A pin requires a downed opponent, not a specific health value. Pressuring an opponent lowers their health and creates more knockdowns, which is why a pin usually follows a run of successful attacks rather than a single lucky hit.",
  },
] as const;

export default function WrestleBrosHowToPinPage() {
  return (
    <GuidePage
      kicker="Finish the match"
      title={title}
      description={description}
      path={path}
      intro="A pin in Wrestle Bros is a short sequence: knock the opponent down, close the distance, then double jump. Most failed pins come from starting the jump too early or from treating the pin as a single button press. This guide covers the setup, the timing cue, and the mistakes that give opponents an escape."
      faqTitle="Wrestle Bros pin FAQ"
      faqs={faqs}
    >
      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
          The short answer
        </p>
        <p className="mt-2 text-base leading-7 text-slate-700">
          To pin in Wrestle Bros: wear the opponent down until they are on the mat,
          stand next to them, and <strong className="text-ink">double jump</strong>{" "}
          with your jump key. The pin is not the action key, and it does not work on
          a standing opponent.
        </p>
      </div>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        The three-step pin sequence
      </h2>
      <p className="prose-copy mt-4">
        Think of the pin as the last step of a sequence, not as a move you can force
        at any time. Each step sets up the next one, and skipping ahead is the most
        common reason a pin attempt fails.
      </p>
      <ol className="mt-5 space-y-4">
        <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-heading text-lg font-extrabold text-ink">
            1. Win the exchanges
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Block when the opponent attacks, then answer while they recover. A
            knockdown is the reward for winning a few exchanges in a row, not for
            one lucky jump.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-heading text-lg font-extrabold text-ink">
            2. Wait for the downed state
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The opponent must be on the mat, not staggering or climbing back up.
            Watch the moment they land and stay down; that is your cue to move in.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-heading text-lg font-extrabold text-ink">
            3. Double jump next to them
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Close the gap, then press jump twice in quick succession. The second
            jump starts the pin. Do not reach for Space or Enter; that is the action
            key, not the pin.
          </p>
        </li>
      </ol>

      <figure className="mt-8">
        <Image
          src="/wrestlebros-desc-02.png"
          alt="A suplex in Wrestle Bros leaves both wrestlers on the mat"
          width={1714}
          height={994}
          sizes="(max-width: 768px) 100vw, 896px"
          className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
        />
        <figcaption className="mt-3 text-center text-xs text-slate-500">
          A knockdown creates the pin chance. The next input has to come quickly,
          before the opponent recovers.
        </figcaption>
      </figure>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Step 1: set up the knockdown
      </h2>
      <p className="prose-copy mt-4">
        The pin opportunity is created before the opponent hits the floor. Stay at a
        distance where you can block an attack but still step into range. If you
        hold block all the time, the opponent can back away and reset; if you attack
        from too far out, you spend the match swinging at air.
      </p>
      <p className="prose-copy mt-4">
        A practical rhythm is block, answer, reposition. You do not need a long
        combo. You need the opponent to commit to an attack, then to be out of
        position when it misses. Repeat that until they go down.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Step 2: read the downed state
      </h2>
      <p className="prose-copy mt-4">
        There is no separate pin meter to fill. The cue is the wrestler’s position:
        flat on the mat and not immediately bouncing back up. A wrestler who is
        still sliding, tumbling, or recovering is not a valid pin target yet.
      </p>
      <p className="prose-copy mt-4">
        This is also why mashing jump randomly does not work. A double jump used
        while the opponent is standing is just a jump. It leaves you in the air
        while they are free to move, which is the opposite of what you want.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Step 3: time the double jump
      </h2>
      <p className="prose-copy mt-4">
        Move close first, then jump twice. Doing it the other way around gives the
        opponent time to roll away. The second press is the one that matters: it
        turns the jump into the pin attempt, so the two presses need to be close
        together rather than one jump per second.
      </p>
      <p className="prose-copy mt-4">
        In local two-player mode, both players follow the same rule with their own
        jump key. Player 1 double-taps W; Player 2 double-taps the Up Arrow. Online,
        the same input applies, but a stable connection matters because the pin
        window is short.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Why pins fail
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
        <li>
          <strong className="text-ink">Jumping too early.</strong> If the opponent
          has not settled on the mat, the pin does not start and you land next to a
          wrestler who is about to get up.
        </li>
        <li>
          <strong className="text-ink">Pinning from too far away.</strong> The
          double jump has to connect. Close the distance before the second press.
        </li>
        <li>
          <strong className="text-ink">Pressing jump once.</strong> A single jump is
          only a jump. The pin comes from the second press.
        </li>
        <li>
          <strong className="text-ink">Using the action key.</strong> Space or Enter
          is not the pin. Switch to the jump key for the double tap.
        </li>
        <li>
          <strong className="text-ink">Attacking a downed opponent.</strong> Extra
          hits can look useful, but they use up the window you need for the pin.
        </li>
        <li>
          <strong className="text-ink">Losing keyboard focus.</strong> If the page
          scrolls instead of jumping, click the game once. Missed inputs look like
          bad timing even when the timing was fine.
        </li>
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Practice drills
      </h2>
      <p className="prose-copy mt-4">
        Pin timing improves faster in short, focused matches than in long brawls.
        Use Tournament so you get repeated attempts against the same type of
        opponent.
      </p>
      <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700">
        <li>
          <strong className="text-ink">Movement only.</strong> Spend one match
          staying in range and blocking. Do not attack unless the opponent is wide
          open. This teaches you the spacing the pin needs.
        </li>
        <li>
          <strong className="text-ink">Knockdown, then stop.</strong> In the next
          match, attack until the opponent falls, then pause and look at their
          position. Learn what “down” actually looks like before adding the jump.
        </li>
        <li>
          <strong className="text-ink">Ten pin attempts.</strong> Finish the third
          match with double jumps only. Count how many connect. The number matters
          less than noticing whether the misses were early, late, or too far away.
        </li>
      </ol>

      <h2 className="mt-10 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Pin or knockout?
      </h2>
      <p className="prose-copy mt-4">
        A pin is the deliberate finish; a knockout is what happens when the match
        ends through damage. If you keep attacking a downed opponent instead of
        pinning, you may still win, but you give them more chances to recover. Once
        you can recognize the downed state, the pin is the more controlled way to
        close out a match.
      </p>
      <p className="prose-copy mt-4">
        The key layout for both players is in the{" "}
        <Link
          href="/wrestle-bros-controls"
          className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          Wrestle Bros controls guide
        </Link>
        . If the game will not load at all, start with the{" "}
        <Link
          href="/wrestle-bros-unblocked"
          className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          unblocked play page
        </Link>
        .
      </p>

      <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <h2 className="font-heading text-xl font-extrabold text-ink">
          Try the sequence in Tournament
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Tournament gives you repeated pin chances without waiting for a second
          player. Open the game, win a few exchanges, and watch for the moment the
          opponent stays on the mat.
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
