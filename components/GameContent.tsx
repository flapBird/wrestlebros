
"use client";

import { useState } from "react";

/**
 * FAQ item with expand/collapse on click.
 */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-text-dark hover:bg-stone-50 transition-colors"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-text-dark/70 leading-relaxed text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "What is Wrestle Bros and how do you play it?",
    answer:
      "Wrestle Bros is a physics-based wrestling fighting game where you control a wrestler and try to defeat your opponent in an arena. You grab, throw, punch, and outsmart the other fighter to either pin them down or knock them out of the ring. It's a bit like a sumo match but with more moves and way more personality.",
  },
  {
    question: "Is Wrestle Bros free to play?",
    answer:
      "Yep, totally free. No downloads, no sign-up, nothing to pay. Just open the page in your browser and start playing. If you're on mobile, it works there too — no app store needed.",
  },
  {
    question: "Does Wrestle Bros support two players on the same device?",
    answer:
      "It sure does. Player 1 uses W, A, S, D and G. Player 2 uses the Arrow Keys and L. Both of you sit at the same keyboard and go head-to-head. It's the best way to play if you've got a friend next to you.",
  },
  {
    question: "Can I play Wrestle Bros on my phone or tablet?",
    answer:
      "Yes, it runs right in your mobile browser. The controls adapt to touch, so you can tap and swipe instead of using a keyboard. Works on both iOS and Android — just open the site and jump in.",
  },
  {
    question: "What are the controls for Wrestle Bros?",
    answer:
      "In single-player, use A/D or Left/Right to move, W or Up to jump, S or Down to block, and Space or G-L for actions. In two-player mode, Player 1 uses W/A/S/D for movement and G to act. Player 2 uses the Arrow Keys to move and L to act. Quick tip: mix up your attacks and don't spam the same move, or your opponent will read you like a book.",
  },
  {
    question: "What game modes does Wrestle Bros have?",
    answer:
      "There's Solo Battle where you fight AI opponents, a Multiplayer mode where you can challenge real players, and Local Co-op which is the classic 1v1 on one keyboard. Each mode has its own vibe — solo is good for practicing, local co-op is where the real trash talk happens.",
  },
  {
    question: "Can I customize my wrestler in Wrestle Bros?",
    answer:
      "Yes, you can change your wrestler's look with different skins, outfits, and accessories. Some are unlocked by playing and winning matches, others come from special achievements. It's a nice touch that makes each bout feel a bit more personal.",
  },
  {
    question: "What are some games similar to Wrestle Bros?",
    answer:
      "If you dig Wrestle Bros, check out Basket Bros, Soccer Bros, Football Bros, and Karate Bros — they're from the same family of physics-based arena fighters. Each one puts a different sporty spin on the formula. Wrestle Jump and Huge Sumos are also fun if you want more wrestling-style action.",
  },
];

