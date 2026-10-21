export type ControlRow = readonly [label: string, keys: string];

export const soloControls: readonly ControlRow[] = [
  ["Move", "A / D or ← / →"],
  ["Jump", "W or ↑"],
  ["Block", "S or ↓"],
  ["Action", "Space or Enter"],
  ["Pin", "Double jump"],
];

export const twoPlayerControls: readonly ControlRow[] = [
  ["Player 1 move", "W A S D"],
  ["Player 1 action", "G"],
  ["Player 2 move", "Arrow keys"],
  ["Player 2 action", "L"],
];

export const gameFaqs = [
  {
    question: "Is Wrestle Bros free to play?",
    answer:
      "Yes. The browser version is free to open and play, with no separate download or account required on this site.",
  },
  {
    question: "Can two people play Wrestle Bros on one computer?",
    answer:
      "Yes. Choose the two-player option from the game menu. Player 1 uses WASD and G, while Player 2 uses the Arrow Keys and L.",
  },
  {
    question: "Does Wrestle Bros have online multiplayer?",
    answer:
      "Yes. The Online Game menu lets one player host a room and another join it with the room code shown by the game.",
  },
  {
    question: "What are the Wrestle Bros controls?",
    answer:
      "In solo play, use A and D or the Left and Right Arrow keys to move, W or Up to jump, S or Down to block, and Space or Enter for the main action. Local two-player mode uses WASD plus G for Player 1 and the Arrow Keys plus L for Player 2.",
  },
  {
    question: "How do you pin an opponent in Wrestle Bros?",
    answer:
      "Wear the opponent down until they are on the mat, then use a double jump to attempt the pin. Starting the pin too early usually gives them time to recover.",
  },
  {
    question: "Can you unlock more wrestlers?",
    answer:
      "Yes. Tournament wins unlock additional wrestlers and gear, giving you more character and appearance choices over time.",
  },
  {
    question: "Can I play Wrestle Bros on a phone or tablet?",
    answer:
      "The page is mobile-friendly, but the game is easiest to see in fullscreen with the device turned sideways. Touch support can vary by browser and game version; a desktop keyboard remains the most reliable setup.",
  },
  {
    question: "Who made Wrestle Bros?",
    answer:
      "Wrestle Bros was developed by Blue Wizard Digital, the studio behind other Bros sports games. WrestleBros.xyz is an independent play-and-guide site.",
  },
] as const;
