const PUZZLES = [
  {
    answer: "Beyoncé",
    category: "Person",
    aura: "#C9A227",
    clues: [
      "The particular silence of an arena right before the lights go out.",
      "Gold, but the kind that was earned — heavy, warm, unignorable.",
      "She arrived at her own coronation and everyone already knew the words.",
      "A discipline so total it looks like effortlessness from the outside.",
      "Houston, late summer heat, the smell of something burning and something becoming."
    ]
  },
  {
    answer: "Paris",
    category: "Place",
    aura: "#B07DC3",
    clues: [
      "The specific melancholy of a café at 4pm, when the light goes gold and nobody is in a hurry.",
      "Everything here is a little too beautiful to trust completely.",
      "You came here with high expectations and somehow it still exceeded them, which is disorienting.",
      "Rain on cobblestones, a boulangerie, someone arguing about cheese with complete sincerity.",
      "Romantic only because it decided to be. Absolutely committed to the bit."
    ]
  },
  {
    answer: "Steve Jobs",
    category: "Person",
    aura: "#4A90D9",
    clues: [
      "The feeling of holding something and immediately understanding that everything before it was wrong.",
      "Obsession that crossed into cruelty, and somehow the cruelty made the obsession feel more honest.",
      "A black turtleneck. The word 'insanely.' A room full of people who forgot to breathe.",
      "He made you want things you didn't know existed five minutes ago.",
      "California perfectionism — the kind that believes beauty is moral, not decorative."
    ]
  },
  {
    answer: "New York City",
    category: "Place",
    aura: "#E8C84A",
    clues: [
      "The color of money and envy, at 2am, in a city that never apologizes.",
      "Steam rising from a grate. A yellow cab. Someone eating a pretzel like they mean it.",
      "Everything is possible here. Somehow that is also exhausting.",
      "Eight million people each entirely convinced they are the main character.",
      "The loneliest place in the world, which is exactly why you love it."
    ]
  },
  {
    answer: "The Beatles",
    category: "Band",
    aura: "#E84A5F",
    clues: [
      "A rooftop, January, a city below that doesn't understand what it's witnessing.",
      "Four silhouettes crossing a road. The whole century listening.",
      "The feeling of discovering something your parents loved and realizing they were right.",
      "It sounds like what it felt like to be young in a world that was just starting to move fast.",
      "Liverpool mist, Hamburg bars, screaming, genius, the end of something, the beginning of everything."
    ]
  },
  {
    answer: "Nike",
    category: "Brand",
    aura: "#FF5733",
    clues: [
      "The split second before you decide to push through.",
      "A swoosh that carries more aspiration than most religions.",
      "It's not the shoe. The shoe is a vehicle for something you already wanted to believe about yourself.",
      "Air, rubber, the squeak of a gym floor, the specific pride of lacing up something new.",
      "Just. Do. It. — the most successful therapy session ever sold as an ad."
    ]
  },
  {
    answer: "The Moon",
    category: "Thing",
    aura: "#8AAFCE",
    clues: [
      "Something vast and silver that makes you feel small in a way you actually enjoy.",
      "It has no light of its own and yet everything is illuminated.",
      "Every love song eventually mentions it, which means every love song is about the same longing.",
      "Sailors steered by it. Wolves howled at it. We walked on it and felt strangely empty afterward.",
      "A reminder, once a month, that there are things bigger than whatever is bothering you."
    ]
  },
  {
    answer: "Oprah Winfrey",
    category: "Person",
    aura: "#D4845A",
    clues: [
      "The particular warmth of someone who makes you feel seen by a crowd.",
      "Chicago in winter, a studio audience, the collective intake of breath before a revelation.",
      "She turned her own wounds into a permission slip for yours.",
      "Generosity as a business model — and it worked, which is either inspiring or instructive.",
      "The most powerful person in a room, who always looks like she's just happy you came."
    ]
  },
  {
    answer: "Tokyo",
    category: "Place",
    aura: "#E879A0",
    clues: [
      "Neon and vending machines and perfect order underneath all of it.",
      "The quietest loud city in the world — volume everywhere, rudeness nowhere.",
      "A 7-Eleven that sells things you can't explain in another language.",
      "Ancient and instant, at the same time, on the same block.",
      "Cherry blossoms in April — the whole city pausing to agree that temporary things can be beautiful."
    ]
  },
  {
    answer: "Michael Jordan",
    category: "Person",
    aura: "#CC3333",
    clues: [
      "The feeling of watching someone do something impossible and believing it was inevitable.",
      "Air. Not the element — the feeling of it. Suspended.",
      "A competitiveness so pure it crossed into something spiritual.",
      "Chicago winters, the squeak of hardwood, a tongue between teeth at the apex of something.",
      "He made you think the word 'greatest' could actually end a sentence."
    ]
  },
  {
    answer: "Coffee",
    category: "Thing",
    aura: "#8B5E3C",
    clues: [
      "The ritual before the day begins — when you're still allowed to not be okay.",
      "Dark, hot, slightly bitter, and somehow exactly what you needed.",
      "The smell hits first. Everything else waits.",
      "A permission slip. Go ahead. Begin.",
      "It tastes like effort, which is the point."
    ]
  },
  {
    answer: "The Internet",
    category: "Thing",
    aura: "#3B82F6",
    clues: [
      "The sensation of having access to everything and feeling somehow more empty.",
      "It promised connection. It delivered something more complicated.",
      "Library, bar, confessional, marketplace, and void — all at once, always open.",
      "You remember the sound it made when it arrived. Then one day it stopped making that sound.",
      "The greatest and strangest thing humanity has ever collectively built, used mostly for distraction."
    ]
  },
  {
    answer: "Coco Chanel",
    category: "Person",
    aura: "#1A1A1A",
    clues: [
      "The color black, before it was allowed to be elegant.",
      "She removed things until what remained was undeniable.",
      "Pearls on a woman who grew up with nothing, draped like a philosophy.",
      "Paris between the wars, simplicity as a revolutionary act, a cigarette, a pair of scissors.",
      "Fashion's great lesson: restraint is not a limitation. It is the point."
    ]
  },
  {
    answer: "Netflix",
    category: "Brand",
    aura: "#E50914",
    clues: [
      "The specific paralysis of infinite choice on a Friday night.",
      "Are you still watching? Yes. No. I don't know. Leave me alone.",
      "It replaced video stores, appointment television, and going outside, in that order.",
      "Red. A sound — a single dramatic chord — a logo.",
      "Entertainment that comes to you, forever, which turned out to change what entertainment means."
    ]
  },
  {
    answer: "Frida Kahlo",
    category: "Person",
    aura: "#C8442B",
    clues: [
      "Pain made into beauty, not to be healed but to be witnessed.",
      "Flowers in her hair, a spine that became a subject, a country that became a costume.",
      "She looked directly at the canvas and the canvas couldn't look away.",
      "Mexico City, a blue house, monobrows, Diego, suffering painted so precisely it stops being sad.",
      "The first self-portrait that said: I see myself, clearly, and I will not apologize for what I see."
    ]
  },
  {
    answer: "London",
    category: "Place",
    aura: "#6B8CAE",
    clues: [
      "Grey sky, red bus, the sense that history is still happening just underneath the pavement.",
      "A city that takes itself seriously while pretending not to.",
      "Pubs at noon. Queues for everything. Apologizing even when you're right.",
      "It has survived enough that nothing surprises it anymore, which is both reassuring and sad.",
      "The Thames in November, fog, a biscuit with tea, and the stubborn certainty that this is civilization."
    ]
  },
  {
    answer: "Taylor Swift",
    category: "Person",
    aura: "#9B59B6",
    clues: [
      "The feeling of a song that knows exactly what you were thinking at 17.",
      "She kept the receipts. She always keeps the receipts.",
      "Easter eggs, eras, friendship bracelets, the particular devotion of people who feel understood.",
      "Country became pop became folk became phenomenon — each transformation a deliberate one.",
      "Nashville to global stadium: the long game, played with complete intentionality."
    ]
  },
  {
    answer: "Space",
    category: "Thing",
    aura: "#1A0533",
    clues: [
      "The feeling of looking up on a clear night and understanding that understanding is not enough.",
      "Endless. Silent. The most efficient argument against self-importance.",
      "We sent a golden record into it. Music, greetings, the sound of rain. Just in case.",
      "Every civilization that has ever looked up has made up stories about it because the truth is too large.",
      "The final frontier, which is what you say about something you need to name so it doesn't name you."
    ]
  },
  {
    answer: "Apple",
    category: "Brand",
    aura: "#A2AAAD",
    clues: [
      "The unboxing. Slow, deliberate, the tissue paper a promise.",
      "White and aluminum and the particular coldness of something designed to feel warm.",
      "A garage in Cupertino, a think-different poster, the word 'revolutionary' used with a straight face.",
      "The most profitable company on earth, built on the idea that beautiful things work better.",
      "You paid more than you needed to, and you'd do it again."
    ]
  },
  {
    answer: "The Eiffel Tower",
    category: "Thing",
    aura: "#7DB5A0",
    clues: [
      "They hated it when it was built. Now it is impossible to imagine the sky without it.",
      "Iron lace. A city's accidental mascot.",
      "It lights up at night and everyone watching forgets, briefly, to be cynical.",
      "More photographed than any person who has ever lived. Somehow still not overexposed.",
      "Paris looked at an engineering project and decided: yes, this is beautiful. This is ours."
    ]
  },
];
