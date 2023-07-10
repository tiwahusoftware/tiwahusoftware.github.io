# Car Wars Simulator

<!-- vscode-markdown-toc -->
* [About](#About)
    * [Description](#Description)
    * [Example](#Example)
* [Download](#Download)
* [Setup](#Setup)
* [Resources](#Resources)

<!-- vscode-markdown-toc-config
    numbering=false
    autoSave=false
    /vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


## <a name='About'></a>About

```
╔══════════════════════════════════════════════════════════════════════╗
║ ┌─────────────────────────────┐                                      ║
║ │                             │                                      ║
║ │  hEBigGesTgUnSTheRiGHTofwa  │  /////////////////////////////////// ║
║ │  GoestOthebiGGEstGUnsthERI  │  //                               // ║
║ │  BiGGEStGuNSTHeRiGhtofwaYG  │  // Tiwahu Car Wars Simulator     // ║
║ │  AYgOEStoTHEbIgGeSTguNstHe  │  // Copyright (c) 2022 Tim Huber. // ║
║ │  GgesTGunstHerIGHtOFWAYgOE  │  // All Rights Reserved.          // ║
║ │  FwayG ________   ___ UNst  │  //                               // ║
║ │  eStG / ___/ _ | / _ \ eSt  │  // Tiwahu.CarWars.Sim.Console    // ║
║ │  Tof / /__/ __ |/ , _/ GUN  │  // 0.5.79-beta+d1bc8e14d0        // ║
║ │  tgU \___/_/ |_/_/|_| stOT  │  //                               // ║
║ │   _      _____   ___  ____  │  /////////////////////////////////// ║
║ │  | | /| / / _ | / _ \/ __/  │                                      ║
║ │  | |/ |/ / __ |/ , _/\ \    │                                      ║
║ │  |__/|__/_/ |_/_/|_/___/ I  │        an unofficial "game aid"      ║
║ │                         gG  │           (REDACTED version)         ║
║ │  tHEriGHtoFwaygOeStOthEbiG  │                                      ║
║ │  NStHErIgHt     GoEStOtHEb  │                  for                 ║
║ │  erightoFW  Sim  oTHEbigge  │                                      ║
║ │  GUnsTHErIg     aygOeStoTh  │          ┌─────────────────┐         ║
║ │  IghTOfWAYgOeStOTHeBIgGeSt  │          │ C A R   W A R S │         ║
║ │  sTGunStHErightOFWaygOEsTO  │          │ (sixth edition) │         ║
║ │                             │          └─────────────────┘         ║
║ └─────────────────────────────┘                                      ║
╚══════════════════════════════════════════════════════════════════════╝

  ┌──────────────────────────────────────────────────────────────────┐
  │ Car Wars is a trademark of Steve Jackson Games, and its rules    │
  │ and art are copyrighted by Steve Jackson Games. All rights are   │
  │ reserved by Steve Jackson Games. This game aid is the original   │
  │ creation of Timothy Huber and is released for free distribution, │
  │ and not for resale, under the permissions granted in the [Steve  │
  │ Jackson Games Online Policy][*].                                 │
  │                                                                  │
  │ [*]: http://www.sjgames.com/general/online_policy.html           │
  └──────────────────────────────────────────────────────────────────┘

Go buy more Car Wars products at: https://carwars.sjgames.com/

  ╔═══════════════════════════════════════════════════════╗
  ║ Specify '--help' for available commands and options.  ║
  ║ Specify '--about' for more ASCII art and information. ║
  ╚═══════════════════════════════════════════════════════╝

Examples:

    cwsim --help
    cwsim --about
    cwsim roll yyygyr
    cwsim list --help
    cwsim build --help
```

### <a name='Description'></a>Description

Simulating a game of *Car Wars 6e* using human-defined car build configurations and bot player rules requires several tangential capabilities.  This cross-platform console application started out as a small command-line interface (CLI) to introduce the required components.  Many are presently accessible as *commands* in the CLI.  Independent of the simulator feature, some commands are quite useful as game aids even if it retains a perpetual beta version tag and only provides limited functionality.

The command-line interface attempts to be as user-friendly as possible.  Each command has its own help documentation.  (Just use `--help` after any command.)  Some commands have options to output pretty pictures (e.g., `render` and `build`).

The construction of builds with the `build` command is a current highlight. The pool of available cards when constructing builds is limited by the valid option rules; however, incomplete and extreme builds remain possible.

In their simplest form, builds are represented by a **TCWB** code (e.g., `tcwb4554xxxx264a734br11z`). For convenience, codes persist to `*.tcwb` files, which are plain text files containing additional human-readable information about the build. (The files can be opened by your preferred text editor.) These build definitions are a keystone to running single-game and Monte Carlo simulations.

- Use the `-i` option for interactive builds in the command line interface (e.g., `cwsim build -i`).

- Auto-generated builds `-g` have many options.
    - When using this option, be sure to explore the ability to apply weights to groups of cards.
    - This was an experiment to generate diverse inputs for simulator runs, but it could be useful by itself.

- **TCWB** builds can be constructed manually or automatically-generated and your creation can be saved in text-based files or images.

  ![Example of random build](/img/cw-sim/random-build-example.png)

- Specialized treatment for "Binder Builds" is an option.

- The **TCWB** car configuration builds are *decentralized codes* that are easily shared and loaded by others.

The `cards` command is useful for build planning, since it searches cards by several properties to display text representations or render image files.

- Explore more options with `cwsim cards --help`.

- The `-t` option displays full-size cards (with redacted rule text).

  ```
  cwsim cards -t beer

  ┌───────────────────────────┐
  │ Armored               (0) │
  │ BEER REFRIGERATOR         │
  │ Accessory ─────────────── │
  │                           │
  │                           │
  │                           │
  │  aygo StOThE I gESTgUnst  │
  │     eRi HTOFW yg ESTO     │
  │       hebIGgE Tguns       │
  │                           │
  │   IGGe TgU ST ErIG tOFW   │
  │   YgOeSTO HeBig eStgunS   │
  │   HEriG TO WA Goes othe   │
  │           iGgEST          │
  │                           │
  │                           │
  │                           │
  │                           │
  │                       <2> │
  │                      Core │
  └───────────────────────────┘
  ```

The `list` command, by default, displays human-readable ID values for cards that are used in advanced build construction scenarios.

- The `-f` and `-x` options for filtering and excluding ID values can verify inputs to identical options in the `build` command.

- The other `cwsim list <TYPE>` arguments provide reference material, such as `cwsim list dice` and `cwsim list symbol`.

The `roll` command is simple and reliable, while the interactive part is poised for future enhancements.

- See how to use it with `cwsim roll --help`.

Some parts of the program are obfuscated or removed from the public version.

- More information is in the `--about` option text.

### <a name='Example'></a>Example

A future `sim` command runs game simulations and produces a detailed log of all events within each round and statistical records for the overall game.  The same command can run a high-performance Monte Carlo simulation to generate a CSV file with various statistics and results from thousands of simulated games.

A primary use case of this feature is to compare car build configurations and evaluate the impact of alterations.

In addition to creating a detailed single game report, video output visualizes movement and combat within the game, as seen in the following example:

<video width="360" height="240" controls>
  <source src="/img/cw-sim/example-sim-x4-3x3.mp4" type="video/mp4">
  <p>
    Your browser doesn't support HTML video, but you can <a href="/img/cw-sim/example-sim-x4-3x3.mp4">download the video</a> instead.
  </p>
</video>

The already available `build` command constructs the **TCWB** car build configurations used for input to the simulator.

## <a name='Download'></a>Download

- [win-x64][download-link-win-x64]
- [win-arm64][download-link-win-arm64]
- [linux-x64][download-link-linux-x64]
- [linux-arm][download-link-linux-arm]
- [linux-arm64][download-link-linux-arm64]
- [osx-x64][download-link-osx-x64]

> To download and run on *Windows*, you may need to "keep" and/or "trust" the executable multiple times.

> To download and run on *Linux* (or [*Windows Subsystem for Linux*][wsl]), the following script may be useful for installing and verifying the `cwsim` executable version:
> 
> ```bash
> sudo wget https://www.tiwahu.com/download/cw-sim/beta/linux-x64/cwsim \
>   -O /usr/local/bin/cwsim
> sudo chmod +x /usr/local/bin/cwsim
> cd ~
> cwsim
> ```

## <a name='Setup'></a>Setup

1. [Download](#Download) the command line app for your device.
2. Open a command prompt in the directory of the executable.
3. Run `cwsim --help` (or `cwsim <command> --help`) from the command prompt for help.

## <a name='Resources'></a>Resources

Additional resources for translating code values in *Car Wars Simulator*.  Printouts could be useful in physical *Car Wars 6e* games.

- [Dice Sides](./dice)
- [Symbols](./symbols)


[download-link-win-x64]: /download/cw-sim/beta/win-x64/cwsim.exe
[download-link-win-arm64]: /download/cw-sim/beta/win-arm64/cwsim.exe
[download-link-linux-x64]: /download/cw-sim/beta/linux-x64/cwsim
[download-link-linux-arm]: /download/cw-sim/beta/linux-arm/cwsim
[download-link-linux-arm64]: /download/cw-sim/beta/linux-arm64/cwsim
[download-link-osx-x64]: /download/cw-sim/beta/osx-x64/cwsim

[wsl]: https://learn.microsoft.com/en-us/windows/wsl/
