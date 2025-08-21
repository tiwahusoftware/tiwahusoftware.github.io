# [Home] | [Apps] | Mantras | [Music]

A collection of my software development mantras (i.e., "Timantras") that I've created and/or curated for more than a quarter century, and used as guidance, in no particular order...

- "Case always matters, except when it doesn't."
  - Beware of culture-sensitive casing conversions when you don't need or want them.
  - Pay attention to when case is relevant.
  - Pay attention to differences in UI labels and technical data identifier conventions.
    - Examples:
      - `UPPERCASE`
      - `lowercase`
      - `PascalCase`
      - `camelCase`
      - `kebab-case`
      - `snake_case`
      - `RaNsoMnoTecAsE`

- "Fewer lines of code, fewer bugs."
  - Fewer variables means fewer things that can change.
  - Fewer things that can change means fewer things that can go wrong.

- "Can't do much with one line of code, but two lines of code is the most powerful thing in the world."
  - Be careful with conditions.
  - Every line matters.

- "Everything you open, you must close."
  - This is the "golden rule" of programming.
  - Treat it as an implicit contractual obligation.

- "Persist inclusive start times, exclusive end times."

- "Use [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)."

- "Two wrongs may make something work but doesn't make it right; three lefts do."

- "Just because it works, doesn't mean it's right."

- "Don't expose your [privates](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/private), but you can be [friendly](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.internalsvisibletoattribute) with [internals](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/internal)."
- "Don't [cross the streams](https://youtu.be/jyaLZHiJJnE) (between environments)."
  - But, in some cases, you need to take down the *Stay-Puft Marshmallow Man*.

- "API/UX is as important as UI/UX."

- "Bugs eat copy-pasta code for breakfast."

- "Developers are users, too!"

- "Endeavor to fix [broken windows](https://en.wikipedia.org/wiki/Broken_windows_theory)."

- "Time is infinitely divisible, but finitely representable."

- "Time is always a factor."

- "Einstein was right, everything is relative."

- "Be a 'master of metaphor,' like Aristotle said."
  > The greatest thing by far is to be a master of metaphor; it is the one thing that cannot be learned from others; and it is also a sign of genius, since a good metaphor implies an intuitive perception of the similarity of the dissimilar.

- "Bytes matter."

- "Read documentation.  (Seriously!  Read the documentation of the thing you are using, especially *remarks* sections that mention quirks.)"
  - Read ALL the documentation for what you are using. Learn every API, even the ones you are **not** using. Read the super boring API reference from A to Z. Then, take a long nap. Your brain will process it and organize it for you. Once you know everything that is possible, you learn the things you don't need to do yourself.

- "Trust but verify."
  - "Trust everybody, but cut the cards yourself." &mdash;W. C. Fields

- "The charlatan makes the simple seem hard to understand, and the genius makes the complex easy to understand."

- "Go slow, to go fast."

- "Always provide a command to manually invalidate a cache and get good at renaming things."
  - I just solved your [two hardest things](https://martinfowler.com/bliki/TwoHardThings.html).
  - "Cache expiration and naming things are hard because the future is yet to be written."

- "That's RIDICULOUS!"
  - Acronym: Redundant Input Derivable in Context Using Locally Observable User State

- "That's YARFY!"
  - Acronym: Yet Another Reason For YAML

- "[Hot Millions!](https://en.wikipedia.org/wiki/Hot_Millions)"
  > A programmer must be analytical, imaginative, logical
  > A programmer must be capable of concentration, reasoning, meticulous care

- "Sometimes, circumstances dictate more than personal choice."
  &mdash;Shawn, *Psych*, Season 8 Episode 10 "The Break-Up"

- "Be nice to database, it'll be nice to you; don't ask it to do things you don't need it to do."

- "To understand recursion, you must first understand recursion."

- "It's not easy being green."
  - Add some comments...but make them *good* comments.
  - Tell us why the code is there.
  - Tell us what you are thinking.
  - Document summary and intent...and sometimes echo of code for sanity check review.
  - [Comments are more important than code][https://spawn-queue.acm.org/doi/pdf/10.1145/1053331.1053354]

- "Unit tests are locks on implementations."
  - They create implicit introspections.
  - The benefit of unit tests is not from their execution or existence, but of their creation.
  - It forces developers to check their work.
    - It's like doing multiplication to check the answer to a division problem.  They need to evaluate the answer, and how they got to the answer.
  - Developers will find their bugs before others.
    - Similar concept to the benefit of code review descriptions.

- "Train is leaving the station for releases."
  - Be on the train...it's risky to hop on a moving train, but it can be done.
  - At some point it's easier to wait for the next train.

- "We are a deity in the computer."
  - Remember that anything is possible.

- "Computers only do what you tell them to do."
  - They often get confused when multiple people tell them to do things because they are told different things.

- "It could be networking not working."

- "Often times, the 'sometimes' only happens in production."
  - "'Sometimes' problems can only be found through code inspection."

- "When porting Pac-Man, don't change the color of Blinky."
  - Keep the external interface the same, even if it appears to not matter to you; it matters to somebody.

- "Standards are cool; double standards are not."

- "Technology doesn't matter as much as the people doing the work."
  - Within one language or technology the interpersonal differences between implementations of the *same* program written by *different* programmers ("bad/good ratio") are much larger than the average difference between another language or technology.
  - "Technology matters to the people doing the work."

[home]: /index.md
[apps]: /apps/index.md
[mantras]: /mantras/index.md
[music]: /music/index.md
