# AURA Puzzle Style Guide

Every AURA puzzle describes a famous person, place, brand, or thing through **feeling alone** — no names, no facts, no dates. This guide keeps clues consistent across contributors.

---

## The Rule

> If it could appear in a Wikipedia article, it doesn't belong in a clue.

Clues must be **sensory, emotional, or associative**. They describe *what it feels like* to encounter the subject, not *what it is*.

---

## What Makes a Good Clue

**Good clues use:**
- Sensory texture: color, temperature, weight, sound, smell
- Emotional register: the specific feeling someone or something produces
- Cultural association: what it reminds you of, without naming the connection
- Contrasts and tensions: what makes the subject unusual or contradictory

**Examples of strong clues:**
- *"The particular silence of an arena right before the lights go out."* (Beyoncé)
- *"Dark, hot, slightly bitter, and somehow exactly what you needed."* (Coffee)
- *"Rain on cobblestones, a boulangerie, someone arguing about cheese with complete sincerity."* (Paris)

---

## What to Avoid

| ❌ Forbidden | Why |
|---|---|
| Names (of the subject, or of people closely associated) | Too direct |
| Dates, years, decades named explicitly | Too factual |
| Professions, roles, or titles | Too definitional |
| Place names that identify the subject | Too easy |
| Superlatives that match Wikipedia (*"the first," "the most"*) | Too encyclopedic |
| Rhymes or wordplay with the answer | Breaks the vibe |

**Bad clue:** *"She's a singer from Houston who won 32 Grammys."* — This is a fact, not a feeling.
**Better:** *"Gold, but the kind that was earned — heavy, warm, unignorable."*

---

## Clue Order

Order clues from **hardest to easiest** — most abstract first, most recognizable last.

- **Clue 1:** Pure texture/mood. Should be nearly impossible to guess cold.
- **Clue 2:** A slightly more specific feeling or image — still no facts.
- **Clue 3:** Cultural moment or association, without naming it directly.
- **Clue 4:** Getting warmer — a specific sensory detail that narrows the field.
- **Clue 5:** The most recognizable vibe. A sharp player should get it here.

Players who guess on clue 1 should feel like psychics. Players who need clue 5 should feel like it was obvious in retrospect.

---

## Choosing the Aura Color

The `aura` color is the accent color used throughout the UI for that puzzle. It should **feel like the answer** — not literally (don't make Coca-Cola red just because the logo is red), but emotionally.

| Subject | Good color direction |
|---|---|
| Something warm, earthy, iconic | Amber, gold, terracotta |
| Something cool, digital, modern | Blue, electric cyan |
| Something dark, luxurious, minimal | Near-black, deep charcoal |
| Something romantic, nostalgic | Dusty rose, mauve |
| Something vibrant, pop, maximalist | Hot pink, vivid purple |

Use hex values. Test the color against both dark and light backgrounds — it's used as a foreground accent, so it must be readable on both `#1A1A1E` and `#FFFFFF`.

---

## Edge Cases

**Answers with "The":** Include it in the `answer` field (`"The Beatles"`, `"The Moon"`). The normalize function strips leading articles from guesses, so players don't need to type "The."

**Accented characters:** Use the correct spelling in `answer` (`"Beyoncé"`, `"Frida Kahlo"`). The game accepts unaccented guesses (`"Beyonce"`) via NFD normalization.

**Multi-word answers:** Clues should avoid mentioning the number of words. The abbreviation map handles common shortenings (`"NYC"` → `"New York City"`).

**Ambiguous answers:** If two subjects could plausibly share the same clues, the puzzle is too vague. Make clue 5 specific enough that only one answer fits.

---

## Checklist Before Adding a Puzzle

- [ ] Every clue passes the "Wikipedia test" — no facts, names, or dates
- [ ] Clues are ordered hardest → easiest
- [ ] The `aura` color works as a foreground accent on dark and light backgrounds
- [ ] The `answer` uses correct spelling and capitalization
- [ ] No two clues say essentially the same thing
- [ ] A player who knows the subject would nod at every clue
- [ ] A player who doesn't know the subject can still *feel* something