export default function GameContent() {
  return (
    <section className="space-y-12">
      {/* ── 1. Game Introduction ── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
          What Is Wrestle Bros?
        </h2>

        <p className="text-text-dark/70 leading-relaxed mb-4">
          Wrestle Bros is a physics-driven wrestling game that puts two fighters in a ring
          and lets chaos do the rest. Each match is a fast, bouncy scrap where you
          grab, throw, block, and out-position your opponent until one of you stays down
          or gets flung out of the arena. The controls are simple enough to pick up in
          seconds, but the physics engine keeps every round unpredictable — one moment
          you&rsquo;re lining up the perfect suplex, the next you&rsquo;re flying headfirst
          into the ropes.
        </p>

        <img src="/wrestlebros-desc-01.png" alt="Wrestle Bros 擂台对战场景" className="w-full rounded-xl shadow-md my-6" loading="lazy" />

        <p className="text-text-dark/70 leading-relaxed">
          Made by Blue Wizard Digital, the same team behind the popular Basket Bros
          series, Wrestle Bros takes the arena-fighting formula and wraps it in spandex.
          It works on desktop and mobile, supports both single-player and local
          two-player modes, and it&rsquo;s completely free. Whether you&rsquo;re
          killing time solo or settling a score with a friend, it&rsquo;s the kind of
          game that&rsquo;s easy to start and hard to put down.
        </p>
      </div>

      {/* ── 2. How to Play ── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
          How to Play Wrestle Bros
        </h2>

        <p className="text-text-dark/70 leading-relaxed mb-4">
          Your goal in every match is simple: be the last wrestler standing. You
          can win by pinning your opponent&rsquo;s shoulders to the mat for a
          three-count, or by knocking them out of the ring entirely. The arena is
          small and the action is constant, so there&rsquo;s no room to run and
          hide — you have to engage.
        </p>

        <img src="/wrestlebros-desc-02.png" alt="Wrestle Bros 双人摔跤对抗" className="w-full rounded-xl shadow-md my-6" loading="lazy" />

        <p className="text-text-dark/70 leading-relaxed mb-4">
          The trick is learning when to attack and when to hold back. A wild
          haymaker might land, but it also leaves you wide open. Block at the
          right moment and you can flip the momentum. Grab your opponent when
          they&rsquo;re off balance and you can hurl them across the ring. It&rsquo;s
          a game of timing as much as aggression.
        </p>

        <h3 className="font-heading font-semibold text-lg text-text-dark mt-6 mb-3">
          Game Modes
        </h3>

        <ul className="space-y-2 text-text-dark/70 leading-relaxed">
          <li>
            <strong className="text-text-dark">Solo Battle:</strong> Fight against
            AI opponents at various difficulty levels. Great for learning the ropes
            and unlocking customisation items.
          </li>
          <li>
            <strong className="text-text-dark">Multiplayer Mode:</strong> Challenge
            real players in a competitive wrestling brawl.
          </li>
          <li>
            <strong className="text-text-dark">Local Co-op (1v1):</strong> The
            classic mode — two players, one keyboard, one ring. Best played with
            a friend beside you and a healthy dose of trash talk.
          </li>
        </ul>

      </div>

      {/* ── 3. Controls ── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
          Wrestle Bros Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Player 1 Controls */}
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="font-heading font-semibold text-lg text-text-dark mb-3 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold">
                1
              </span>
              Player 1
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                <span className="text-text-dark/70">Move</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  W A S D
                </kbd>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                <span className="text-text-dark/70">Action</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  G
                </kbd>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-text-dark/70">Jump</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  W
                </kbd>
              </div>
            </div>
          </div>

          {/* Player 2 Controls */}
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="font-heading font-semibold text-lg text-text-dark mb-3 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold">
                2
              </span>
              Player 2
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                <span className="text-text-dark/70">Move</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  Arrow Keys
                </kbd>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                <span className="text-text-dark/70">Action</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  L
                </kbd>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-text-dark/70">Jump</span>
                <kbd className="bg-stone-100 px-2.5 py-1 rounded text-xs font-mono text-text-dark">
                  Up Arrow
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <p className="text-text-dark/70 leading-relaxed text-sm">
          Playing alone? You can also use A/D or Left/Right to move, W or Up to
          jump, S or Down to block, and Space or any key from G to L for actions.
          Single-player offers more flexibility in control layout.
        </p>
      </div>

      {/* ── 4. Game Features ── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
          Wrestle Bros Game Features
        </h2>

        <ul className="space-y-3 text-text-dark/70 leading-relaxed">
          <li>
            <strong className="text-text-dark">Physics-powered mayhem:</strong> Every
            punch, throw, and collision is driven by a real-time physics engine. No
            two matches play out the same way, and the ragdoll moments are genuinely
            hilarious.
          </li>
          <li>
            <strong className="text-text-dark">Local two-player chaos:</strong> Share
            a keyboard and go head-to-head. Player 1 uses WASD + G, Player 2 uses
            Arrow Keys + L. It&rsquo;s the closest thing to couch multiplayer in a
            browser game.
          </li>
          <li>
            <strong className="text-text-dark">Custom wrestlers:</strong> Unlock and
            equip different skins, outfits, and accessories. Winning matches earns
            you more options, so there&rsquo;s always something to work toward.
          </li>
          <li>
            <strong className="text-text-dark">Easy to learn, tough to master:</strong>
            You can pick up the controls in 10 seconds, but beating a skilled opponent
            takes real timing and strategy. Blocking, grabbing, and positioning all
            matter more than button-mashing.
          </li>
          <li>
            <strong className="text-text-dark">Works everywhere:</strong> Desktop, tablet,
            phone — it runs in any modern browser. No download, no install, no hidden
            costs. Just open the page and wrestle.
          </li>
        </ul>

        <img src="/wrestlebros-desc-3.jpeg" alt="Wrestle Bros 可选角色阵容与皮肤" className="w-full rounded-xl shadow-md my-6" loading="lazy" />
      </div>

      {/* ── 5. FAQ ── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
          FAQ
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
