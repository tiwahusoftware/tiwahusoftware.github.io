# Car Wars Simulator

<!-- vscode-markdown-toc -->
* [About](#About)
    * [Description](#Description)
* [Download](#Download)
    * [Setup](#Setup)

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
║ │  Tof / /__/ __ |/ , _/ GUN  │  // 0.4.152-beta+d6456a1023       // ║
║ │  tgU \___/_/ |_/_/|_| stOT  │  //                               // ║
║ │   _      _____   ___  ____  │  /////////////////////////////////// ║
║ │  | | /| / / _ | / _ \/ __/  │                                      ║
║ │  | |/ |/ / __ |/ , _/\ \    │                                      ║
║ │  |__/|__/_/ |_/_/|_/___/ I  │        an unofficial "game aid"      ║
║ │                         gG  │                                      ║
║ │  tHEriGHtoFwaygOeStOthEbiG  │                  for                 ║
║ │  NStHErIgHt     GoEStOtHEb  │                                      ║
║ │  erightoFW  Sim  oTHEbigge  │          ┌─────────────────┐         ║
║ │  GUnsTHErIg     aygOeStoTh  │          │ C A R   W A R S │         ║
║ │  IghTOfWAYgOeStOTHeBIgGeSt  │          │ (sixth edition) │         ║
║ │  sTGunStHErightOFWaygOEsTO  │          └─────────────────┘         ║
║ │                             │                                      ║
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
    cwsim roll yyyyrg
    cwsim list --help
    cwsim build --help
```

### <a name='Description'></a>Description

This is a simple beta version with limited functionality. The command line interface tries to be user-friendly, but was originally intended for just me. Some commands output pretty pictures (e.g., `render` and `build`).

Highlights are currently the construction of builds with the `build` command.
- Use the `-i` option for interactive builds (e.g., `cwsim build -i`).
- Auto-generated builds `-g` have many options, but are mostly an experiment for a future idea.
- For example, **TCWB** builds can be constructed manually or automatically-generated and saved in text-based files or images of your creation.

  ![Example of random build](/img/cw-sim/random-build-example.png)

- The **TCWB** car configuration build codes can be shared with others.

The `list` and `cards` commands are useful for advanced build construction and planning.

The `roll` command is simple and reliable, while the interactive part is poised for future enhancements. See how to use it with `cwsim roll --help`.

In the future, the builds could participate in game simulations and many simulations can produce Monte Carlo simulation results.

Parts of the program are obfuscated or removed.  You'd know that if you read the `--about` option text.

## <a name='Download'></a>Download

- [win-x64][download-link-win-x64]
- [win-arm64][download-link-win-arm64]
- [linux-x64][download-link-linux-x64]
- [linux-arm][download-link-linux-arm]
- [linux-arm64][download-link-linux-arm64]
- [osx-x64][download-link-osx-x64]

> To download and run on *Windows*, you may need to trust the executable multiple times.

> On *Linux* (or *Windows Subsystem for Linux*), the following script may be useful for installing and verifying the `cwsim` executable version:
>
> ```bash
> sudo wget https://www.tiwahu.com/download/cw-sim/beta/linux-x64/cwsim -O /usr/local/bin/cwsim
> sudo chmod +x /usr/local/bin/cwsim
> cd ~
> cwsim
> ```

## <a name='Setup'></a>Setup

1. [Download](#Download) the command line app for your device.
2. Open a command prompt in the directory of the executable.
3. Run `cwsim --help` (or `cwsim <command> --help`) from the command prompt for help.

[download-link-win-x64]: /download/cw-sim/beta/win-x64/cwsim.exe
[download-link-win-arm64]: /download/cw-sim/beta/win-arm64/cwsim.exe
[download-link-linux-x64]: /download/cw-sim/beta/linux-x64/cwsim
[download-link-linux-arm]: /download/cw-sim/beta/linux-arm/cwsim
[download-link-linux-arm64]: /download/cw-sim/beta/linux-arm64/cwsim
[download-link-osx-x64]: /download/cw-sim/beta/osx-x64/cwsim
