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
{
  answer: "Elvis Presley",
  category: "Person",
  aura: "#D4AF37",
  clues: [
    "A hunger that scandalized a generation and then became its lullaby.",
    "Hips that moved before anyone gave them permission to.",
    "A voice that swallowed gospel, country, and longing all at once.",
    "Rhinestones catching the heat of a too-bright stage, sweat and sequins.",
    "The lonely king of a kingdom built on a curled lip and a swagger."
  ]
},
{
  answer: "Marilyn Monroe",
  category: "Person",
  aura: "#F5E6F0",
  clues: [
    "Innocence and danger wearing the same soft smile.",
    "A whisper that was louder than any scream.",
    "The ache of being adored and never truly seen.",
    "A white dress lifted by warm air over a subway grate.",
    "Platinum and breathless, fragile beneath the glow."
  ]
},
{
  answer: "Albert Einstein",
  category: "Person",
  aura: "#5B6B8C",
  clues: [
    "The universe folded into a single curious mind that never stopped wondering.",
    "Wild hair and a wilder imagination, playful with the cosmos.",
    "Thinking so hard about light that time itself bent around it.",
    "A tongue stuck out at a camera, genius refusing to be solemn.",
    "The face the world draws when it wants to draw a genius."
  ]
},
{
  answer: "Leonardo da Vinci",
  category: "Person",
  aura: "#8B7355",
  clues: [
    "A mind that refused to choose between art and machine.",
    "Sketches of wings centuries before anyone could fly.",
    "Curiosity so vast it left more unfinished than finished.",
    "A faint smile painted to outlast every empire.",
    "Notebooks written backward, beauty and invention tangled together."
  ]
},
{
  answer: "William Shakespeare",
  category: "Person",
  aura: "#4A3B5C",
  clues: [
    "Every human feeling, named for the first time and never bettered.",
    "Love and murder and laughter sharing one wooden stage.",
    "Words invented because the old ones weren't enough.",
    "A ruffed collar, a quill, and language that still breathes.",
    "To be, or not to be — the question that became the whole man."
  ]
},
{
  answer: "Vincent van Gogh",
  category: "Person",
  aura: "#F4C430",
  clues: [
    "Beauty seen too intensely by someone the world looked past.",
    "Loneliness turned into swirling, glowing color.",
    "Stars that spin and wheat that burns gold under a troubled sky.",
    "Sold almost nothing, gave almost everything, kept almost no peace.",
    "A bandaged ear and a night sky that will never stop moving."
  ]
},
{
  answer: "Mahatma Gandhi",
  category: "Person",
  aura: "#E8D9C0",
  clues: [
    "Power found in refusing to lift a hand.",
    "Quiet that toppled an empire louder than any army.",
    "Hunger chosen on purpose as a kind of thunder.",
    "Round glasses, a simple cloth, a long deliberate walk to the sea.",
    "The gentle stubbornness that taught a continent to stand still."
  ]
},
{
  answer: "Nelson Mandela",
  category: "Person",
  aura: "#E1A95F",
  clues: [
    "Decades in a small room that somehow made a man larger.",
    "Forgiveness offered to the people who stole his years.",
    "A nation taught to be one color out of many.",
    "A raised fist that meant peace, not war.",
    "The long walk from a cell to a presidency, smiling the whole way."
  ]
},
{
  answer: "Martin Luther King Jr.",
  category: "Person",
  aura: "#C44536",
  clues: [
    "A voice that turned a crowd into a tide.",
    "The sound of patience finally rising to its feet.",
    "A dream described so clearly it felt like memory.",
    "Marble steps, a sea of faces, and words that still echo.",
    "The mountaintop seen by a man who knew he might not climb it."
  ]
},
{
  answer: "Abraham Lincoln",
  category: "Person",
  aura: "#3A3A3A",
  clues: [
    "A tall sorrow that held a breaking country together.",
    "Honesty worn like a long black coat.",
    "Words measured by the cost of every life behind them.",
    "A stovepipe hat and a beard above a weary, gentle face.",
    "Freedom written in the middle of a war that tore the land in two."
  ]
},
{
  answer: "Cleopatra",
  category: "Person",
  aura: "#0F8A7E",
  clues: [
    "Intelligence so seductive that empires negotiated with it.",
    "A woman who turned charm into a weapon of state.",
    "Kohl-dark eyes that looked at the most powerful men alive without blinking.",
    "Gold, asps, and a barge that smelled of myrrh on a slow river.",
    "The last ruler of an ancient kingdom, ending it on her own terms."
  ]
},
{
  answer: "Napoleon Bonaparte",
  category: "Person",
  aura: "#1B3A6B",
  clues: [
    "Ambition that mistook a continent for a personal map.",
    "A small man who made the whole world feel small beside him.",
    "A hand tucked into a coat, certainty pressed against the heart.",
    "Glory and frostbite, marching too far and refusing to admit it.",
    "Exiled twice, crowned once, and never once humble."
  ]
},
{
  answer: "Joan of Arc",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "A teenager who heard heaven and outranked generals.",
    "Faith sharp enough to cut through an army's doubt.",
    "Armor on a body too young to be a soldier.",
    "Banners, fire, and a voice that said God was on her side.",
    "Burned by the people she frightened, sainted by the ones she saved."
  ]
},
{
  answer: "Mozart",
  category: "Person",
  aura: "#E6B8D4",
  clues: [
    "Genius that arrived absurdly early and left absurdly soon.",
    "A child who heard finished symphonies before he could write them.",
    "Playfulness and perfection tangled in powdered curls.",
    "Notes that sound like laughter dressed in silk.",
    "A pauper's grave for the most effortless music ever written."
  ]
},
{
  answer: "Beethoven",
  category: "Person",
  aura: "#3D3D5C",
  clues: [
    "Thunder composed by a man who could no longer hear it.",
    "Defiance turned into four famous knocking notes.",
    "Joy wrenched out of a life that kept taking things away.",
    "Wild hair and a furrowed scowl bent over a keyboard.",
    "Silence inside, an ocean of sound poured out anyway."
  ]
},
{
  answer: "Charlie Chaplin",
  category: "Person",
  aura: "#2B2B2B",
  clues: [
    "Heartbreak hidden inside a waddle and a tipped hat.",
    "Comedy that made the poor feel seen without a single word.",
    "A little mustache, a cane, and shoes far too big.",
    "Black-and-white flicker, sweetness underneath the slapstick.",
    "The tramp who twirled away down a long road into the sunset."
  ]
},
{
  answer: "Pablo Picasso",
  category: "Person",
  aura: "#3A6EA5",
  clues: [
    "A man who broke faces apart to show every angle at once.",
    "Restlessness that reinvented itself every few years.",
    "A blue sadness, then sharp shattered geometry.",
    "Bulls, doves, and women rearranged like puzzles.",
    "The hand that decided painting didn't have to obey the eye."
  ]
},
{
  answer: "Salvador Dalí",
  category: "Person",
  aura: "#D9A441",
  clues: [
    "Dreams painted with the precision of a watchmaker.",
    "A mustache curled into question marks at the sky.",
    "Time itself drooping like warm cheese in a desert.",
    "Eccentricity worn as proudly as a cape.",
    "The melting, uncanny logic of a mind that lived half asleep."
  ]
},
{
  answer: "Mother Teresa",
  category: "Person",
  aura: "#E8EEF2",
  clues: [
    "Tenderness aimed entirely at the people no one else would touch.",
    "Smallness that somehow held an ocean of patience.",
    "A blue-bordered cloth among the dying and forgotten.",
    "Comfort offered with no expectation of being thanked.",
    "The quiet saint of the gutters, wrinkled hands always reaching."
  ]
},
{
  answer: "Princess Diana",
  category: "Person",
  aura: "#4A90D9",
  clues: [
    "Warmth trapped inside a gilded, watching cage.",
    "A shy glance that a billion people fell in love with.",
    "Kindness that walked straight toward the things others feared.",
    "Cameras everywhere, and a loneliness no crown could fix.",
    "The people's heart, gone too fast in a flash of headlights."
  ]
},
{
  answer: "John Lennon",
  category: "Person",
  aura: "#D9D9D9",
  clues: [
    "An idealist asking the whole world to just imagine.",
    "Round glasses and a dream of nothing to kill or die for.",
    "Peace sung from a bed as an act of gentle rebellion.",
    "A voice that wanted to dismantle every border.",
    "Silenced on a doorstep, still humming through every candlelit vigil."
  ]
},
{
  answer: "Bob Dylan",
  category: "Person",
  aura: "#8C7B5A",
  clues: [
    "A voice like gravel that carried a generation's questions.",
    "Poetry smuggled in through a harmonica and a sneer.",
    "Answers blowing somewhere out in the wind.",
    "A wild halo of hair, words tumbling faster than the melody.",
    "The reluctant prophet who refused to be anyone's prophet."
  ]
},
{
  answer: "Jimi Hendrix",
  category: "Person",
  aura: "#6B2FA0",
  clues: [
    "A guitar that wept, screamed, and caught fire.",
    "Sound bent into colors no one had heard before.",
    "An anthem rewired into thunder and protest.",
    "A headband, fringe, and fingers moving like smoke.",
    "The man who made six strings sound like the future arriving early."
  ]
},
{
  answer: "Freddie Mercury",
  category: "Person",
  aura: "#E4B43C",
  clues: [
    "A voice that could fill a stadium and then cradle a single note.",
    "Theatrical, fearless, daring everyone to sing along.",
    "A mustache, a white tank top, and a fist punching the sky.",
    "Opera smashed into rock with a wink and a flourish.",
    "The frontman who held a hundred thousand people in the palm of one hand."
  ]
},
{
  answer: "David Bowie",
  category: "Person",
  aura: "#E84C7A",
  clues: [
    "A shapeshifter who made strangeness feel like home.",
    "Two different-colored eyes watching from somewhere not quite Earth.",
    "A lightning bolt painted across a pale, otherworldly face.",
    "Reinvention as a way of life, each self brighter than the last.",
    "The alien who taught the outsiders they were beautiful."
  ]
},
{
  answer: "Prince",
  category: "Person",
  aura: "#5E2D91",
  clues: [
    "Sensuality and genius packed into a small, electric frame.",
    "A color that became a name that became a feeling.",
    "Heels, ruffles, and a guitar solo that could melt the room.",
    "Funk, rock, and falsetto all answering to one restless mind.",
    "The purple icon who played every instrument and broke every rule."
  ]
},
{
  answer: "Madonna",
  category: "Person",
  aura: "#F2A6C2",
  clues: [
    "Reinvention as religion, scandal as strategy.",
    "A woman who turned provocation into a long career.",
    "Lace gloves, crucifixes, and a refusal to ever stay still.",
    "Always one step ahead of the outrage she caused.",
    "The material girl who kept rewriting what a pop star could be."
  ]
},
{
  answer: "Michael Jackson",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "A body that seemed to glide instead of walk.",
    "Joy and loneliness sharing a single sequined glove.",
    "A fedora tilted low, toes balanced on impossible angles.",
    "The whole planet learning the same dance at the same time.",
    "Childhood lost and chased forever, set to an unstoppable beat."
  ]
},
{
  answer: "Whitney Houston",
  category: "Person",
  aura: "#E8C8D8",
  clues: [
    "A voice that climbed higher than seemed humanly safe.",
    "Power and heartbreak braided into one held note.",
    "Love sung so completely it left no room for doubt.",
    "A gown, a spotlight, and a key change that stopped time.",
    "The greatest voice, undone by the weight it carried."
  ]
},
{
  answer: "Aretha Franklin",
  category: "Person",
  aura: "#9B59B6",
  clues: [
    "A demand spelled out one letter at a time.",
    "Church and rebellion pouring from the same throat.",
    "Dignity sung loud enough to shake a movement awake.",
    "A voice that turned a request into a command.",
    "The queen who made respect sound like the law."
  ]
},
{
  answer: "Bob Marley",
  category: "Person",
  aura: "#2E8B57",
  clues: [
    "Calm resistance set to a swaying, sun-warmed rhythm.",
    "A promise that every little thing is gonna be alright.",
    "Dreadlocks, smoke, and a green-gold-red horizon.",
    "Songs of freedom carried on an island breeze.",
    "The gentle prophet who turned struggle into a groove."
  ]
},
{
  answer: "Audrey Hepburn",
  category: "Person",
  aura: "#1C1C1C",
  clues: [
    "Elegance so effortless it looked like breathing.",
    "Big doe eyes and a slender, impossible grace.",
    "A little black dress and pearls at dawn outside a jewelry window.",
    "Kindness that aged into quiet, lifelong generosity.",
    "The face that taught the world what 'classy' looks like."
  ]
},
{
  answer: "James Dean",
  category: "Person",
  aura: "#A82E2E",
  clues: [
    "Rebellion frozen forever at its most beautiful.",
    "A red jacket, a cigarette, and a wounded, restless stare.",
    "Cool that came from not seeming to try at all.",
    "Youth that never had to grow old or disappoint.",
    "The reckless heartthrob gone in a flash of bent metal."
  ]
},
{
  answer: "Marlon Brando",
  category: "Person",
  aura: "#3A3A2E",
  clues: [
    "Mumbling magnetism that rewrote what acting could be.",
    "A torn shirt, a howl up a stairwell, raw nerve on screen.",
    "Power that whispered offers no one could refuse.",
    "Brooding intensity wrapped in cotton and sweat.",
    "The heavyweight who could have been a contender, and was."
  ]
},
{
  answer: "Meryl Streep",
  category: "Person",
  aura: "#7E8BA6",
  clues: [
    "A chameleon who disappears completely into anyone she becomes.",
    "Every accent, every era, worn like a second skin.",
    "Precision that makes the hardest acting look like nothing.",
    "Quiet command in a room full of louder performances.",
    "The standard everyone else is quietly measured against."
  ]
},
{
  answer: "Robin Williams",
  category: "Person",
  aura: "#3DAEE0",
  clues: [
    "A mind that ran too fast and too kind for one body.",
    "Manic joy that left audiences breathless and grateful.",
    "Laughter offered as a gift to hide a private ache.",
    "Voices and characters tumbling out faster than thought.",
    "The clown whose tears were the cost of everyone else's."
  ]
},
{
  answer: "Tom Hanks",
  category: "Person",
  aura: "#C9A24B",
  clues: [
    "Decency turned into a movie star, somehow.",
    "The face you'd trust to narrate your own life.",
    "An everyman stranded, marooned, lost, and always endearing.",
    "Warmth that makes even strangers feel like old friends.",
    "The good man Hollywood keeps casting because we believe him."
  ]
},
{
  answer: "Leonardo DiCaprio",
  category: "Person",
  aura: "#2E5C8A",
  clues: [
    "Boyish charm that grew into restless, drowning intensity.",
    "A frozen ship, a floating door, and one hand slipping away.",
    "The chase for a golden statue that took agonizingly long.",
    "Earnest passion poured into roles that won't let go.",
    "The heartthrob turned serious, still king of the world."
  ]
},
{
  answer: "Denzel Washington",
  category: "Person",
  aura: "#6B4226",
  clues: [
    "Authority that doesn't need to raise its voice to be obeyed.",
    "Righteous fury and quiet dignity in the same gaze.",
    "A presence that makes every line sound earned.",
    "Gravitas worn like a well-tailored coat.",
    "The actor whose command of a scene feels like gravity."
  ]
},
{
  answer: "Morgan Freeman",
  category: "Person",
  aura: "#7A6A55",
  clues: [
    "A voice so calm it could narrate the end of the world gently.",
    "Wisdom that seems to come from somewhere just above the room.",
    "Patience, freckles, and an unhurried, reassuring warmth.",
    "The sound you'd want explaining the universe to you.",
    "The man whose narration makes anything feel true."
  ]
},
{
  answer: "Al Pacino",
  category: "Person",
  aura: "#5C1F1F",
  clues: [
    "A whisper that can erupt into a roar without warning.",
    "Loyalty and menace simmering behind dark, watchful eyes.",
    "A family business that pulls a man back every time he leaves.",
    "Explosive intensity barely held in check.",
    "The actor who turned shouting into a kind of music."
  ]
},
{
  answer: "Robert De Niro",
  category: "Person",
  aura: "#4A4A4A",
  clues: [
    "A question asked into a mirror that became cinema legend.",
    "Coiled danger in a slight, watchful frame.",
    "Transformation so total he'd change his whole body for a role.",
    "Quiet menace that could turn in a heartbeat.",
    "The face of a hundred troubled, unforgettable men."
  ]
},
{
  answer: "Audrey Tautou",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "Wide-eyed whimsy wandering a storybook version of a city.",
    "Mischief and tenderness arranging strangers' happiness.",
    "A bob of dark hair and a secret, playful smile.",
    "Small kindnesses turned into a fairy tale of red and green.",
    "The gamine heroine who finds magic in tiny gestures."
  ]
},
{
  answer: "Bruce Lee",
  category: "Person",
  aura: "#D4AF37",
  clues: [
    "Speed so pure the eye could barely follow it.",
    "Philosophy and fury moving in perfect harmony.",
    "Water as a teacher: shapeless, formless, unstoppable.",
    "A single shout, a flexed stillness, then a blur.",
    "The body that turned martial arts into poetry, gone far too soon."
  ]
},
{
  answer: "Muhammad Ali",
  category: "Person",
  aura: "#C8A951",
  clues: [
    "Confidence loud enough to become a kind of art.",
    "Floating, stinging, dancing where others only swung.",
    "A man who gave up everything rather than fight a war he hated.",
    "Poetry thrown with the same speed as the punches.",
    "The greatest, who told you so himself, and was right."
  ]
},
{
  answer: "Serena Williams",
  category: "Person",
  aura: "#E8B84B",
  clues: [
    "Power that made a quiet sport sound like thunder.",
    "Dominance held across decades while the world tried to catch up.",
    "A grunt, a serve, and a crowd already knowing the outcome.",
    "Grace and ferocity sharing the same swing.",
    "The queen of the court who redefined what a champion looks like."
  ]
},
{
  answer: "Pelé",
  category: "Person",
  aura: "#2E8B57",
  clues: [
    "Joy turned into the movement of a ball at someone's feet.",
    "A poor boy who made the whole world fall for a game.",
    "A leap, a bicycle kick, a stadium losing its mind.",
    "The beautiful game given its most beautiful face.",
    "The king who made an entire nation synonymous with brilliance."
  ]
},
{
  answer: "Lionel Messi",
  category: "Person",
  aura: "#75AADB",
  clues: [
    "Genius packed into a small, quiet, unassuming frame.",
    "A ball that seems glued to his feet as defenders fall away.",
    "Years of nearly, finally answered by lifting gold.",
    "Effortless magic from someone who barely celebrates it.",
    "The little maestro who made greatness look almost shy."
  ]
},
{
  answer: "Cristiano Ronaldo",
  category: "Person",
  aura: "#1B3A6B",
  clues: [
    "Obsession sculpted into a body and a relentless will.",
    "A leap that hangs in the air a half-second too long.",
    "Hunger for greatness that never once seems satisfied.",
    "A wide stance, a deep breath, and a free kick about to fly.",
    "The machine of ambition who turned self-belief into a brand."
  ]
},
{
  answer: "Usain Bolt",
  category: "Person",
  aura: "#FFD700",
  clues: [
    "Speed so casual it looked like he was barely trying.",
    "A grin mid-race while everyone else strained behind.",
    "A pose like an archer aiming at the sky.",
    "Lightning made human, then slowing down to wave.",
    "The fastest man, who made the impossible look like fun."
  ]
}
,
{
  answer: "Isaac Newton",
  category: "Person",
  aura: "#5B4A3A",
  clues: [
    "A mind that saw the rules holding the whole sky in place.",
    "Something falling from a tree starting an entire revolution of thought.",
    "Light pulled apart into a secret rainbow.",
    "Solitude, obsession, and the courage to math the heavens.",
    "The man who explained why everything falls, and what keeps the moon from doing the same."
  ]
},
{
  answer: "Charles Darwin",
  category: "Person",
  aura: "#3E5C3A",
  clues: [
    "A patient idea that quietly rearranged how we see ourselves.",
    "Finches, tortoises, and a long slow voyage of noticing.",
    "The unsettling truth that everything alive is related.",
    "A long beard and a notebook full of branching life.",
    "The thinker who traced all living things back to a shared beginning."
  ]
},
{
  answer: "Marie Curie",
  category: "Person",
  aura: "#7FD4C1",
  clues: [
    "Devotion to discovery that quietly cost her everything.",
    "A faint glow in the dark that meant both wonder and danger.",
    "A woman breaking into rooms that locked her out.",
    "Tireless hands stirring something that would one day undo her.",
    "The pioneer whose brilliance still hums, radioactive, in her notebooks."
  ]
},
{
  answer: "Nikola Tesla",
  category: "Person",
  aura: "#5BA8D4",
  clues: [
    "A visionary who saw the future and was robbed of the credit.",
    "Electricity bent to the will of a restless, lonely mind.",
    "Lightning summoned indoors like a tamed animal.",
    "Dreams of free energy and a world wired without wires.",
    "The genius who lit the modern age and died nearly forgotten."
  ]
},
{
  answer: "Stephen Hawking",
  category: "Person",
  aura: "#2A3A5C",
  clues: [
    "A mind that roamed the cosmos while the body sat still.",
    "Black holes explained by someone who couldn't move his hand.",
    "A flat synthesized voice carrying the biggest questions.",
    "Wit and wonder against a slow, relentless silence.",
    "The thinker who explored the edge of time from a wheelchair."
  ]
},
{
  answer: "Galileo Galilei",
  category: "Person",
  aura: "#6B5B3A",
  clues: [
    "A man punished for daring to point a tube at the sky.",
    "The unsettling idea that we are not the center of anything.",
    "Moons circling somewhere they weren't supposed to be.",
    "Truth muttered under his breath after being forced to recant.",
    "The one who looked up, saw the real arrangement, and paid for it."
  ]
},
{
  answer: "Jane Austen",
  category: "Person",
  aura: "#D8B4C8",
  clues: [
    "Sharp wit hidden inside polite drawing-room conversation.",
    "Love stories that were secretly devastating social critiques.",
    "Bonnets, balls, and women quietly fighting for their futures.",
    "Irony so dry it took the world a century to fully laugh.",
    "The novelist who made marriage plots into immortal comedy."
  ]
},
{
  answer: "Ernest Hemingway",
  category: "Person",
  aura: "#5C6B5A",
  clues: [
    "Sentences stripped down to bone and muscle.",
    "Bravado and bullfights hiding a deep, quiet wound.",
    "An old man, a fish, and the dignity of losing well.",
    "Adventure chased across continents and bottles.",
    "The writer who said the most by leaving the most unsaid."
  ]
},
{
  answer: "Edgar Allan Poe",
  category: "Person",
  aura: "#2B1F2B",
  clues: [
    "Dread that creeps in slowly and never quite leaves.",
    "A beating heart beneath the floorboards of the mind.",
    "Ravens, crypts, and the thin line between grief and madness.",
    "Beauty and decay sharing the same candlelit room.",
    "The poet of nightmares who made melancholy into music."
  ]
},
{
  answer: "Agatha Christie",
  category: "Person",
  aura: "#7A5C3A",
  clues: [
    "Murder served in drawing rooms with perfect manners.",
    "A puzzle where everyone is guilty of something.",
    "The satisfying click of every clue falling into place.",
    "A train, a snowstorm, and a body no one can explain.",
    "The queen of the twist nobody saw coming."
  ]
},
{
  answer: "Walt Disney",
  category: "Person",
  aura: "#3DA5E0",
  clues: [
    "A dreamer who built whole worlds out of make-believe.",
    "A mouse drawn in a hurry that conquered childhood forever.",
    "Castles, fireworks, and the promise of a happily ever after.",
    "Imagination turned into an empire of wonder.",
    "The man who decided magic could be an industry."
  ]
},
{
  answer: "Thomas Edison",
  category: "Person",
  aura: "#E0B84B",
  clues: [
    "A thousand failures stacked into one glowing success.",
    "Stubbornness that lit up the dark and called it genius.",
    "A glass bulb humming with a brand-new kind of light.",
    "A workshop that turned tinkering into a factory of ideas.",
    "The inventor who industrialized the very act of inventing."
  ]
},
{
  answer: "Henry Ford",
  category: "Person",
  aura: "#3A3A3A",
  clues: [
    "A line that moved so people didn't have to.",
    "The dream of putting the whole world on wheels.",
    "Any color you like, as long as it's black.",
    "Repetition turned into affordability turned into a new century.",
    "The man who made the machine that made everything else faster."
  ]
},
{
  answer: "Elon Musk",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "Ambition aimed at the planet and then off of it entirely.",
    "Rockets that land themselves and promises that sometimes don't.",
    "A restless billionaire turning sci-fi into a to-do list.",
    "Cars without engines and tunnels under the traffic.",
    "The provocateur racing to make humanity a multi-planet species."
  ]
},
{
  answer: "Bill Gates",
  category: "Person",
  aura: "#4A6B8A",
  clues: [
    "A nerd who quietly put a machine in every office on earth.",
    "Glasses, a sweater, and software that ran the world.",
    "Wealth so vast it turned into a second career of giving it away.",
    "The unglamorous genius of the thing everyone uses and forgets.",
    "The founder who got rich on windows that weren't made of glass."
  ]
},
{
  answer: "Mark Zuckerberg",
  category: "Person",
  aura: "#4267B2",
  clues: [
    "A college project that swallowed the social lives of billions.",
    "A gray shirt and an unblinking, slightly robotic calm.",
    "Friendship turned into a feed turned into an empire.",
    "The awkward kid who connected the world and unsettled it.",
    "The founder who made everyone's privacy his business."
  ]
},
{
  answer: "Jeff Bezos",
  category: "Person",
  aura: "#FF9900",
  clues: [
    "A bookstore that grew until it sold the whole world.",
    "A smile shaped like an arrow from A to Z.",
    "Convenience so total it arrives on your doorstep by tomorrow.",
    "A laugh that echoes from a desk to the edge of space.",
    "The man who made waiting for anything feel obsolete."
  ]
}
,
{
  answer: "Rihanna",
  category: "Person",
  aura: "#A8324A",
  clues: [
    "Effortless cool that turned into an empire of everything.",
    "An island accent over a beat that owns the summer.",
    "Beauty, makeup, and a 'don't care' that everyone copies.",
    "A voice that dares you to find your umbrella in the rain.",
    "The star who got bored of music and conquered fashion instead."
  ]
},
{
  answer: "Adele",
  category: "Person",
  aura: "#3A4A5C",
  clues: [
    "Heartbreak so beautiful it feels almost worth it.",
    "A voice that calls an old lover just to say hello.",
    "Rolling regret turned into a stadium singalong of tears.",
    "Big hair, bigger emotions, and a laugh between the sobs.",
    "The one whose breakup albums became everyone's breakup albums."
  ]
},
{
  answer: "Lady Gaga",
  category: "Person",
  aura: "#E8447A",
  clues: [
    "Theatrical strangeness offered as a shelter for the outcasts.",
    "A meat dress, a piano, and a heart bigger than the spectacle.",
    "Born this way, and daring everyone else to be too.",
    "Pop monster one year, jazz crooner the next.",
    "The performer who hid raw talent under outrageous armor."
  ]
},
{
  answer: "Kanye West",
  category: "Person",
  aura: "#B0A99F",
  clues: [
    "Genius and chaos refusing to be separated.",
    "A talent that keeps interrupting its own legacy.",
    "Soul samples sped up into something brand new.",
    "Confidence inflated to the size of a god complex.",
    "The artist who can't stop being his own loudest controversy."
  ]
},
{
  answer: "Drake",
  category: "Person",
  aura: "#3A4750",
  clues: [
    "Sensitive bravado that texts you at 2am.",
    "A child actor who became the sound of the decade.",
    "Started somewhere humble, mentions it constantly.",
    "Melancholy you can still dance to in the club.",
    "The one who blurred the line between rapping and feeling sorry for himself."
  ]
},
{
  answer: "Eminem",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "Rage and wordplay spit so fast the page can't keep up.",
    "An outsider who turned a hard childhood into a weapon.",
    "Bleached hair, a hoodie, and a sneer at the whole industry.",
    "Vulnerability and venom in the same breathless verse.",
    "The one whose palms were sweaty, knees weak, before the world knew his name."
  ]
},
{
  answer: "Snoop Dogg",
  category: "Person",
  aura: "#2E8B57",
  clues: [
    "Laid-back cool with a drawl that stretches every word.",
    "Smoke, sunshine, and a grin that never fully fades.",
    "A West Coast bounce that aged into beloved uncle status.",
    "Braids, a joint, and an unhurried, easy charm.",
    "The rapper who became everyone's favorite mellow grandpa."
  ]
},
{
  answer: "Frank Sinatra",
  category: "Person",
  aura: "#2A3A5C",
  clues: [
    "Effortless swagger in a sharp suit and a tilted hat.",
    "Doing it all entirely his own way, to the very end.",
    "A martini, a microphone, and a city that never sleeps.",
    "A voice smooth as whiskey over crooning strings.",
    "The chairman whose cool defined an entire era of cool."
  ]
},
{
  answer: "Louis Armstrong",
  category: "Person",
  aura: "#C9A24B",
  clues: [
    "A gravelly voice that found the wonderful in the world.",
    "A trumpet that smiled and a smile you could hear.",
    "Joy played so warmly it felt like sunshine.",
    "A handkerchief, a grin, and a low rumbling 'oh yeah.'",
    "The man who marveled at what a wonderful world it is."
  ]
},
{
  answer: "Tupac Shakur",
  category: "Person",
  aura: "#3A3A3A",
  clues: [
    "Poetry and pain braided into bulletproof verses.",
    "A rose growing defiantly out of cracked concrete.",
    "Anger, tenderness, and prophecy in one short, blazing life.",
    "A bandana and a stare that saw the whole struggle.",
    "The voice of a generation, silenced young, never quite gone."
  ]
},
{
  answer: "Winston Churchill",
  category: "Person",
  aura: "#4A4A3A",
  clues: [
    "Stubborn defiance growled through a cloud of cigar smoke.",
    "A nation told it would never, ever surrender.",
    "A round figure, a bow tie, and a V held up two fingers.",
    "Words that stiffened a country's spine in its darkest hour.",
    "The bulldog who promised blood, toil, tears, and sweat."
  ]
},
{
  answer: "Queen Elizabeth II",
  category: "Person",
  aura: "#6B3FA0",
  clues: [
    "Duty worn quietly for longer than most people live.",
    "A small woman who outlasted every storm around her.",
    "A handbag, a headscarf, and corgis at her heels.",
    "Constancy itself, waving the same steady wave for decades.",
    "The crown that never wavered while everything else changed."
  ]
},
{
  answer: "Julius Caesar",
  category: "Person",
  aura: "#7A1F1F",
  clues: [
    "Ambition that crossed a river it was forbidden to cross.",
    "Conquest, oratory, and a laurel crown over thinning hair.",
    "Friends with knives at the foot of the marble steps.",
    "A man who came, saw, and took everything.",
    "Betrayal so famous a final breath became a question."
  ]
},
{
  answer: "Alexander the Great",
  category: "Person",
  aura: "#C8A951",
  clues: [
    "A young man who ran out of world to conquer.",
    "An empire stretched from one sea to the edge of the known.",
    "A horse, a sword, and a hunger nothing could fill.",
    "Greatness chased so far it left him weeping for more.",
    "The boy king who tied the world together and then died of it."
  ]
},
{
  answer: "Genghis Khan",
  category: "Person",
  aura: "#5C3A2E",
  clues: [
    "A storm of riders that swallowed half a continent.",
    "Terror and order arriving on horseback from the steppe.",
    "An empire built faster than anyone thought possible.",
    "The thunder of hooves under an endless grassland sky.",
    "The conqueror whose bloodline still runs through millions."
  ]
}
,
{
  answer: "Anne Frank",
  category: "Person",
  aura: "#9CAF88",
  clues: [
    "Hope written in pencil while the world outside went dark.",
    "A young girl's voice that outlived the silence meant to erase it.",
    "A hidden room, a creaking attic, and a diary kept like a friend.",
    "Belief that people are really good at heart, despite everything.",
    "The teenager whose private pages became the conscience of an era."
  ]
},
{
  answer: "Helen Keller",
  category: "Person",
  aura: "#A8C4D4",
  clues: [
    "A world reached through fingertips when two senses were gone.",
    "Water spelled into a palm, opening the entire universe.",
    "Patience and fury overcoming a locked-in silence.",
    "Triumph carved out of darkness and quiet.",
    "The woman who proved the mind can outrun the body's limits."
  ]
},
{
  answer: "Rosa Parks",
  category: "Person",
  aura: "#7A5C8A",
  clues: [
    "Quiet refusal that set a whole movement in motion.",
    "Tired feet and an unshakable sense of enough.",
    "A seat held simply by staying still.",
    "Dignity expressed by not standing up.",
    "The calm spark that lit a long walk toward justice."
  ]
},
{
  answer: "Malala Yousafzai",
  category: "Person",
  aura: "#E84C7A",
  clues: [
    "Courage that survived the cost of speaking up.",
    "A girl who refused to be silenced about going to school.",
    "A headscarf and a voice steadier than the bullet meant to stop it.",
    "Education defended as if it were worth dying for, because it was.",
    "The youngest to stand on the world's biggest stage for peace."
  ]
},
{
  answer: "Greta Thunberg",
  category: "Person",
  aura: "#3E7A4E",
  clues: [
    "Fury at the adults who stole a future yet to come.",
    "A child skipping school to scold the whole planet.",
    "Braids, a raincoat, and a glare that says how dare you.",
    "A small voice that made world leaders squirm.",
    "The teenager who turned climate dread into a movement."
  ]
},
{
  answer: "Stephen King",
  category: "Person",
  aura: "#7A1F1F",
  clues: [
    "Ordinary towns where something is always terribly wrong.",
    "Fear that hides in storm drains and old hotels.",
    "A clown, a car, a haunted corridor of typed pages.",
    "Glasses, a prolific pen, and an endless supply of nightmares.",
    "The author who can make a small town the scariest place on earth."
  ]
},
{
  answer: "Andy Warhol",
  category: "Person",
  aura: "#E84C7A",
  clues: [
    "Fame predicted to last exactly fifteen minutes.",
    "Soup cans and celebrity printed over and over in loud color.",
    "A silver wig and a flat, watchful detachment.",
    "Art that asked whether anything was art at all.",
    "The man who turned the ordinary and the famous into the same bright product."
  ]
},
{
  answer: "Banksy",
  category: "Person",
  aura: "#3A3A3A",
  clues: [
    "Rebellion sprayed on a wall and gone before dawn.",
    "A face no one knows attached to images everyone does.",
    "A girl, a balloon, and a painting that shredded itself.",
    "Sharp politics smuggled into stencils overnight.",
    "The anonymous ghost who turned vandalism into priceless commentary."
  ]
}
,
{
  answer: "Rome",
  category: "Place",
  aura: "#B5651D",
  clues: [
    "A city where every street is standing on its own ghosts.",
    "The warm ache of grandeur slowly crumbling in the sun.",
    "Fountains, ruins, and scooters weaving past two thousand years.",
    "A coin tossed over a shoulder into rushing water.",
    "An empire's faded heart where you eat dinner among the gods."
  ]
},
{
  answer: "Venice",
  category: "Place",
  aura: "#4A8C9E",
  clues: [
    "A place slowly, romantically drowning, and beautiful for it.",
    "Streets made of water and footsteps that splash.",
    "Masks, gondolas, and the smell of salt and old stone.",
    "Bridges over green canals under peeling pastel walls.",
    "The sinking city where there are no cars, only boats and longing."
  ]
},
{
  answer: "Venice Beach",
  category: "Place",
  aura: "#F2A65A",
  clues: [
    "Sun-bleached freedom where everyone is performing something.",
    "Muscles, skateboards, and incense on a crowded boardwalk.",
    "Palm trees over a strip of glorious weirdness.",
    "Roller skates, street drummers, and the smell of sunscreen.",
    "The California shoreline where eccentricity is the local sport."
  ]
},
{
  answer: "Kyoto",
  category: "Place",
  aura: "#C44569",
  clues: [
    "Stillness kept alive on purpose while the world rushes by.",
    "Raked gravel, tea, and the soft slide of paper doors.",
    "Wooden temples glowing under falling pink petals.",
    "A figure in silk slippers vanishing down a lantern-lit lane.",
    "The old soul of a country, bowing quietly among the gardens."
  ]
},
{
  answer: "Dubai",
  category: "Place",
  aura: "#D4AF37",
  clues: [
    "Ambition poured out of the desert and stacked toward the sky.",
    "Air conditioning, gold, and supercars on melting sand.",
    "A skyline that didn't exist a generation ago, gleaming impossibly.",
    "Indoor ski slopes and fountains dancing for the cameras.",
    "The city that decided the desert should hold the tallest of everything."
  ]
},
{
  answer: "Las Vegas",
  category: "Place",
  aura: "#E8447A",
  clues: [
    "A fever dream of light and luck stranded in the desert.",
    "A place where the clocks vanish and the night never ends.",
    "Neon, slot machines, and the smell of free drinks and regret.",
    "Fake towers of the whole world crammed onto one bright strip.",
    "The city where what happens there famously stays there."
  ]
},
{
  answer: "Rio de Janeiro",
  category: "Place",
  aura: "#2EA96B",
  clues: [
    "Joy and danger dancing on the same golden sand.",
    "A mountain, a statue, and arms spread over the whole bay.",
    "Drumbeats, feathers, and bodies moving until dawn.",
    "Beaches below, favelas above, music tying them together.",
    "The city of carnival, where the whole place becomes a party."
  ]
},
{
  answer: "Istanbul",
  category: "Place",
  aura: "#3E6B8C",
  clues: [
    "A city standing with one foot on each of two continents.",
    "Domes, minarets, and the call to prayer over a busy strait.",
    "Spices, carpets, and tea in tiny tulip-shaped glasses.",
    "Ferries crossing water where two worlds have always met.",
    "The bridge between East and West, layered with empires."
  ]
},
{
  answer: "Marrakech",
  category: "Place",
  aura: "#C0392B",
  clues: [
    "A maze that swallows you in color and smoke and noise.",
    "Spice, leather, and snake charmers in a square at dusk.",
    "Rose-red walls glowing in a relentless desert sun.",
    "Lanterns, haggling, and mint tea poured from high above.",
    "The old city where every turn is louder and brighter than the last."
  ]
},
{
  answer: "Amsterdam",
  category: "Place",
  aura: "#C87941",
  clues: [
    "Leaning houses reflected in calm, narrow water.",
    "A thousand bicycles ringing past tall thin windows.",
    "Freedom, tulips, and canals you could fall in love beside.",
    "Brick gables tilting gently over a quiet waterway.",
    "The relaxed city of bikes, bridges, and easy tolerance."
  ]
},
{
  answer: "Barcelona",
  category: "Place",
  aura: "#E8845A",
  clues: [
    "A city where the buildings seem to melt and bloom.",
    "Mosaic dragons and a cathedral that's still not finished.",
    "Late dinners, sea breeze, and architecture that dreams.",
    "Wavy stone, broken tile, and warm Mediterranean light.",
    "The place where one architect's fever dream became the skyline."
  ]
},
{
  answer: "Cairo",
  category: "Place",
  aura: "#C8A951",
  clues: [
    "A chaotic, ancient sprawl beside a slow eternal river.",
    "Honking traffic in the shadow of impossibly old stone.",
    "Dust, prayer, and triangles rising at the city's edge.",
    "Markets, minarets, and a haze of golden heat.",
    "The teeming modern city crouched beside the oldest tombs on earth."
  ]
},
{
  answer: "Mumbai",
  category: "Place",
  aura: "#E8A33D",
  clues: [
    "Dreams and survival crammed shoulder to shoulder.",
    "Monsoon rain, film posters, and a million hustling lives.",
    "Trains so full they overflow, carrying a whole city's hopes.",
    "Spice, sea air, and the relentless energy of never stopping.",
    "The city of stars and slums where everyone is chasing something."
  ]
},
{
  answer: "Bangkok",
  category: "Place",
  aura: "#E8447A",
  clues: [
    "Sensory overload that somehow feels like a warm welcome.",
    "Golden temples beside neon and sizzling street woks.",
    "Tuk-tuks, incense, and the smell of chili and lemongrass.",
    "Heat, traffic, and smiles in a city that never quite sleeps.",
    "The sprawling, glittering capital where the sacred meets the wild."
  ]
},
{
  answer: "Iceland",
  category: "Place",
  aura: "#5BA8B5",
  clues: [
    "A landscape that feels like the day after creation, or before it.",
    "Steam rising from black rock under a low silver sky.",
    "Waterfalls, glaciers, and skies that ripple green at night.",
    "Moss, lava, and a silence so complete it hums.",
    "The island of fire and ice where the earth is visibly alive."
  ]
}
,
{
  answer: "The Grand Canyon",
  category: "Place",
  aura: "#C1632E",
  clues: [
    "A wound in the earth so vast it makes you go quiet.",
    "Deep time made visible, layer by colored layer.",
    "Rust, rose, and shadow stretching beyond what eyes can hold.",
    "A river that patiently carved a hole you could lose a city in.",
    "The great red chasm that makes everyone feel briefly small."
  ]
},
{
  answer: "Mount Everest",
  category: "Place",
  aura: "#D6E4EC",
  clues: [
    "The highest place a person can stand, and the deadliest to reach.",
    "Thin air, frozen lungs, and a line of climbers chasing the top.",
    "A white pyramid that asks for everything you have.",
    "Prayer flags snapping in wind that could kill you.",
    "The roof of the world, beautiful and merciless above the clouds."
  ]
},
{
  answer: "The Sahara",
  category: "Place",
  aura: "#E0A458",
  clues: [
    "An ocean of sand that swallows sound and time.",
    "Dunes rippling to every horizon under a brutal sun.",
    "Heat by day, freezing stars by night, silence always.",
    "Camel tracks erased by wind within the hour.",
    "The vast golden emptiness that makes the world feel infinite."
  ]
},
{
  answer: "The Amazon Rainforest",
  category: "Place",
  aura: "#1E6B3A",
  clues: [
    "A green so dense it breathes for the whole planet.",
    "Rain, calls, and life stacked in impossible layers.",
    "A river so wide you can't see the far bank.",
    "Heat, mist, and creatures no one has even named yet.",
    "The lungs of the earth, teeming and ancient and shrinking."
  ]
},
{
  answer: "Niagara Falls",
  category: "Place",
  aura: "#5BA8C4",
  clues: [
    "A roar so total it drowns out everything else, even thought.",
    "Mist that soaks you from a hundred feet away.",
    "Honeymoons, barrels, and a thunder of falling water.",
    "A rainbow standing in the spray above the green rush.",
    "The famous curtain of water where two countries share the view."
  ]
},
{
  answer: "Santorini",
  category: "Place",
  aura: "#3E7AC4",
  clues: [
    "White and blue stacked on a cliff above an impossible sea.",
    "Sunsets so perfect they feel slightly unreal.",
    "Whitewashed domes glowing pink as the day ends.",
    "Narrow steps, bougainvillea, and the smell of salt and wine.",
    "The island postcard where the houses cling to a volcano's edge."
  ]
},
{
  answer: "The Maldives",
  category: "Place",
  aura: "#3FC4C4",
  clues: [
    "Water so clear it barely looks like it's there.",
    "Bungalows on stilts above a turquoise dream.",
    "Sand like sugar and a horizon of perfect nothing.",
    "Fish gliding under a glass-floored room at sunrise.",
    "The scattered island paradise that's slowly slipping under the sea."
  ]
},
{
  answer: "Antarctica",
  category: "Place",
  aura: "#D6ECF2",
  clues: [
    "A continent that belongs to no one and almost no one.",
    "White silence broken only by cracking ice.",
    "Penguins, blizzards, and a cold beyond imagining.",
    "Endless day, then endless night, over endless frozen blue.",
    "The bottom of the world, where humans are only ever guests."
  ]
},
{
  answer: "Hawaii",
  category: "Place",
  aura: "#2EA96B",
  clues: [
    "Paradise grown out of fire in the middle of an ocean.",
    "Flower garlands, surf, and the smell of plumeria.",
    "Volcanoes, waterfalls, and waves that built a culture.",
    "Ukulele, warm rain, and a word that means both hello and goodbye.",
    "The string of green islands where the lava meets the luau."
  ]
},
{
  answer: "Switzerland",
  category: "Place",
  aura: "#5BA8C4",
  clues: [
    "Order, snow, and a calm that feels almost suspicious.",
    "Cowbells echoing across impossibly green high valleys.",
    "Chocolate, watches, and peaks that pierce the clouds.",
    "Trains that arrive to the exact second between the mountains.",
    "The neutral, tidy country where the Alps look painted on."
  ]
},
{
  answer: "Ireland",
  category: "Place",
  aura: "#3E8C5A",
  clues: [
    "A green so deep it must come from all that rain.",
    "Stone walls, sheep, and stories told over a slow pint.",
    "Cliffs falling into a gray and restless sea.",
    "Fiddles, mist, and a melancholy that smiles anyway.",
    "The emerald island of poets, pubs, and endless soft drizzle."
  ]
},
{
  answer: "Scotland",
  category: "Place",
  aura: "#5C6B7A",
  clues: [
    "Wild beauty wrapped in fog and stubborn pride.",
    "Bagpipes wailing across empty, heather-purple hills.",
    "Castles, lochs, and a monster maybe lurking in the deep.",
    "Whisky, tartan, and wind that cuts right through you.",
    "The rugged highland land of mist, clans, and brooding lakes."
  ]
},
{
  answer: "Egypt",
  category: "Place",
  aura: "#D4AF37",
  clues: [
    "A civilization so old it makes ancient feel young.",
    "Tombs of gold guarded by riddles in the sand.",
    "A green ribbon of life snaking through endless desert.",
    "Pharaohs, hieroglyphs, and stone that has watched millennia.",
    "The land of pyramids where the dead were built to last forever."
  ]
},
{
  answer: "Greece",
  category: "Place",
  aura: "#3E7AC4",
  clues: [
    "The birthplace of arguing about everything beautifully.",
    "Broken white columns against a blue you can taste.",
    "Olives, myth, and gods who behaved worse than people.",
    "Sun-baked ruins where philosophy and democracy were born.",
    "The cradle of Western thought, scattered across bright islands."
  ]
},
{
  answer: "India",
  category: "Place",
  aura: "#E8843D",
  clues: [
    "A billion lives, a thousand languages, one impossible whole.",
    "Color thrown in the air, spice in every breath.",
    "Temples, chaos, and a spirituality woven into the streets.",
    "A marble tomb built for love glowing white at dawn.",
    "The vast subcontinent where every sense is overwhelmed at once."
  ]
}
,
{
  answer: "Brazil",
  category: "Place",
  aura: "#2EA96B",
  clues: [
    "A whole country that moves like it's dancing.",
    "Football, samba, and rainforest in one enormous breath.",
    "Green and gold, sunshine and rhythm and noise.",
    "Beaches, jungle, and a joy that refuses to quit.",
    "The giant of the south where the party and the wild collide."
  ]
},
{
  answer: "Australia",
  category: "Place",
  aura: "#D4793A",
  clues: [
    "A whole continent that feels like a separate planet.",
    "Red dust, strange animals, and an enormous empty middle.",
    "Reefs, kangaroos, and a sun that means business.",
    "A big rock glowing orange in the center of nowhere.",
    "The land down under where the wildlife is its own warning label."
  ]
},
{
  answer: "China",
  category: "Place",
  aura: "#C0392B",
  clues: [
    "An ancient civilization racing into a neon future.",
    "A wall so long it's visible across the imagination.",
    "Red lanterns, dynasties, and cities sprung up overnight.",
    "Silk, tea, and dragons coiled through five thousand years.",
    "The vast country where the oldest history meets the newest skyline."
  ]
},
{
  answer: "Russia",
  category: "Place",
  aura: "#5C5C7A",
  clues: [
    "Vastness and cold and a brooding, melancholy soul.",
    "Onion domes glowing against an endless winter white.",
    "Vodka, ballet, and novels as heavy as the snow.",
    "A country so wide it spans a dozen sunrises.",
    "The immense northern land of frost, czars, and stubborn depth."
  ]
},
{
  answer: "Jamaica",
  category: "Place",
  aura: "#2E8B57",
  clues: [
    "A swaying island where the rhythm runs the day.",
    "Sun, smoke, and a bassline that never hurries.",
    "Green hills, blue water, and an easy 'no problem.'",
    "Spice, surf, and a beat that taught the world to skank.",
    "The laid-back island that gave reggae to the planet."
  ]
},
{
  answer: "The Vatican",
  category: "Place",
  aura: "#D4AF37",
  clues: [
    "The smallest country, holding the largest faith.",
    "A ceiling where God reaches for a fingertip.",
    "Robes, incense, and centuries of quiet, golden power.",
    "A square full of pilgrims watching one small window.",
    "The tiny walled state where a billion souls look for guidance."
  ]
},
{
  answer: "Machu Picchu",
  category: "Place",
  aura: "#5C8C5A",
  clues: [
    "A city in the clouds that the world forgot for centuries.",
    "Stone terraces clinging to a green vertical world.",
    "Mist parting to reveal a kingdom no road reached.",
    "Llamas grazing among ruins on a knife-edge peak.",
    "The lost mountain citadel hidden above the jungle for ages."
  ]
},
{
  answer: "The Colosseum",
  category: "Place",
  aura: "#B5651D",
  clues: [
    "A ring where a whole empire came to watch death as entertainment.",
    "Cheers and sand and the roar of fifty thousand thumbs.",
    "Crumbling arches that still hum with ancient bloodlust.",
    "A broken oval of stone glowing amber at dusk.",
    "The arena where gladiators fought, now a hollow, haunting shell."
  ]
},
{
  answer: "Stonehenge",
  category: "Place",
  aura: "#7A8A7A",
  clues: [
    "A riddle in stone no one has fully solved.",
    "Giant rocks arranged by people who left no explanation.",
    "Dawn light slicing through a circle on a cold green plain.",
    "Mystery standing patiently in the middle of a field.",
    "The ancient stone ring that still keeps its purpose secret."
  ]
},
{
  answer: "The Great Wall of China",
  category: "Place",
  aura: "#9A8466",
  clues: [
    "A line drawn across mountains to keep the world out.",
    "Stone snaking over ridges as far as the eye can follow.",
    "Centuries of labor crawling up impossible slopes.",
    "Watchtowers fading into haze along an endless spine.",
    "The wall so long it became a symbol of a whole nation."
  ]
},
{
  answer: "Times Square",
  category: "Place",
  aura: "#E8447A",
  clues: [
    "Light so bright the night never actually arrives.",
    "A crossroads where the whole world seems to be standing.",
    "Screens screaming, crowds shuffling, a ball about to drop.",
    "Sensory overload sold by the square foot.",
    "The blinding intersection where a million cameras flash at once."
  ]
},
{
  answer: "Hollywood",
  category: "Place",
  aura: "#D4AF37",
  clues: [
    "A hillside word that promises everyone they could be a star.",
    "Dreams and disappointment baked into the same warm pavement.",
    "Big letters on a hill above a city of waiting actors.",
    "Stars set into a sidewalk that everyone walks over.",
    "The place where fame is manufactured and broken hearts are local."
  ]
},
{
  answer: "Silicon Valley",
  category: "Place",
  aura: "#5BA8D4",
  clues: [
    "A stretch of suburbs that quietly rewired the entire world.",
    "Garages turned into garages-that-became-empires.",
    "Hoodies, whiteboards, and the next big thing on a napkin.",
    "Optimism and disruption sold with a pitch deck.",
    "The valley where the future keeps getting invented and overpromised."
  ]
},
{
  answer: "Mount Fuji",
  category: "Place",
  aura: "#A8C4E0",
  clues: [
    "A perfect cone that a whole culture treats as sacred.",
    "Snow-capped symmetry floating above a distant city.",
    "A shape painted ten thousand times and never tired of.",
    "Cherry blossoms in front of a calm, watching giant.",
    "The serene volcano that became a nation's quiet heart."
  ]
},
{
  answer: "The Northern Lights",
  category: "Place",
  aura: "#3EC4A8",
  clues: [
    "The sky deciding, for no reason, to dance.",
    "Green curtains rippling silently over a frozen world.",
    "Color that pours across the dark like slow electric water.",
    "A glow that makes strangers stand together in the cold and gasp.",
    "The auroras painting the polar night in shifting light."
  ]
}
,
{
  answer: "Coca-Cola",
  category: "Brand",
  aura: "#C8102E",
  clues: [
    "Happiness sold by the bottle, fizzing and bright red.",
    "A taste that means summer, holidays, and being young.",
    "A curvy glass shape recognizable in total darkness.",
    "Polar bears, Santa, and a hiss followed by a sigh.",
    "The red-and-white drink that tried to teach the world to sing."
  ]
},
{
  answer: "McDonald's",
  category: "Brand",
  aura: "#FFC72C",
  clues: [
    "Comfort and guilt arriving in the same paper bag.",
    "The same exact taste in every country on earth.",
    "Golden arches glowing like a beacon off the highway.",
    "A clown, fries, and a small toy that meant everything as a kid.",
    "The fast-food giant where billions have been lovin' it."
  ]
},
{
  answer: "Disney",
  category: "Brand",
  aura: "#3DA5E0",
  clues: [
    "Childhood packaged into castles and happily ever afters.",
    "A whole empire built on the magic of make-believe.",
    "Fireworks over a castle while a wish is being made.",
    "Mouse ears, princesses, and the most expensive nostalgia on earth.",
    "The brand that owns a generous slice of everyone's childhood."
  ]
},
{
  answer: "Google",
  category: "Brand",
  aura: "#4285F4",
  clues: [
    "A verb that swallowed the act of knowing anything.",
    "A blank box that became the door to all of human curiosity.",
    "Cheerful primary colors hiding immense quiet power.",
    "The first place anyone goes when they don't know.",
    "The search bar that turned 'I wonder' into an instant answer."
  ]
},
{
  answer: "Amazon",
  category: "Brand",
  aura: "#FF9900",
  clues: [
    "Desire fulfilled before you've finished wanting it.",
    "A box on the doorstep you don't remember the wait for.",
    "A smile-shaped arrow pointing at everything you could buy.",
    "Convenience so total it reshaped how the world shops.",
    "The everything store that arrives by tomorrow morning."
  ]
},
{
  answer: "Tesla",
  category: "Brand",
  aura: "#CC0000",
  clues: [
    "The future arriving silently, without a single drop of fuel.",
    "A car that updates itself overnight like a phone.",
    "Sleek, fast, and faintly like driving a spaceship.",
    "Doors that open like wings and a dashboard like a tablet.",
    "The electric brand that made the future feel like a status symbol."
  ]
},
{
  answer: "Adidas",
  category: "Brand",
  aura: "#1A1A1A",
  clues: [
    "Three lines that mean both the gym and the street.",
    "Sport that became style without breaking a sweat.",
    "Stripes down the side of everything a generation wore.",
    "A shell-toed shoe rappers wrote whole songs about.",
    "The rival brand of three stripes, equal parts pitch and pavement."
  ]
},
{
  answer: "Gucci",
  category: "Brand",
  aura: "#1B4332",
  clues: [
    "Old-money luxury that learned to talk to the young.",
    "Green and red stripes that whisper 'expensive.'",
    "Interlocking letters worth more than the leather they're on.",
    "Italian opulence worn like armor against being ordinary.",
    "The fashion house whose name itself became slang for fancy."
  ]
},
{
  answer: "Louis Vuitton",
  category: "Brand",
  aura: "#5C3D2E",
  clues: [
    "A repeating monogram that screams wealth in a whisper.",
    "Luggage that costs more than the trip it's packed for.",
    "Brown and gold initials stamped across a status symbol.",
    "The bag people carry to be seen carrying it.",
    "The trunk-maker turned ultimate signifier of having arrived."
  ]
},
{
  answer: "Rolex",
  category: "Brand",
  aura: "#1B5E3A",
  clues: [
    "Time told by something that costs more than a car.",
    "A crown on the dial that means you made it.",
    "Heavy gold on a wrist, ticking with quiet authority.",
    "Bought not to know the hour but to be seen knowing it.",
    "The watch that became the universal symbol of success."
  ]
},
{
  answer: "Ferrari",
  category: "Brand",
  aura: "#CC0000",
  clues: [
    "Speed shaped into the most desirable color there is.",
    "A prancing horse on a hood worth a fortune.",
    "An engine that snarls like a wild animal waking up.",
    "Red so iconic it became the definition of fast.",
    "The Italian dream car that every kid taped to their wall."
  ]
},
{
  answer: "Starbucks",
  category: "Brand",
  aura: "#00704A",
  clues: [
    "A green twin-tailed siren on every corner of every city.",
    "Your name spelled wrong on a warm paper cup.",
    "The same cozy ritual available anywhere in the world.",
    "Pumpkin spice as a season unto itself.",
    "The coffee chain that turned a daily habit into a global comfort."
  ]
},
{
  answer: "LEGO",
  category: "Brand",
  aura: "#E3000B",
  clues: [
    "Infinite worlds built from tiny clicking bricks.",
    "The specific agony of stepping on one barefoot at night.",
    "Primary colors snapping together into anything you imagine.",
    "Patience, plastic, and a thousand-piece afternoon.",
    "The little blocks that let kids build entire universes."
  ]
},
{
  answer: "Chanel",
  category: "Brand",
  aura: "#1A1A1A",
  clues: [
    "Elegance distilled into black, white, and a famous scent.",
    "Two interlocked letters that mean timeless taste.",
    "Pearls, tweed, and a little perfume bottle worth a fortune.",
    "Luxury so restrained it became the definition of chic.",
    "The house whose number-five fragrance is its own legend."
  ]
},
{
  answer: "Spotify",
  category: "Brand",
  aura: "#1DB954",
  clues: [
    "Every song ever made, glowing green in your pocket.",
    "A playlist that somehow knows your mood better than you do.",
    "The end of owning music and the start of just having all of it.",
    "A year-end recap that tells you who you really were.",
    "The streaming green that replaced the record store entirely."
  ]
}
,
{
  answer: "IKEA",
  category: "Brand",
  aura: "#0058A3",
  clues: [
    "A maze you can't escape until you've bought a candle.",
    "Furniture with unpronounceable names and missing screws.",
    "Blue and yellow, meatballs, and an afternoon-long argument.",
    "Flat boxes that promise simplicity and deliver an Allen key.",
    "The Swedish labyrinth where you go for a lamp and leave with a sofa."
  ]
},
{
  answer: "Red Bull",
  category: "Brand",
  aura: "#001489",
  clues: [
    "Energy in a slim can that claims to give you flight.",
    "The fuel of all-nighters and extreme stunts.",
    "Two bulls charging on a tiny silver-and-blue tin.",
    "Jumping from space, sponsored by a sugary buzz.",
    "The drink that promises wings and sells adrenaline."
  ]
},
{
  answer: "Supreme",
  category: "Brand",
  aura: "#EE2A24",
  clues: [
    "A red box that turned waiting in line into a flex.",
    "Hype distilled into a logo people fight to wear.",
    "Skate roots dressed up as luxury scarcity.",
    "A name slapped on a brick that people actually bought.",
    "The streetwear brand that made a sticker worth a fortune."
  ]
},
{
  answer: "PlayStation",
  category: "Brand",
  aura: "#003791",
  clues: [
    "A startup sound that means the night is about to disappear.",
    "Shapes on buttons that a generation knows by feel.",
    "Living rooms turned into battlefields and adventures.",
    "A controller worn smooth from thousands of hours.",
    "The console where countless childhoods and friendships lived."
  ]
},
{
  answer: "The Wizard of Oz",
  category: "Film",
  aura: "#3FA34D",
  clues: [
    "The moment the world bursts from gray into impossible color.",
    "A longing for home discovered far away from it.",
    "Ruby slippers clicking three times against the dark.",
    "A yellow road, a green city, and a curtain hiding a fraud.",
    "The cyclone-swept dream where there's no place like home."
  ]
},
{
  answer: "Casablanca",
  category: "Film",
  aura: "#3A3A2E",
  clues: [
    "Love sacrificed nobly in a smoky wartime café.",
    "A piano, a song, and a romance that can't survive the times.",
    "Trench coats, cigarettes, and farewells on a foggy runway.",
    "Of all the places in the world, she walks into his.",
    "The black-and-white classic where here's looking at you became forever."
  ]
},
{
  answer: "Titanic",
  category: "Film",
  aura: "#2E5C8A",
  clues: [
    "Love blooming aboard a doom everyone already knows.",
    "A ship called unsinkable meeting the cold dark sea.",
    "Arms spread at the bow, flying over freezing water.",
    "A door, a sketch, and a heart that goes on.",
    "The epic romance that sank slowly into a thousand tears."
  ]
},
{
  answer: "The Godfather",
  category: "Film",
  aura: "#2B1F1A",
  clues: [
    "Family loyalty curdling slowly into bloodshed.",
    "An offer murmured in shadow that cannot be refused.",
    "Oranges, opera, and a horse's head in cold sheets.",
    "A son pulled into a darkness he swore he'd escape.",
    "The crime saga where loyalty and murder share one dinner table."
  ]
},
{
  answer: "Star Wars",
  category: "Film",
  aura: "#FFE81F",
  clues: [
    "A timeless myth dressed up as the far future.",
    "A glowing blade hummed to life in a hero's hand.",
    "A farm boy discovering the whole galaxy needs him.",
    "Twin suns setting over a desert of destiny.",
    "The saga where a force binds everything and a father is revealed."
  ]
},
{
  answer: "Jaws",
  category: "Film",
  aura: "#1A3A4A",
  clues: [
    "Two notes that ruined the ocean for a generation.",
    "Dread circling just beneath a sunny summer surface.",
    "A bigger boat suddenly, urgently needed.",
    "A fin slicing toward swimmers who can't see it yet.",
    "The thriller that made everyone afraid of the water."
  ]
},
{
  answer: "The Shining",
  category: "Film",
  aura: "#7A1F2E",
  clues: [
    "Isolation slowly unscrewing a man's mind.",
    "An empty hotel where the walls remember murder.",
    "Twin girls in a hallway and blood pouring from an elevator.",
    "An axe through a door and a frozen, frozen grin.",
    "The horror where all work and no play turns deadly."
  ]
},
{
  answer: "Pulp Fiction",
  category: "Film",
  aura: "#C0392B",
  clues: [
    "Cool violence chopped up and shuffled out of order.",
    "Hitmen debating burgers between killings.",
    "A briefcase glowing with something never explained.",
    "A dance contest, a needle, and a very bad day.",
    "The film that made talky crime feel impossibly stylish."
  ]
},
{
  answer: "Forrest Gump",
  category: "Film",
  aura: "#C9A24B",
  clues: [
    "Innocence stumbling sweetly through decades of history.",
    "A box of chocolates as a theory of life.",
    "A bench, a feather, and a long, long run.",
    "Simple kindness somehow touching every big moment of an era.",
    "The story of a gentle man who accidentally lived through everything."
  ]
},
{
  answer: "The Matrix",
  category: "Film",
  aura: "#00FF41",
  clues: [
    "The dawning horror that reality might be a program.",
    "A choice between two pills and never going back.",
    "Green code raining down the inside of the world.",
    "Bullets dodged by bending backward in slow motion.",
    "The film that asked what if everything you know is a simulation."
  ]
}
,
{
  answer: "The Lion King",
  category: "Film",
  aura: "#E8A33D",
  clues: [
    "A son running from a throne and a grief he caused.",
    "Sunrise over a savanna as a cub is lifted high.",
    "A circle that turns from birth to death and back.",
    "Worry-free philosophy hummed by a meerkat and a warthog.",
    "The animated tragedy where a prince must remember who he is."
  ]
},
{
  answer: "E.T. the Extra-Terrestrial",
  category: "Film",
  aura: "#5C8C5A",
  clues: [
    "A friendship between a lonely boy and the strangest of strangers.",
    "A glowing fingertip and a heart that lights up.",
    "Bicycles lifting off across the face of the moon.",
    "Homesickness felt by something from very far away.",
    "The film where a child hides an alien who just wants to phone home."
  ]
},
{
  answer: "Back to the Future",
  category: "Film",
  aura: "#5BA8D4",
  clues: [
    "A teenager accidentally erasing his own existence.",
    "A car with doors like wings hitting exactly the right speed.",
    "Watching your parents fall in love and nearly ruining it.",
    "Flux, lightning, and a clock tower racing the storm.",
    "The time-travel romp where the past must be carefully restored."
  ]
},
{
  answer: "Gone with the Wind",
  category: "Film",
  aura: "#A8324A",
  clues: [
    "Sweeping romance against a world burning down.",
    "A stubborn belief that tomorrow is another day.",
    "Hoop skirts and a city in flames behind the lovers.",
    "A famous shrug at giving a damn.",
    "The grand epic of love and loss in a vanishing South."
  ]
},
{
  answer: "Schindler's List",
  category: "Film",
  aura: "#3A3A3A",
  clues: [
    "A single splash of red in a world of merciless gray.",
    "An ordinary man discovering the worth of every saved life.",
    "A list that becomes the difference between life and death.",
    "Grief so deep it can only be filmed in black and white.",
    "The unbearable, essential story of rescue amid genocide."
  ]
},
{
  answer: "The Sound of Music",
  category: "Film",
  aura: "#5C8C5A",
  clues: [
    "Joy bursting across alpine meadows in song.",
    "A governess teaching children to sing their fears away.",
    "Curtains turned into play clothes, do-re-mi on a hillside.",
    "Love and escape just ahead of a darkening world.",
    "The musical where the hills are famously alive."
  ]
},
{
  answer: "Inception",
  category: "Film",
  aura: "#3A4A5C",
  clues: [
    "A heist that takes place inside a sleeping mind.",
    "Cities folding over themselves like paper.",
    "A spinning top that decides what's real.",
    "Dreams nested inside dreams inside dreams.",
    "The puzzle film where the ending refuses to tell you the truth."
  ]
},
{
  answer: "Parasite",
  category: "Film",
  aura: "#3E4A3A",
  clues: [
    "Class warfare creeping quietly up a staircase.",
    "A poor family slipping one by one into a rich one's home.",
    "A flood below while the wealthy sleep dry above.",
    "Comedy curdling without warning into horror.",
    "The film that turned the gap between rich and poor into a thriller."
  ]
},
{
  answer: "The Dark Knight",
  category: "Film",
  aura: "#2B2B2B",
  clues: [
    "A hero and his opposite locked in a city's nightmare.",
    "Chaos in greasepaint asking why so serious.",
    "A caped vigilante deciding to be the villain instead.",
    "A burning pile of money and a pencil trick.",
    "The film where the masked guardian faces pure agentless madness."
  ]
},
{
  answer: "Spirited Away",
  category: "Film",
  aura: "#5BA8B5",
  clues: [
    "A child lost in a bathhouse for forgotten spirits.",
    "Parents turned to pigs and a name nearly stolen.",
    "A train gliding over endless flooded tracks.",
    "Wonder and dread hand-drawn in a world of gods.",
    "The animated dream where a girl must work to find her way home."
  ]
},
{
  answer: "Fight Club",
  category: "Film",
  aura: "#4A4A4A",
  clues: [
    "Numb modern emptiness erupting into bare-knuckled rebellion.",
    "A man and his shadow self burning it all down.",
    "Soap, basements, and the first rule no one talks about.",
    "Buildings falling as a twist rewrites the whole story.",
    "The film about consumer despair you're not supposed to discuss."
  ]
},
{
  answer: "The Silence of the Lambs",
  category: "Film",
  aura: "#5C5C4A",
  clues: [
    "A young agent bargaining with a brilliant monster.",
    "Politeness more terrifying than any weapon.",
    "A moth, a well, and quid pro quo.",
    "Genius and cannibalism behind a calm, fixed stare.",
    "The thriller where catching one killer means dining with another."
  ]
},
{
  answer: "Blade Runner",
  category: "Film",
  aura: "#C44569",
  clues: [
    "Rain-slick neon and the question of what makes us human.",
    "A hunter chasing beings more alive than himself.",
    "Tears in rain, lost like moments no one will remember.",
    "A dark future city drowning in advertising and smog.",
    "The film where the line between human and machine dissolves."
  ]
},
{
  answer: "2001: A Space Odyssey",
  category: "Film",
  aura: "#1A1A2E",
  clues: [
    "A monolith that turns bones into spaceships.",
    "A calm red eye that decides the crew must die.",
    "Silence, stars, and a waltz among the planets.",
    "Humanity's whole journey from ape to something beyond.",
    "The film where the computer politely refuses to open the doors."
  ]
},
{
  answer: "Amélie",
  category: "Film",
  aura: "#C0392B",
  clues: [
    "Whimsy used as a quiet weapon for strangers' joy.",
    "A shy woman arranging happiness from the shadows.",
    "Skipping stones, crème brûlée cracked with a spoon.",
    "Red and green and a city seen through a daydream.",
    "The film where small secret kindnesses become a love story."
  ]
}
,
{
  answer: "Rain",
  category: "Thing",
  aura: "#6B8CA8",
  clues: [
    "The world's permission to stay inside and feel things.",
    "A smell that rises from dry earth at the very first drop.",
    "Drumming on a window while you wrap yourself in something warm.",
    "Gray light, gray streets, and a strange cozy sadness.",
    "The sky's soft weeping that somehow makes everything quieter."
  ]
},
{
  answer: "Fire",
  category: "Thing",
  aura: "#D9531E",
  clues: [
    "The first thing that made the dark feel safe.",
    "Faces glowing as everyone leans toward the same warmth.",
    "Something beautiful that you can never quite touch.",
    "Crackle, smoke, and shapes dancing that you can't look away from.",
    "The ancient flame that gave us warmth, cooking, and stories."
  ]
},
{
  answer: "The Ocean",
  category: "Thing",
  aura: "#1A6B8A",
  clues: [
    "Vastness that makes your problems feel suddenly small.",
    "A pull you feel in your chest before you reach the shore.",
    "Salt on your lips and a horizon that never ends.",
    "Waves that erase your footprints as fast as you make them.",
    "The endless blue that covers most of the world and still feels alive."
  ]
},
{
  answer: "Snow",
  category: "Thing",
  aura: "#E8EEF2",
  clues: [
    "Silence falling slowly, covering every sharp edge.",
    "The hush of a world that's suddenly soft and white.",
    "A childlike thrill at waking up to a changed landscape.",
    "Cold that bites your cheeks while everything looks gentle.",
    "The quiet blanket that turns the ordinary into magic overnight."
  ]
},
{
  answer: "Thunderstorm",
  category: "Thing",
  aura: "#3A4A5C",
  clues: [
    "Power so big it makes you feel small and alive at once.",
    "The whole sky flashing and then growling its disapproval.",
    "Counting the seconds between the flash and the crash.",
    "Electric air, fat warm drops, and a primal thrill.",
    "Nature's loud, bright reminder of who is really in charge."
  ]
},
{
  answer: "Sunset",
  category: "Thing",
  aura: "#E8845A",
  clues: [
    "The day exhaling all its color before letting go.",
    "A few minutes when strangers all stop and look the same way.",
    "Gold melting into pink melting into deep blue.",
    "The feeling that something beautiful is ending gently.",
    "The sky's daily masterpiece that no one ever gets tired of."
  ]
},
{
  answer: "The Stars",
  category: "Thing",
  aura: "#2A2A4A",
  clues: [
    "Light that left long before you were born finally arriving.",
    "Looking up and feeling both tiny and connected to everything.",
    "Pinpricks scattered across a deep velvet dark.",
    "Wishes made on the brightest one before sleep.",
    "The ancient glittering map that humans have always told stories about."
  ]
},
{
  answer: "Nostalgia",
  category: "Thing",
  aura: "#C9A86A",
  clues: [
    "Homesickness for a time instead of a place.",
    "A song that drags you straight back to a summer long gone.",
    "Warm light around memories that maybe weren't even that good.",
    "The bittersweet ache of missing what you can't return to.",
    "The feeling that the past was somehow softer and golder than now."
  ]
},
{
  answer: "Déjà Vu",
  category: "Thing",
  aura: "#7A6B9E",
  clues: [
    "A glitch where the present feels like a rerun.",
    "The eerie certainty you've stood in this exact moment before.",
    "A flicker that you can never quite catch or explain.",
    "Familiarity with no memory to attach it to.",
    "The uncanny sense that this has all happened once already."
  ]
},
{
  answer: "Insomnia",
  category: "Thing",
  aura: "#2B2B3A",
  clues: [
    "The loneliest hours, watched by a glowing clock.",
    "A mind that won't stop racing while the body begs to rest.",
    "The whole world asleep while you stare at the ceiling.",
    "3am thoughts that feel enormous and unsolvable.",
    "The exhausting wakefulness that turns night into an enemy."
  ]
},
{
  answer: "A Library",
  category: "Thing",
  aura: "#7A5C3A",
  clues: [
    "A hush that holds a thousand voices all at once.",
    "The smell of old paper and the quiet of shared focus.",
    "Every life you could have lived, lined up on shelves.",
    "Dust in a beam of light over a long wooden table.",
    "The peaceful temple of words where silence is a kindness."
  ]
},
{
  answer: "A Lighthouse",
  category: "Thing",
  aura: "#C44536",
  clues: [
    "Loyalty that stands alone in the storm for strangers.",
    "A single sweeping light promising someone is watching.",
    "Solitude on a rock, useful and patient and proud.",
    "A beam turning slowly through fog over a black sea.",
    "The lone tower that means safety to ships it will never meet."
  ]
},
{
  answer: "Mirrors",
  category: "Thing",
  aura: "#9CB5C4",
  clues: [
    "An honest stranger who is always exactly you.",
    "The slight fear of glancing into one in the dark.",
    "Vanity, doubt, and recognition all in one cold surface.",
    "A second room that looks real but holds nothing.",
    "The reflective glass where you meet yourself looking back."
  ]
},
{
  answer: "Time",
  category: "Thing",
  aura: "#6B6B7A",
  clues: [
    "The one thing everyone spends and no one can save.",
    "A thief and a healer wearing the same patient face.",
    "Sand falling grain by grain that you can't reach back into.",
    "The reason everything is precious and nothing stays.",
    "The invisible river that carries us all in one direction."
  ]
},
{
  answer: "Dreams",
  category: "Thing",
  aura: "#5C4A8A",
  clues: [
    "A private cinema that makes no sense and feels true.",
    "Falling, flying, and showing up somewhere with no clothes.",
    "Vivid worlds that dissolve the moment you wake.",
    "Your own mind telling you stories you didn't write.",
    "The nightly theater where logic sleeps and anything can happen."
  ]
}
,
{
  answer: "Falling in Love",
  category: "Thing",
  aura: "#E84C7A",
  clues: [
    "A feeling that rewrites your whole world in an afternoon.",
    "Butterflies that feel suspiciously like a stomach bug.",
    "Replaying one conversation a hundred dizzy times.",
    "Walking on air and crashing in equal measure.",
    "That first time someone makes everything else go quiet."
  ]
},
{
  answer: "Loneliness",
  category: "Thing",
  aura: "#4A5C6B",
  clues: [
    "A crowd that somehow makes you feel even more apart.",
    "The ache of having so much to say and no one to tell.",
    "Silence that gets heavier the longer it lasts.",
    "An empty chair across an empty table.",
    "The quiet ache of being unseen in a room full of people."
  ]
},
{
  answer: "Hope",
  category: "Thing",
  aura: "#E8C85A",
  clues: [
    "The stubborn light that refuses to go out in the dark.",
    "A small green thing pushing up through cracked concrete.",
    "The reason people keep going when reason says stop.",
    "Dawn imagined before it actually arrives.",
    "The quiet belief that tomorrow could still be better."
  ]
},
{
  answer: "A Rainbow",
  category: "Thing",
  aura: "#9B59B6",
  clues: [
    "A promise the sky makes after it's done crying.",
    "Color sorted into a perfect, fleeting arc.",
    "The thing children chase and never reach the end of.",
    "Sunlight caught and broken in falling rain.",
    "The bright bow that appears just as the storm gives up."
  ]
},
{
  answer: "Vinyl Records",
  category: "Thing",
  aura: "#3A2B2B",
  clues: [
    "Warmth and crackle that digital perfection can't fake.",
    "A ritual of sleeve, spin, and gentle needle drop.",
    "Music you have to get up and flip halfway through.",
    "Black grooves spinning under a soft mechanical hiss.",
    "The old round format that came back because it feels alive."
  ]
},
{
  answer: "Polaroid Photos",
  category: "Thing",
  aura: "#E8D9A8",
  clues: [
    "A memory you hold in your hand before it even appears.",
    "Shaking a white square and watching the past develop.",
    "Imperfect, faded, and somehow more real for it.",
    "A thick white border around a frozen, grainy moment.",
    "The instant picture that hums and spits out nostalgia."
  ]
},
{
  answer: "A Campfire",
  category: "Thing",
  aura: "#D9531E",
  clues: [
    "The center of gravity for every good story at night.",
    "Marshmallows, smoke in your eyes, and faces lit orange.",
    "Sparks rising into a sky full of unfamiliar stars.",
    "Warmth on your front, cold on your back, friends all around.",
    "The crackling heart of every night spent under the open sky."
  ]
},
{
  answer: "A Paper Airplane",
  category: "Thing",
  aura: "#A8C4D4",
  clues: [
    "Childhood flight folded out of a wasted page.",
    "A few sharp creases and a hopeful throw across the room.",
    "Boredom turned briefly into engineering and joy.",
    "A glider that nosedives more often than it soars.",
    "The simple folded toy that turns any classroom into a runway."
  ]
},
{
  answer: "Fireworks",
  category: "Thing",
  aura: "#E8447A",
  clues: [
    "Joy that explodes, dazzles, and is gone in a heartbeat.",
    "Necks craned up, mouths open, oohs on cue.",
    "A boom you feel in your chest a beat after the flash.",
    "Glittering flowers blooming and dying in the night sky.",
    "The bright brief celebration that ends every big night."
  ]
},
{
  answer: "Money",
  category: "Thing",
  aura: "#3E7A4E",
  clues: [
    "A promise everyone agreed to believe in together.",
    "Freedom, anxiety, and power printed on paper.",
    "The thing people say can't buy happiness but try anyway.",
    "Numbers that decide who sleeps soundly and who doesn't.",
    "The invented value the whole world runs on."
  ]
},
{
  answer: "A Clock",
  category: "Thing",
  aura: "#8A7A5C",
  clues: [
    "A small machine measuring out the only thing you can't get back.",
    "Ticking that you only notice when you can't sleep.",
    "Hands going in a circle that rule everyone's life.",
    "A face that is always honest and never kind.",
    "The device that turned the sun's journey into numbers on a wall."
  ]
},
{
  answer: "Umbrellas",
  category: "Thing",
  aura: "#3A5C6B",
  clues: [
    "A little portable roof against the sky's bad mood.",
    "Always missing exactly when the clouds open up.",
    "A bloom of color over wet gray streets.",
    "Turning inside out at the worst possible gust.",
    "The fold-up shelter you share with a stranger in a downpour."
  ]
},
{
  answer: "Honey",
  category: "Food",
  aura: "#E8A33D",
  clues: [
    "Sweetness made by a thousand tiny tireless workers.",
    "Golden, slow, and impossibly patient as it pours.",
    "Sunlight you can taste, straight from the comb.",
    "A jar that never really spoils, glowing amber on the shelf.",
    "The thick gold syrup that bees make and humans can't resist."
  ]
},
{
  answer: "Chocolate",
  category: "Food",
  aura: "#5C3A2E",
  clues: [
    "Comfort that melts at exactly body temperature.",
    "The reward you give yourself after a hard day.",
    "Bitter and sweet arguing happily on your tongue.",
    "A square snapped off and let to dissolve slowly.",
    "The brown indulgence that doubles as an apology and a gift."
  ]
},
{
  answer: "Tea",
  category: "Food",
  aura: "#9A7B4F",
  clues: [
    "A pause in the day poured into a warm cup.",
    "Steam rising while the world is told to wait a moment.",
    "Comfort, ceremony, and the answer to almost any crisis.",
    "Leaves steeping slowly into amber calm.",
    "The quiet hot drink that whole cultures stop to share."
  ]
}
,
{
  answer: "Pizza",
  category: "Food",
  aura: "#C0392B",
  clues: [
    "The food that means a party, a crisis, or a lazy night.",
    "A circle cut into triangles and fought over by friends.",
    "Cheese stretching in a long dramatic string.",
    "The smell that makes a whole house come running.",
    "The round shareable comfort that pleases nearly everyone."
  ]
},
{
  answer: "Sushi",
  category: "Food",
  aura: "#C44536",
  clues: [
    "Precision and freshness arranged like tiny art.",
    "Raw simplicity that takes a lifetime to perfect.",
    "A bite of ocean wrapped neatly in rice.",
    "Soy, ginger, and a green dab of fire.",
    "The delicate dish where less is treated as everything."
  ]
},
{
  answer: "Ramen",
  category: "Food",
  aura: "#D9803A",
  clues: [
    "Comfort that fixes a cold night and a broke week alike.",
    "Steam, slurping, and a broth simmered for half a day.",
    "Noodles, an egg with a jammy center, and pure warmth.",
    "A bowl you lean over until your glasses fog.",
    "The humble noodle soup elevated into an obsession."
  ]
},
{
  answer: "Tacos",
  category: "Food",
  aura: "#E8A33D",
  clues: [
    "Happiness you have to eat leaning forward to avoid a mess.",
    "A handful of flavor wrapped in a soft warm fold.",
    "Lime, cilantro, and a midnight craving fulfilled.",
    "A whole tradition built around the perfect bite.",
    "The folded street food with its own day of the week."
  ]
},
{
  answer: "Croissant",
  category: "Food",
  aura: "#D9B25C",
  clues: [
    "Butter folded into the shape of a lazy morning.",
    "A hundred crackling flaky layers that shatter when you bite.",
    "The smell that makes a whole street smell like a bakery.",
    "A crescent of golden indulgence beside a strong coffee.",
    "The buttery pastry that turns breakfast into a small ceremony."
  ]
},
{
  answer: "Ice Cream",
  category: "Food",
  aura: "#F2C4D4",
  clues: [
    "Childhood summer that you can still order as an adult.",
    "A treat racing the sun to be eaten before it melts.",
    "The reward at the end of a long hot day.",
    "A scoop dripping down the cone faster than you can lick.",
    "The cold sweet swirl that cures heartbreak and heatwaves alike."
  ]
},
{
  answer: "Wine",
  category: "Food",
  aura: "#7A1F3A",
  clues: [
    "Sunshine and patience aged into a glass.",
    "Conversation that gets warmer with every pour.",
    "Swirling, sniffing, and pretending to know the difference.",
    "Deep red catching candlelight over a slow dinner.",
    "The drink that turns a meal into an evening."
  ]
},
{
  answer: "Whiskey",
  category: "Food",
  aura: "#A8632E",
  clues: [
    "Warmth that burns going down and then forgives.",
    "Amber in a heavy glass over a single slow cube.",
    "A drink that wants you to sit, not rush.",
    "Smoke, oak, and the end of a long day.",
    "The brooding brown spirit poured when there's something to think about."
  ]
},
{
  answer: "Cheese",
  category: "Food",
  aura: "#E8C25A",
  clues: [
    "Time and bacteria turned into deliciousness.",
    "A thousand varieties from one humble white start.",
    "Sharp, creamy, stinky, and beloved all at once.",
    "A board of it that turns into a whole meal somehow.",
    "The aged dairy that whole regions take very seriously."
  ]
},
{
  answer: "Pasta",
  category: "Food",
  aura: "#E8B45A",
  clues: [
    "Comfort that an entire culture turned into an art form.",
    "Flour and water shaped a hundred patient ways.",
    "A twirl on a fork beside a simmering red sauce.",
    "The dish that means home, family, and Sunday.",
    "The endlessly variable staple that makes everyone feel cared for."
  ]
},
{
  answer: "Avocado Toast",
  category: "Food",
  aura: "#7AA85A",
  clues: [
    "Breakfast that somehow became a punchline about a generation.",
    "Green smashed onto bread and sprinkled with seeds.",
    "Brunch, sunshine, and a slightly overpriced wellness.",
    "Flaky salt over a creamy, fashionable spread.",
    "The trendy toast blamed for why kids can't buy houses."
  ]
},
{
  answer: "Hot Sauce",
  category: "Food",
  aura: "#C0392B",
  clues: [
    "A little bottle that turns dinner into a dare.",
    "Sweat on the brow and a craving for more pain.",
    "Heat that hurts so good you keep reaching for it.",
    "A few red drops that fix anything bland.",
    "The fiery condiment people carry in their bag like a relic."
  ]
},
{
  answer: "Champagne",
  category: "Food",
  aura: "#E8D9A8",
  clues: [
    "Celebration that arrives with a pop and a fizz.",
    "Tiny bubbles rising in a tall thin glass.",
    "The sound of a cork meaning something good just happened.",
    "Gold and sparkling, saved for the best moments.",
    "The bubbly drink that turns any night into an occasion."
  ]
},
{
  answer: "A Hamburger",
  category: "Food",
  aura: "#A8632E",
  clues: [
    "The simplest stack that somehow became a whole culture.",
    "Juice running down your wrist and zero regret.",
    "A meal you eat with two hands and full focus.",
    "Char, melt, and a toasted bun holding it together.",
    "The iconic stacked sandwich found on every corner of the world."
  ]
},
{
  answer: "Coffee Shop",
  category: "Place",
  aura: "#8A6B4F",
  clues: [
    "A second living room rented one cup at a time.",
    "The hiss of steam and the clack of a hundred laptops.",
    "Strangers sharing tables and pretending not to eavesdrop.",
    "Warm light, low music, and the smell of roasting beans.",
    "The cozy third place where work, dates, and breakups all happen."
  ]
}
,
{
  answer: "Friends",
  category: "Show",
  aura: "#E8A33D",
  clues: [
    "The fantasy of your twenties spent entirely on a couch with your people.",
    "An impossibly big apartment and an even bigger coffee shop.",
    "Six people who somehow never have to work much.",
    "A theme song everyone claps along to without thinking.",
    "The comfort show about a chosen family who are basically inseparable."
  ]
},
{
  answer: "The Sopranos",
  category: "Show",
  aura: "#5C1F1F",
  clues: [
    "A brutal man working through his feelings on a therapist's couch.",
    "Family dinners that could turn deadly between courses.",
    "Ducks, gabagool, and a sudden cut to black.",
    "The American dream curdled into something violent and sad.",
    "The mob drama that quietly reinvented what television could be."
  ]
},
{
  answer: "Breaking Bad",
  category: "Show",
  aura: "#3E7A4E",
  clues: [
    "A mild man discovering he likes being a monster.",
    "A pork-pie hat and a slow slide into the desert dark.",
    "Chemistry turned into empire turned into ruin.",
    "Pizza on a roof and the danger of a phone call.",
    "The story of a teacher who becomes the one who knocks."
  ]
},
{
  answer: "Game of Thrones",
  category: "Show",
  aura: "#3A4A5C",
  clues: [
    "A brutal game where everyone you love eventually dies.",
    "Dragons, snow, and a chair made of swords.",
    "Winter coming as a threat for years on end.",
    "Betrayal at a wedding you'll never forget.",
    "The epic of warring families fighting over a frozen throne."
  ]
},
{
  answer: "The Office",
  category: "Show",
  aura: "#5C8CB5",
  clues: [
    "The mundane misery of work turned into something you rewatch forever.",
    "A camera that catches every cringe and knowing glance.",
    "A terrible boss who desperately wants to be loved.",
    "Beets, pranks, and a will-they-won't-they at reception.",
    "The mockumentary that made a paper company feel like home."
  ]
},
{
  answer: "Stranger Things",
  category: "Show",
  aura: "#C0392B",
  clues: [
    "Childhood adventure dripping with eighties dread.",
    "Bikes, walkie-talkies, and a monster from another dimension.",
    "Christmas lights spelling out messages from the dark.",
    "A girl with a shaved head and a nosebleed of power.",
    "The nostalgic horror where kids fight things from the upside down."
  ]
},
{
  answer: "The Simpsons",
  category: "Show",
  aura: "#FFD90F",
  clues: [
    "A yellow family that has somehow predicted everything.",
    "A town full of misfits that never ages a single year.",
    "Donuts, a nuclear plant, and a strangled 'why you little.'",
    "Satire of an entire country dressed up as a cartoon.",
    "The animated family that's been on so long they outlived eras."
  ]
},
{
  answer: "Seinfeld",
  category: "Show",
  aura: "#E8E0C4",
  clues: [
    "A comedy proudly about absolutely nothing.",
    "Four selfish New Yorkers obsessing over tiny annoyances.",
    "Soup, a puffy shirt, and close-talkers.",
    "Petty grievances elevated to high art.",
    "The sitcom that found whole episodes in nothing at all."
  ]
},
{
  answer: "Thriller",
  category: "Album",
  aura: "#C0392B",
  clues: [
    "Dancing zombies that taught the whole world the same moves.",
    "A red leather jacket and a spoken graveyard warning.",
    "The record that turned a music video into an event.",
    "Pop, funk, and horror fused into the best-seller of all time.",
    "The album so big it made everyone moonwalk."
  ]
},
{
  answer: "Abbey Road",
  category: "Album",
  aura: "#5C6B5A",
  clues: [
    "Four figures crossing a street that became holy ground.",
    "A bittersweet farewell from a band at its peak.",
    "A medley that flows like one long goodbye.",
    "Bare feet on a crosswalk imitated forever after.",
    "The album cover so famous people make pilgrimages to the curb."
  ]
},
{
  answer: "The Dark Side of the Moon",
  category: "Album",
  aura: "#2A2A3A",
  clues: [
    "A prism splitting white light into a quiet legend.",
    "A heartbeat, a cash register, and the slow creep of madness.",
    "Music about time, money, and going slowly insane.",
    "A black triangle bending a beam into rainbow.",
    "The album that sat on the charts for an almost impossible span."
  ]
},
{
  answer: "Bohemian Rhapsody",
  category: "Song",
  aura: "#5E2D91",
  clues: [
    "A song that has no business working and works completely.",
    "Opera, ballad, and headbanging stitched into one.",
    "A confession to mama about a life thrown away.",
    "Galileo, Scaramouche, and a thunderbolt of harmony.",
    "The six-minute epic that whole cars scream together."
  ]
},
{
  answer: "Imagine",
  category: "Song",
  aura: "#D6E4EC",
  clues: [
    "A gentle melody asking the world to give up its walls.",
    "A piano and a dream of nothing to fight over.",
    "Utopia sung so simply it sounds almost possible.",
    "No heaven, no countries, just everyone as one.",
    "The peace anthem hummed at every candlelit vigil."
  ]
},
{
  answer: "Like a Rolling Stone",
  category: "Song",
  aura: "#8C7B5A",
  clues: [
    "A sneer set to an organ and turned into poetry.",
    "A six-minute sprawl that broke every radio rule.",
    "A taunting question about how it feels to fall.",
    "Words tumbling like accusations over an unstoppable beat.",
    "The song that asked how does it feel to be on your own."
  ]
},
{
  answer: "Smells Like Teen Spirit",
  category: "Song",
  aura: "#3E5C3A",
  clues: [
    "Apathy and rage colliding in a quiet-loud explosion.",
    "A riff that announced a whole new disaffected decade.",
    "Mumbled lyrics no one knew but everyone screamed.",
    "Cheerleaders, anarchy, and a janitor in a gym.",
    "The grunge anthem that made the mainstream feel ashamed of itself."
  ]
}
,
{
  answer: "The Moon Landing",
  category: "Event",
  aura: "#C4C4C4",
  clues: [
    "The moment the whole world looked up at the same gray dot.",
    "A grainy broadcast and a held breath across continents.",
    "A boot pressing into dust no foot had ever touched.",
    "One small step that humanity took together.",
    "The night we finally walked on the thing we'd always wished on."
  ]
},
{
  answer: "The Fall of the Berlin Wall",
  category: "Event",
  aura: "#C44536",
  clues: [
    "A concrete scar through a city suddenly being chipped away.",
    "Strangers dancing on a barrier that split families for years.",
    "Hammers, tears, and a divided people running into each other's arms.",
    "An entire frozen conflict melting in a single night.",
    "The wall that came down and took an era with it."
  ]
},
{
  answer: "The Renaissance",
  category: "Event",
  aura: "#B5651D",
  clues: [
    "A continent waking up and remembering it could create.",
    "Domes, frescoes, and a sudden hunger for beauty and reason.",
    "Patrons, workshops, and genius bursting in every direction.",
    "The rebirth of art, science, and human curiosity at once.",
    "The golden flowering when Europe rediscovered the ancient world."
  ]
},
{
  answer: "The Industrial Revolution",
  category: "Event",
  aura: "#5C5042",
  clues: [
    "The moment the world started moving by steam instead of hand.",
    "Smoke, factories, and a sky going gray with progress.",
    "Villages emptying into cities chasing the roar of machines.",
    "Childhood traded for the clatter of the loom.",
    "The age when machines rewrote how everyone lived and worked."
  ]
},
{
  answer: "The Roaring Twenties",
  category: "Event",
  aura: "#D4AF37",
  clues: [
    "A whole decade dancing as fast as it could before the crash.",
    "Fringe, jazz, and gin in secret hidden rooms.",
    "Reckless optimism glittering before everything fell apart.",
    "Flappers, speakeasies, and a party that couldn't last.",
    "The wild prosperous era that ended in a sudden financial ruin."
  ]
},
{
  answer: "The Gold Rush",
  category: "Event",
  aura: "#E8A33D",
  clues: [
    "Madness and hope rushing west with a pan and a dream.",
    "Strangers tearing up rivers for a glint in the silt.",
    "Boomtowns rising overnight on the promise of riches.",
    "Mud, picks, and fortunes won and lost in a season.",
    "The frenzied stampede when everyone chased glittering metal."
  ]
},
{
  answer: "Woodstock",
  category: "Event",
  aura: "#9B59B6",
  clues: [
    "A muddy field that became a generation's whole philosophy.",
    "Half a million people, music, and a dream of peace.",
    "Rain, flowers, and bodies swaying in a sea of freedom.",
    "Three days that defined an entire counterculture.",
    "The famous festival where a generation gathered to tune out and turn on."
  ]
},
{
  answer: "The French Revolution",
  category: "Event",
  aura: "#C0392B",
  clues: [
    "A people deciding their rulers' heads were no longer needed.",
    "Bread, fury, and a blade falling in a crowded square.",
    "Liberty, equality, and fraternity screamed through smoke.",
    "A fortress prison stormed by a starving city.",
    "The uprising that ended a monarchy and terrified all of Europe."
  ]
},
{
  answer: "The Space Race",
  category: "Event",
  aura: "#2A3A5C",
  clues: [
    "Two superpowers competing to touch the heavens first.",
    "A beeping metal ball that terrified an entire nation.",
    "Rockets, fear, and the sky turned into a finish line.",
    "Cold rivalry fought with telescopes and launch pads.",
    "The contest where two enemies sprinted to reach the stars."
  ]
},
{
  answer: "The Wild West",
  category: "Event",
  aura: "#C8956B",
  clues: [
    "A lawless frontier mythologized into the national imagination.",
    "Dust, six-shooters, and a showdown at high noon.",
    "Saloons, sheriffs, and a horizon with no rules.",
    "Tumbleweeds rolling past a one-street town.",
    "The rugged era of cowboys, outlaws, and endless open land."
  ]
},
{
  answer: "The Titanic Sinking",
  category: "Event",
  aura: "#2E5C8A",
  clues: [
    "Human pride meeting the cold indifference of the sea.",
    "A ship called unsinkable proving terribly otherwise.",
    "Lifeboats too few and a band playing as it tilted.",
    "Frozen water swallowing the unswallowable in one night.",
    "The disaster that turned the height of luxury into a grave."
  ]
},
{
  answer: "The Olympics",
  category: "Event",
  aura: "#0081C8",
  clues: [
    "The whole world agreeing, briefly, to compete instead of fight.",
    "Five linked rings and a torch carried across nations.",
    "Tears on a podium as an anthem plays for one person.",
    "Years of pain compressed into ten seconds of glory.",
    "The global games where countries send their fastest and strongest."
  ]
},
{
  answer: "Mardi Gras",
  category: "Event",
  aura: "#6B3FA0",
  clues: [
    "One last wild night before a season of giving things up.",
    "Beads, masks, and brass blaring down a packed street.",
    "Purple, green, and gold draped over a riotous parade.",
    "Floats, feathers, and a city that throws itself a party.",
    "The carnival blowout right before the solemn fasting begins."
  ]
},
{
  answer: "The Cold War",
  category: "Event",
  aura: "#4A5C6B",
  clues: [
    "A war fought entirely with fear and never quite started.",
    "Two giants glaring across an iron curtain for decades.",
    "Bomb drills, spies, and a finger near a red button.",
    "Tension so thick it shaped every map and movie.",
    "The long frozen standoff that split the world in two."
  ]
},
{
  answer: "Stevie Wonder",
  category: "Person",
  aura: "#E8A33D",
  clues: [
    "Sight lost but a vision of joy nothing could dim.",
    "A head swaying side to side over a beaming smile.",
    "Sunshine poured into harmonica and keys.",
    "Music so warm it feels like a hug you can hear.",
    "The blind genius who saw more melody than anyone."
  ]
},
{
  answer: "Ray Charles",
  category: "Person",
  aura: "#5C4A2E",
  clues: [
    "Gospel and the blues fused into something brand new.",
    "Dark glasses rocking over a grinning, swaying body.",
    "A voice that turned heartbreak into Sunday morning.",
    "Hands that found every soulful note without seeing them.",
    "The pioneer who made the piano sound like the whole church."
  ]
},
{
  answer: "Amy Winehouse",
  category: "Person",
  aura: "#2B1F1A",
  clues: [
    "An old soul's voice trapped in a fragile young body.",
    "Beehive hair, winged eyes, and so much beautiful pain.",
    "Refusing the help that everyone begged her to take.",
    "Jazz and heartbreak smoked down to the filter.",
    "The throwback voice the world lost far too soon."
  ]
},
{
  answer: "Kurt Cobain",
  category: "Person",
  aura: "#5C6B5A",
  clues: [
    "Fame that felt like a betrayal to the one who got it.",
    "A whisper-scream that spoke for a disaffected youth.",
    "A cardigan, stringy hair, and eyes full of weather.",
    "Reluctant idol of a generation he didn't trust.",
    "The voice of grunge who couldn't survive his own success."
  ]
},
{
  answer: "Johnny Cash",
  category: "Person",
  aura: "#1A1A1A",
  clues: [
    "A deep voice dressed entirely in mournful black.",
    "Songs sung for prisoners by a man who understood them.",
    "Trains, faith, and a ring of fire.",
    "Gravel and redemption walking the same hard line.",
    "The man in black whose voice sounded like the desert at dusk."
  ]
},
{
  answer: "Dolly Parton",
  category: "Person",
  aura: "#E84C9E",
  clues: [
    "Big hair, big heart, and a wit sharper than her rhinestones.",
    "A mountain girl who turned hardship into pure sparkle.",
    "Generosity disguised as glitter and a wink.",
    "Songs of working women sung in a bright, kind twang.",
    "The beloved icon who's as warm as she is dazzling."
  ]
},
{
  answer: "Pablo Escobar",
  category: "Person",
  aura: "#3E4A3A",
  clues: [
    "Charm and terror ruling from the jungle shadows.",
    "More money than could be counted, buried and rotting.",
    "A choice offered always: take the silver or the lead.",
    "A whole city loving and fearing one ruthless man.",
    "The kingpin who turned a country into his violent empire."
  ]
},
{
  answer: "Steve Irwin",
  category: "Person",
  aura: "#5C8C3A",
  clues: [
    "Reckless joy aimed at the most dangerous animals alive.",
    "Khaki shorts and a thumbs-up beside a snapping jaw.",
    "A booming 'crikey' over something that could kill him.",
    "Pure childlike love for every scaly, fanged creature.",
    "The fearless wildlife lover the whole world mourned together."
  ]
},
{
  answer: "Anthony Bourdain",
  category: "Person",
  aura: "#5C3A2E",
  clues: [
    "Curiosity that traveled the world one humble meal at a time.",
    "A restless soul finding humanity in street food and strangers.",
    "Sharp words, soft heart, and a cigarette at a plastic table.",
    "Connection sought across cultures over a shared bowl.",
    "The traveler who taught us that food is really about people."
  ]
},
{
  answer: "Fred Rogers",
  category: "Person",
  aura: "#C44569",
  clues: [
    "Gentleness offered to children as if it were the most serious work.",
    "A cardigan zipped up and sneakers swapped on at the door.",
    "Telling every kid they were liked just the way they are.",
    "A slow, kind voice in a world that was always shouting.",
    "The soft-spoken neighbor who made tenderness feel heroic."
  ]
},
{
  answer: "Bob Ross",
  category: "Person",
  aura: "#5C8C5A",
  clues: [
    "A soft voice turning blank canvas into calm.",
    "Happy little trees and no such thing as mistakes.",
    "A halo of perm above a palette of quiet joy.",
    "Painting as a kind of guided meditation.",
    "The gentle painter who soothed millions one brushstroke at a time."
  ]
},
{
  answer: "Mr. T",
  category: "Person",
  aura: "#D4AF37",
  clues: [
    "Muscle, gold chains, and a growl of pure attitude.",
    "A mohawk and a pity reserved for fools.",
    "Toughness turned into an eighties catchphrase.",
    "More jewelry than a king and twice the snarl.",
    "The hulking icon who pitied anyone who crossed him."
  ]
},
{
  answer: "Marie Antoinette",
  category: "Person",
  aura: "#F2C4D4",
  clues: [
    "Extravagance blooming while a country starved outside.",
    "Towering powdered hair and dresses like frosted cakes.",
    "A queen blamed for a flippant remark about bread.",
    "Pastel luxury heading straight for the blade.",
    "The doomed royal whose excess became a symbol of a fallen world."
  ]
},
{
  answer: "Sigmund Freud",
  category: "Person",
  aura: "#5C4A3A",
  clues: [
    "A man who turned dreams and slips into a science.",
    "A couch, a cigar, and questions about your mother.",
    "The idea that we're all driven by what we hide.",
    "Beard, glasses, and a probe into the basement of the mind.",
    "The thinker who put the unconscious on the map and the couch."
  ]
},
{
  answer: "Carl Sagan",
  category: "Person",
  aura: "#3A4A6B",
  clues: [
    "Wonder at the cosmos spoken with infectious warmth.",
    "Billions and billions of stars made to feel personal.",
    "A pale blue dot that holds everyone who ever lived.",
    "Science delivered like poetry to the whole planet.",
    "The voice that made the universe feel like home."
  ]
},
{
  answer: "Jacques Cousteau",
  category: "Person",
  aura: "#1A6B8A",
  clues: [
    "A red cap bobbing on the surface of an unexplored deep.",
    "The first to bring the silent blue world up to ours.",
    "Wonder at creatures no camera had ever seen.",
    "A boat, a wetsuit, and an ocean full of secrets.",
    "The explorer who opened the underwater world to everyone."
  ]
},
{
  answer: "Neil Armstrong",
  category: "Person",
  aura: "#C4C4C4",
  clues: [
    "Calm under a pressure no human had ever faced.",
    "A first footprint in dust a quarter million miles away.",
    "Quiet humility from a man who did the impossible.",
    "A bulky white suit against a black and airless sky.",
    "The one who took a giant leap for all of us."
  ]
},
{
  answer: "Amelia Earhart",
  category: "Person",
  aura: "#A8632E",
  clues: [
    "Fearlessness in a leather jacket and a tousle of hair.",
    "A woman flying farther than anyone said she could.",
    "A horizon chased until it swallowed her whole.",
    "Goggles, a propeller, and a wave from an open cockpit.",
    "The aviator who vanished into the sky and into legend."
  ]
},
{
  answer: "Harriet Tubman",
  category: "Person",
  aura: "#3E5C3A",
  clues: [
    "Courage walking back into danger again and again to free others.",
    "Following a star north through swamp and shadow.",
    "A whispered network of safe houses and secret songs.",
    "Refusing to leave anyone behind in the dark.",
    "The conductor who led the enslaved to freedom and never lost a soul."
  ]
},
{
  answer: "Florence Nightingale",
  category: "Person",
  aura: "#E8E0D4",
  clues: [
    "Compassion turning a filthy ward into a place of healing.",
    "A lamp moving through rows of the wounded at night.",
    "Cleanliness and care raised to a sacred discipline.",
    "A gentle figure tending soldiers everyone else forgot.",
    "The lady with the lamp who reinvented caring for the sick."
  ]
},
{
  answer: "Vincent Price",
  category: "Person",
  aura: "#5C1F2E",
  clues: [
    "A voice like velvet dipped in delicious menace.",
    "Elegance and dread sharing the same raised eyebrow.",
    "A laugh that closes out a famous dance of the dead.",
    "Old-world charm haunting candlelit corridors.",
    "The master of macabre who made horror sound sophisticated."
  ]
},
{
  answer: "Kobe Bryant",
  category: "Person",
  aura: "#5E2D91",
  clues: [
    "Obsessive will distilled into a single relentless mindset.",
    "Practicing before dawn while the world was still asleep.",
    "Purple and gold, a fadeaway, and an unshakable focus.",
    "A nickname borrowed from a snake's deadly strike.",
    "The legend whose work ethic became its own philosophy, lost too soon."
  ]
},
{
  answer: "Tom Brady",
  category: "Person",
  aura: "#1B3A6B",
  clues: [
    "Improbable longevity built on diet, drills, and spite.",
    "Comebacks pulled off when everyone had counted him out.",
    "A late pick who became the standard for greatness.",
    "Cool precision in the final seconds of impossible games.",
    "The quarterback who refused to stop winning long past his prime."
  ]
},
{
  answer: "Tiger Woods",
  category: "Person",
  aura: "#C0392B",
  clues: [
    "A red shirt that meant Sunday belonged to him.",
    "A fist pump after a putt that bent the whole sport.",
    "Dominance, downfall, and an against-all-odds return.",
    "Focus so total the crowd held its breath with him.",
    "The prodigy who made a quiet game suddenly electric."
  ]
},
{
  answer: "Roger Federer",
  category: "Person",
  aura: "#3E7A4E",
  clues: [
    "Grace that made a brutal sport look like ballet.",
    "Effortless elegance gliding across the grass.",
    "A one-handed swing as beautiful as it was deadly.",
    "Calm precision that aged like fine wine.",
    "The player who made winning look like art."
  ]
},
{
  answer: "Stephen Curry",
  category: "Person",
  aura: "#FDB927",
  clues: [
    "A baby-faced shooter who moved the line back forever.",
    "Letting it fly from distances that used to be absurd.",
    "Turning and running before the ball even drops in.",
    "A whole sport rebuilt around one impossible range.",
    "The guard who made the long shot the whole game."
  ]
}
,
{
  answer: "Berlin",
  category: "Place",
  aura: "#5C5C6B",
  clues: [
    "A city that turned its scars into a reason to dance.",
    "Concrete, graffiti, and techno thumping until noon.",
    "History so heavy it became creative fuel.",
    "Cold edges and warm underground freedom.",
    "The reborn capital where the past and the rave coexist."
  ]
},
{
  answer: "Seoul",
  category: "Place",
  aura: "#E84C7A",
  clues: [
    "Tradition and hyper-modern neon blurring together at night.",
    "Glowing screens, fried chicken, and pop perfection.",
    "Ancient palaces tucked between glass towers.",
    "Skincare, street food, and a 24-hour electric hum.",
    "The capital where K-everything was born and exported."
  ]
},
{
  answer: "Singapore",
  category: "Place",
  aura: "#2EA98C",
  clues: [
    "Order, gardens, and gleaming glass in the steamy tropics.",
    "Trees that are actually towers lit up at night.",
    "A city so clean you could eat off the sidewalk.",
    "Hawker stalls beside skyscrapers under a humid sky.",
    "The tiny island nation that became a futuristic garden city."
  ]
},
{
  answer: "Havana",
  category: "Place",
  aura: "#3E8C9E",
  clues: [
    "A city frozen charmingly in another decade.",
    "Pastel cars from long ago rumbling down faded streets.",
    "Cigars, salsa, and peeling paint glowing in the sun.",
    "Music spilling from every open window and doorway.",
    "The time-capsule capital of vintage cars and warm decay."
  ]
},
{
  answer: "New Orleans",
  category: "Place",
  aura: "#6B3FA0",
  clues: [
    "A city that throws a party even at a funeral.",
    "Jazz pouring out of doorways into humid nights.",
    "Beads, gumbo, and ghosts on wrought-iron balconies.",
    "Brass bands, voodoo, and a swampy, soulful magic.",
    "The Southern city where music and the supernatural mingle."
  ]
},
{
  answer: "San Francisco",
  category: "Place",
  aura: "#C44536",
  clues: [
    "Fog rolling in to swallow the hills each afternoon.",
    "A rust-red bridge appearing and vanishing in the mist.",
    "Steep streets, cable cars, and rainbow flags.",
    "Tech money and old bohemia uneasily sharing a peninsula.",
    "The hilly bay city of fog, trolleys, and reinvention."
  ]
},
{
  answer: "Los Angeles",
  category: "Place",
  aura: "#E8845A",
  clues: [
    "A sprawl chasing fame under an endless smoggy sun.",
    "Palm trees, traffic, and a thousand broken dreams.",
    "Pools, freeways, and a golden hour that sells everything.",
    "Everyone's an actor, a writer, or just waiting to be discovered.",
    "The sun-bleached city where the dream factory never sleeps."
  ]
},
{
  answer: "Petra",
  category: "Place",
  aura: "#C8956B",
  clues: [
    "A whole city carved directly into a rose-colored cliff.",
    "A narrow canyon opening onto a temple in the stone.",
    "An ancient wonder hidden in the desert for centuries.",
    "Pink rock glowing as the sun finds the facade.",
    "The lost city sculpted into a sandstone gorge."
  ]
},
{
  answer: "The Taj Mahal",
  category: "Place",
  aura: "#E8E0D4",
  clues: [
    "Grief turned into the most beautiful building on earth.",
    "White marble that shifts color with the light all day.",
    "A perfect symmetry built entirely out of love and loss.",
    "A domed tomb reflected in a long still pool.",
    "The monument an emperor raised for the wife he buried."
  ]
},
{
  answer: "Pompeii",
  category: "Place",
  aura: "#8A6B4F",
  clues: [
    "An ordinary day frozen forever in ash.",
    "A whole town caught mid-breath by a mountain's fury.",
    "Bodies and bread preserved exactly as the end found them.",
    "Streets and frescoes buried and then unburied centuries later.",
    "The city smothered by a volcano and kept eerily intact."
  ]
},
{
  answer: "The Dead Sea",
  category: "Place",
  aura: "#C4C4B5",
  clues: [
    "Water so heavy you cannot sink even if you try.",
    "Floating effortlessly while reading a book on the surface.",
    "Salt crusting white along a shrinking ancient shore.",
    "The lowest point you can stand on dry land.",
    "The mineral lake where the water itself holds you up."
  ]
},
{
  answer: "Patagonia",
  category: "Place",
  aura: "#5BA8B5",
  clues: [
    "Wind at the end of the world scouring jagged peaks.",
    "Glaciers calving into milky turquoise lakes.",
    "Emptiness so vast it feels like the edge of everything.",
    "Guanacos grazing under impossible granite spires.",
    "The wild southern frontier where the continent finally runs out."
  ]
},
{
  answer: "Mexico City",
  category: "Place",
  aura: "#C0392B",
  clues: [
    "An ancient lake city now sprawling and sinking and alive.",
    "Color, murals, and marigolds for the returning dead.",
    "Street food, mariachi, and a pyramid at the edge of town.",
    "Sun-baked chaos layered over a buried empire.",
    "The vast high-altitude capital built atop a drained lake."
  ]
},
{
  answer: "Bali",
  category: "Place",
  aura: "#3E8C5A",
  clues: [
    "Spirituality dripping from rice terraces and temple gates.",
    "Incense, surf, and offerings left on every doorstep.",
    "Lush green steps carved down a misty hillside.",
    "Yoga, gods, and a gentle island serenity.",
    "The Indonesian isle that became a byword for paradise and peace."
  ]
}
,
{
  answer: "A Diary",
  category: "Thing",
  aura: "#7A5C8A",
  clues: [
    "The only friend that never interrupts or judges.",
    "Secrets locked with a tiny useless clasp.",
    "The truest version of you, written for no one.",
    "A little book that holds your worst and best nights.",
    "The private pages where you finally tell yourself the truth."
  ]
},
{
  answer: "A Compass",
  category: "Thing",
  aura: "#8A7A5C",
  clues: [
    "A tiny trembling promise that you're not truly lost.",
    "A needle that always knows where home roughly is.",
    "Direction held in the palm of a wandering hand.",
    "The instrument that turned the unknown into a map.",
    "The little spinning arrow that points you ever northward."
  ]
},
{
  answer: "A Key",
  category: "Thing",
  aura: "#9A8466",
  clues: [
    "A small piece of metal that means belonging or escape.",
    "The weight in your pocket that says somewhere is yours.",
    "The click that turns a building into a home.",
    "Trust shaped into teeth and a turn.",
    "The tiny tool that opens, locks, and lets you in."
  ]
},
{
  answer: "Wedding Rings",
  category: "Thing",
  aura: "#D4AF37",
  clues: [
    "A circle with no end, chosen on purpose.",
    "A small band that changes how a hand feels forever.",
    "A promise you wear where everyone can see it.",
    "Gold slipped on while everyone holds their breath.",
    "The two matching bands that mean two became one."
  ]
},
{
  answer: "A Tattoo",
  category: "Thing",
  aura: "#3A3A4A",
  clues: [
    "A decision made permanent under a buzzing needle.",
    "A story or a regret worn straight on the skin.",
    "Ink that turns the body into a diary.",
    "The sting of making a memory you can never lose.",
    "The permanent art people carry to remember who they are."
  ]
},
{
  answer: "Glasses",
  category: "Thing",
  aura: "#5C6B7A",
  clues: [
    "The moment a blurry world snaps suddenly into focus.",
    "A face that feels naked without them in the morning.",
    "Pushed up the nose a thousand times a day.",
    "Fogging up the instant you walk inside in winter.",
    "The little lenses that let half the world see clearly."
  ]
},
{
  answer: "A Swing Set",
  category: "Thing",
  aura: "#5BA8C4",
  clues: [
    "The closest a child gets to actual flying.",
    "Legs pumping to reach that weightless top.",
    "Creaking chains and a stomach-drop of joy.",
    "Trying to touch the sky with your toes.",
    "The playground ride that turns gravity into a game."
  ]
},
{
  answer: "A Treehouse",
  category: "Thing",
  aura: "#5C8C5A",
  clues: [
    "A secret kingdom built where adults can't easily follow.",
    "A rope ladder pulled up to keep the world out.",
    "Childhood ambition nailed into the branches.",
    "Whispered plans and a view above the yard.",
    "The wooden hideout where kids become kings of the canopy."
  ]
},
{
  answer: "A Message in a Bottle",
  category: "Thing",
  aura: "#3E8C9E",
  clues: [
    "Hope thrown to the waves with no return address.",
    "A note trusting the whole ocean to find someone.",
    "Loneliness sealed with a cork and set adrift.",
    "Words that might wash up in a year or never.",
    "The desperate, romantic gamble of a letter sent to the sea."
  ]
},
{
  answer: "A Crossword Puzzle",
  category: "Thing",
  aura: "#9A9A8C",
  clues: [
    "A quiet morning battle of wits with a stranger who wrote it.",
    "A pencil hovering, a clue refusing to give in.",
    "Coffee, newsprint, and a satisfying little victory.",
    "Boxes filling up letter by stubborn letter.",
    "The grid of clues that turns a cup of coffee into a contest."
  ]
},
{
  answer: "A Roller Coaster",
  category: "Thing",
  aura: "#E8447A",
  clues: [
    "Choosing to be terrified for fun, over and over.",
    "The slow clanking climb that's worse than the drop.",
    "Screaming with your hands up and your stomach behind you.",
    "Two minutes of borrowed, screaming weightlessness.",
    "The track of loops and plunges that sells fear as joy."
  ]
},
{
  answer: "A Snow Globe",
  category: "Thing",
  aura: "#A8C4D4",
  clues: [
    "A whole tiny world you can shake into a storm.",
    "Glitter settling slowly over a frozen little scene.",
    "Winter trapped forever in a small glass dome.",
    "A souvenir of somewhere, swirling on a shelf.",
    "The little globe that holds a snowfall you control."
  ]
},
{
  answer: "Autumn Leaves",
  category: "Thing",
  aura: "#C1632E",
  clues: [
    "Beauty that comes precisely from things letting go.",
    "Crunch underfoot and a crisp smell of decay and woodsmoke.",
    "Trees setting themselves on fire before going to sleep.",
    "Red, gold, and brown drifting down in the cool air.",
    "The falling color that makes the whole world feel cozy and brief."
  ]
},
{
  answer: "A Full Moon",
  category: "Thing",
  aura: "#D6D6C4",
  clues: [
    "A pale lantern that makes people act a little strange.",
    "Silver light spilling over a sleeping landscape.",
    "The thing wolves howl at and lovers point to.",
    "A perfect circle bright enough to throw shadows.",
    "The complete glowing disc that pulls the tides and the imagination."
  ]
},
{
  answer: "First Snow of Winter",
  category: "Thing",
  aura: "#E8EEF2",
  clues: [
    "The whole world holding its breath as the first flakes fall.",
    "Pressing your face to cold glass to watch it start.",
    "A hush that means the season has truly turned.",
    "White dusting the rooftops while everyone smiles like children.",
    "That magical morning when winter quietly announces itself."
  ]
}
,
{
  answer: "Nintendo",
  category: "Brand",
  aura: "#E60012",
  clues: [
    "A mustached plumber who became childhood itself.",
    "A jingle that means an adventure is about to begin.",
    "Blowing into a cartridge to make the magic work.",
    "Joy designed for everyone, from kids to grandparents.",
    "The playful brand that turned a card company into a kingdom of fun."
  ]
},
{
  answer: "Heinz",
  category: "Brand",
  aura: "#C8102E",
  clues: [
    "The patient wait for thick red to finally slide out.",
    "A glass bottle smacked on its famous angled spot.",
    "A taste so standard it defines an entire condiment.",
    "Fifty-seven varieties stamped on a label nobody questions.",
    "The brand whose name basically means ketchup."
  ]
},
{
  answer: "WhatsApp",
  category: "Brand",
  aura: "#25D366",
  clues: [
    "Two ticks that turn blue and start a small panic.",
    "The green bubble keeping whole families connected across oceans.",
    "A speech bubble with a phone tucked inside.",
    "The way the world quietly stopped paying for texts.",
    "The messaging app that became how the planet talks for free."
  ]
},
{
  answer: "TikTok",
  category: "Brand",
  aura: "#69C9D0",
  clues: [
    "A scroll that swallows hours you swear were only minutes.",
    "Dances, sounds, and trends born and dead within a week.",
    "An algorithm that seems to read your mind a little too well.",
    "A vertical river of clips you can't stop swiping.",
    "The app that turned fifteen seconds into a culture machine."
  ]
},
{
  answer: "The Mona Lisa",
  category: "Thing",
  aura: "#7A6B4A",
  clues: [
    "A smile that seems to follow you and mean nothing and everything.",
    "Smaller in person than anyone ever expects.",
    "A crowd of phones held up to a tiny famous face.",
    "Centuries of people wondering what she's thinking.",
    "The most famous painting in the world, behind a wall of glass."
  ]
},
{
  answer: "The Statue of Liberty",
  category: "Thing",
  aura: "#3EA08C",
  clues: [
    "A green giant lifting a torch to the tired and poor.",
    "The first thing the hopeful saw across the water.",
    "Freedom shaped like a crowned woman facing the sea.",
    "A symbol of welcome weathered to a soft sea-green.",
    "The towering figure greeting newcomers to a new world."
  ]
},
{
  answer: "Mount Rushmore",
  category: "Thing",
  aura: "#8A7A6B",
  clues: [
    "Four faces blasted permanently into a granite cliff.",
    "Leaders staring out forever over the pines.",
    "Patriotism carved at an impossible scale.",
    "Stone gazes sixty feet tall on a mountainside.",
    "The mountain sculpted into the faces of a nation's founders."
  ]
},
{
  answer: "Pac-Man",
  category: "Thing",
  aura: "#FFD90F",
  clues: [
    "A yellow circle eternally fleeing and feasting in a maze.",
    "A wakka-wakka chomp echoing through an arcade.",
    "Ghosts chasing a hungry mouth around a glowing grid.",
    "The dot-eater who started a whole industry.",
    "The round yellow muncher that defined the arcade era."
  ]
},
{
  answer: "A Rubik's Cube",
  category: "Thing",
  aura: "#E84C7A",
  clues: [
    "A colorful little box of pure, twisting frustration.",
    "Six faces that mock you until they suddenly click.",
    "A puzzle solved by the gifted and peeled by the desperate.",
    "Clicking rows of color into impossible order.",
    "The cube of squares that millions have tried and failed to solve."
  ]
},
{
  answer: "A Typewriter",
  category: "Thing",
  aura: "#5C4A3A",
  clues: [
    "Words committed with a satisfying mechanical clack.",
    "A bell that rings at the end of every line.",
    "No delete key, just the courage to keep going.",
    "Ink, levers, and the romance of the struggling writer.",
    "The clattering machine that wrote a century of novels."
  ]
},
{
  answer: "Jurassic Park",
  category: "Film",
  aura: "#3E5C3A",
  clues: [
    "Wonder turning to terror when the cages fail.",
    "Ripples in a glass of water meaning something huge approaches.",
    "Awe at giants brought back that should have stayed gone.",
    "A flashlight, a kitchen, and clever scaly hunters.",
    "The film where reviving the extinct goes very, very wrong."
  ]
},
{
  answer: "Indiana Jones",
  category: "Film",
  aura: "#8A6B3A",
  clues: [
    "Dusty adventure chasing relics that probably should stay buried.",
    "A hat, a whip, and a fear of one particular reptile.",
    "Booby traps, ancient temples, and a rolling boulder.",
    "A professor who's much more dangerous outside the classroom.",
    "The globe-trotting hunt for treasure that belongs in a museum."
  ]
}
,
{
  answer: "Harry Houdini",
  category: "Person",
  aura: "#2B2B3A",
  clues: [
    "Chains, locks, and the thrill of an impossible escape.",
    "Dangling upside down, daring death for a gasping crowd.",
    "A man who could slip out of anything the world built.",
    "Water tanks, straitjackets, and held breath.",
    "The legendary escape artist who made captivity look optional."
  ]
},
{
  answer: "Leonard Cohen",
  category: "Person",
  aura: "#3A3A4A",
  clues: [
    "A low gravel voice murmuring poetry about love and God.",
    "Beauty found precisely in the cracks where light gets in.",
    "A fedora, a deep calm, and a famous hallelujah.",
    "Heartbreak delivered like scripture.",
    "The somber poet-singer whose songs feel like prayers."
  ]
},
{
  answer: "Maya Angelou",
  category: "Person",
  aura: "#7A4FA0",
  clues: [
    "A voice that rose like a phoenix out of deep hardship.",
    "Words that taught a wounded people to stand tall.",
    "Dignity, rhythm, and the knowing of why the caged bird sings.",
    "Warmth and steel braided into every line.",
    "The poet whose verses feel like a grandmother's blessing."
  ]
},
{
  answer: "Pablo Neruda",
  category: "Person",
  aura: "#C44569",
  clues: [
    "Love poems so lush they feel like ripe fruit.",
    "Ordinary things made holy in simple verse.",
    "Passion and politics pouring from the same pen.",
    "Odes written to socks, tomatoes, and the sea.",
    "The poet who made longing sound like the ocean itself."
  ]
},
{
  answer: "Hey Jude",
  category: "Song",
  aura: "#E8C25A",
  clues: [
    "Comfort offered to take a sad song and make it better.",
    "A long warm wave of na-na-nas everyone joins.",
    "A gentle nudge to let someone into your heart.",
    "A piano ballad that swells into a singalong forever.",
    "The anthem that turns any crowd into one big choir."
  ]
},
{
  answer: "Stairway to Heaven",
  category: "Song",
  aura: "#9A8466",
  clues: [
    "A slow gentle climb that builds into thunder.",
    "Folk delicacy erupting into a screaming guitar.",
    "A lady sure all that glitters is gold.",
    "Acoustic mystery rising step by step to a roar.",
    "The epic that starts as a whisper and ends as a storm."
  ]
},
{
  answer: "Billie Jean",
  category: "Song",
  aura: "#3A4A6B",
  clues: [
    "A bassline that walks in like it owns the room.",
    "Sidewalk squares that light up under dancing feet.",
    "A denial set to the most danceable groove.",
    "A fedora, a spin, and the world's most famous backslide.",
    "The hit that made everyone insist the kid is not their son."
  ]
},
{
  answer: "Sweet Child o' Mine",
  category: "Song",
  aura: "#C0392B",
  clues: [
    "A tender riff that sneaks up on a hard rock song.",
    "A guitar intro that everyone air-plays badly.",
    "Tenderness howled over screaming amplifiers.",
    "Asking, by the end, where do we go now.",
    "The rock ballad that opens with a circling, unforgettable lick."
  ]
},
{
  answer: "A Mixtape",
  category: "Thing",
  aura: "#C44569",
  clues: [
    "Hours spent saying what you couldn't say out loud.",
    "Songs chosen like a coded confession of love.",
    "Pausing the radio at exactly the right second.",
    "A plastic case handed over with a racing heart.",
    "The compiled cassette that was really a paper valentine."
  ]
},
{
  answer: "Jazz",
  category: "Thing",
  aura: "#5C3A6B",
  clues: [
    "Freedom invented in the moment and never repeated.",
    "Smoke, a dim club, and notes that bend the rules.",
    "Conversation between instruments that never planned a word.",
    "A saxophone wailing something too true for lyrics.",
    "The improvised music born of struggle and pure invention."
  ]
},
{
  answer: "The Blues",
  category: "Thing",
  aura: "#3A4A6B",
  clues: [
    "Sadness sung until it somehow becomes a comfort.",
    "A guitar bending one note until it weeps.",
    "Hard times turned into a slow, healing groove.",
    "Twelve bars of telling your sorrow to a crowd.",
    "The mournful music that became the root of nearly everything."
  ]
},
{
  answer: "A Birthday",
  category: "Thing",
  aura: "#E84C9E",
  clues: [
    "The one day everyone agrees you get to be the center.",
    "A held breath, a closed eye, and a secret wish.",
    "Flickering little flames you blow out for luck.",
    "The same off-key song sung everywhere on earth.",
    "The yearly ritual of cake, candles, and getting older."
  ]
},
{
  answer: "A Wedding",
  category: "Thing",
  aura: "#E8D9E0",
  clues: [
    "A day everyone cries and no one minds.",
    "A walk down an aisle toward the rest of a life.",
    "White, vows, and a first dance under fairy lights.",
    "Two families becoming one over cake and tears.",
    "The celebration where two people promise each other forever."
  ]
}
,
{
  answer: "Curiosity",
  category: "Thing",
  aura: "#5BA8D4",
  clues: [
    "The itch that has launched every ship and rocket.",
    "The reason a child asks why a thousand times a day.",
    "A pull toward the door you were told not to open.",
    "The spark that turns a wonder into a question.",
    "The restless hunger to know what's around the next corner."
  ]
},
{
  answer: "Wanderlust",
  category: "Thing",
  aura: "#3E8C9E",
  clues: [
    "An ache for a place you've never even been.",
    "A restlessness that maps and airports somehow soothe.",
    "The pull of a horizon you'll never stop chasing.",
    "Daydreaming of leaving while staring out a window.",
    "The deep itch to pack a bag and just go anywhere."
  ]
},
{
  answer: "Stage Fright",
  category: "Thing",
  aura: "#5C5C6B",
  clues: [
    "A heart pounding loud enough to drown out the cue.",
    "A hundred eyes turning your knees to water.",
    "Words memorized perfectly that suddenly vanish.",
    "Dry mouth, cold hands, and the urge to flee.",
    "The terror of being watched the moment it matters most."
  ]
},
{
  answer: "A First Kiss",
  category: "Thing",
  aura: "#E84C7A",
  clues: [
    "A whole world narrowing to a few terrifying inches.",
    "The pause where everything could go either way.",
    "Hearts pounding loud enough to be embarrassing.",
    "Closing your eyes and hoping you do it right.",
    "The breathless first time two people decide to lean in."
  ]
},
{
  answer: "Saying Goodbye",
  category: "Thing",
  aura: "#6B7A8A",
  clues: [
    "A word that holds an entire ending inside it.",
    "Watching someone get smaller until they're gone.",
    "The last hug that you hold a second too long.",
    "A platform, a gate, a hand raised and lowered.",
    "The ache of leaving that never gets any easier."
  ]
},
{
  answer: "A Heatwave Summer Night",
  category: "Thing",
  aura: "#E8845A",
  clues: [
    "Air too thick to sleep in, windows thrown wide open.",
    "Distant laughter, sprinklers, and the hum of fans.",
    "Skin sticky and warm under a sky that won't cool.",
    "Ice cubes melting fast and time stretching slow.",
    "The endless restless night when summer refuses to let go."
  ]
},
{
  answer: "A Power Outage",
  category: "Thing",
  aura: "#3A3A4A",
  clues: [
    "The whole house going suddenly, completely silent.",
    "Candles found in a drawer and faces lit gold.",
    "The strange togetherness when the screens all die.",
    "Fumbling in the dark and then a held-breath quiet.",
    "The blackout that forces everyone to actually look at each other."
  ]
},
{
  answer: "Bubble Tea",
  category: "Food",
  aura: "#C8956B",
  clues: [
    "Chewy little surprises hiding at the bottom of a sweet drink.",
    "A fat straw stabbed through a sealed plastic lid.",
    "Tea, milk, and tapioca pearls you slurp up with a pop.",
    "A treat that's half drink and half dessert.",
    "The pearl-filled beverage that became a global obsession."
  ]
},
{
  answer: "Curry",
  category: "Food",
  aura: "#D9803A",
  clues: [
    "Warmth and spice simmered until the whole house smells of home.",
    "A thousand versions across a thousand kitchens.",
    "Heat that builds slow and comforts deep.",
    "Golden, fragrant, mopped up with torn warm bread.",
    "The spiced simmering dish that feeds half the world."
  ]
},
{
  answer: "Dumplings",
  category: "Food",
  aura: "#E8C25A",
  clues: [
    "Little pockets of comfort folded by patient hands.",
    "Steam rising as you burn your tongue too eager to wait.",
    "Family gathered around a table pinching dough together.",
    "A bite that bursts with savory warmth.",
    "The folded parcels of filling beloved across many cultures."
  ]
},
{
  answer: "Lemonade",
  category: "Food",
  aura: "#F2E05A",
  clues: [
    "Sweet and sour summer poured over clinking ice.",
    "A kid's first wobbly little business on a hot sidewalk.",
    "Tartness that makes your whole face pucker and grin.",
    "Yellow, cold, and the taste of a long warm afternoon.",
    "The classic drink made from what life gives you sour."
  ]
},
{
  answer: "Bibimbap",
  category: "Food",
  aura: "#C0392B",
  clues: [
    "A rainbow of vegetables waiting to be stirred into one.",
    "A sizzling stone bowl crisping the rice at the edges.",
    "An egg on top and a red sauce that ties it together.",
    "Beauty arranged in a circle, then happily destroyed by mixing.",
    "The colorful mixed-rice bowl meant to be jumbled before eating."
  ]
}
];
