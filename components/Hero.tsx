import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-arena relative overflow-hidden px-4 pb-10 pt-5 sm:pb-12 sm:pt-7">
      <div className="hero-spotlight hero-spotlight--left" aria-hidden="true" />
      <div className="hero-spotlight hero-spotlight--right" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <GameEmbed />

        <div className="mx-auto mt-8 max-w-3xl text-center text-white sm:mt-10">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">
            Free browser wrestling game
          </p>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Play Wrestle Bros online
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Fight through a CPU tournament, share a keyboard with a friend, or
            host an online match. The game runs here in your browser with no
            separate download.
          </p>
        </div>
      </div>
    </section>
  );
}
