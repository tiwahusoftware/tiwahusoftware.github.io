# Car Wars Simulator

<!-- vscode-markdown-toc -->
- [Car Wars Simulator](#car-wars-simulator)
  - [About](#about)
    - [Description](#description)
    - [Example](#example)
  - [Help](#help)
    - [User Interface](#user-interface)
      - [Build Image](#build-image)
      - [Workbench List](#workbench-list)
      - [Menus](#menus)
        - [File Menu](#file-menu)
        - [Edit Menu](#edit-menu)
        - [View Menu](#view-menu)
        - [Sim Menu](#sim-menu)
      - [Future Ideas](#future-ideas)
  - [Download](#download)
    - [Windows App](#windows-app)
    - [Command-Line Interface (CLI)](#command-line-interface-cli)
      - [Setup](#setup)
  - [Resources](#resources)

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

## <a name='Help'></a>Help

> Each command in the command-line interface has its own help documentation.  (Just use `--help` after any command.)

### User Interface

Imagine an interface that lets you build, modify, save, and share Car Wars (6e) builds.  Then, imagine being able to quickly simulate that build against virtual competitors to hone the configuration before your next game night.  You no longer need to imagine.

While the command-line interface is quite powerful, sometimes you want the immediate visual satisfaction that desktop apps provide.  Now there is a way to quickly compare changes to prototypes against a chosen build.  No network connection required to edit builds and run simulations.

Don't be fooled by the pretty point-click-or-tap interface. There are plenty of user-friendly keyboard accelerators for navigating the app quickly.

#### Build Image

Zoom in by tapping.

#### Workbench List

Click a card in the list to see its details.  Weapons cards include a unique display of probable roll results when attacking.

Remove cards from the list with the red X.

Duplicate cards with the duplicate button under the remove button.

Some cards do not have complete rules in simulations and have a warning symbol next to their name in the list.  These can be used in builds and simulations, but may skew simulation results.  If you want to see how well they work, try them in your next game!

#### Menus

##### File Menu

Open **TCWB** files from others or previously saved in the app.

Save build definitions as **TCWB** files or images.  Various image layouts and formats are available.

The build files themselves can be shared and modified by others.  **TCWB** code (e.g., `tcwb4554xxxx264a734br11z`)

Load build token from others.  Get their **TCWB** code (e.g., `tcwb4554xxxx264a734br11z`) and load it.

Generate a random build, if looking for inspiration.  Random builds attempt to match the Build (BP) and Crew (CP) of the current build, so add cards or open another build first.

Name your car or rename the default name.  Clear the name to go back to using a default name.  For use in **TCWB** code, characters in names are limited.  Inputs are sanitized for embedding and normalized for display. For example, `PascalCaseAndHyphens-are-useful` will display as `PASCAL CASE and HYPHENS - ARE - USEFUL`.

Sharing.  Share the build image and **TCWB** code.

##### Edit Menu

Undo/redo.  We all make mistakes, so undo and redo is easy.  Or, maybe we just want to go back and forward in time.  Now you can, Marty!

Copy the current build to clipboard.
Paste from clipboard.

Remove all cards from the current build.  This provides a fresh start and allows adding any card you want.  It's okay, there is an undo if you change your mind.

Add new cards.  Initial list is randomly available cards.  Search and select to find the one you want to add the card.  If the card requires placement on a side, choose from the available options.  Only cards valid to add to the current build are available.  For example, if you already have a Driver, remove the Driver card before trying to add a Driver.


##### View Menu

Toggle list display on and off to zoom into the build image.

Layout

Card Size

Tech Level

Refresh in case the 



##### Sim Menu

Once you build a car, put it through a simulator against other builds for analysis.


#### Future Ideas

Some future ideas, in no particular order.

- Rules for more cards.
- Additional simulator configuration options.
- ~~Reset running simulation when builds change.~~ *Done!*
- Estimated time to complete simulation.
- More statistical summary information during simulation.
- Video output from one-game simulation.
- Additional competitors, including team designations.
- Detailed statistics in CSV format.
- Card browser independent of build.
- Improved browsing of cards during construction, weapon statistics, etc.
- Warning when exceeding a target AP, BP, and CP.
- Game size adjustment to large for cards over 6 points.
- Generate random builds based on chosen target.
- ~~Browse for replacement cards to change them.~~ *Done!*
- Move cards between sides (e.g., when cards cannot be duplicated).
- Persist user settings.
- Image preview of build files in Windows Explorer.
- Load recent builds.
- Saving images in to a "printable" format.
- Better statistic summary of simulations.
- Updated assets for app and file icons.
- Performance improvements.

## <a name='Download'></a>Download

### Windows App
- Windows Store link *COMING SOON*

### Command-Line Interface (CLI)
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

#### <a name='Setup'></a>Setup

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
