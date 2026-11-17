/*
  Screw facts for the Dell Chromebook 3110 (P29T).
  Sizes and counts come from Dell's Chromebook 3110 Service Manual, "Screw list",
  except the touchpad screws, which are not in that list. Their sizes were checked in class.
  Not shown: WWAN card (1 x M2x3, LTE models only).

  sizes:  one entry per screw type. d = shaft diameter in mm, l = length in mm.
          mixup = the warning shown for screws that are easy to confuse.
          photo = close-up in images/screws. look = what students should look for.
  banner: the line-up photo of every screw. x = center of each screw pair and
          w = its width, both in percent of the photo's width.
  parts:  the start page list. x, y = where each number sits on the diagram, in percent.
          step and groups = the step it opens and the screws it lights up there.
  views:  one entry per teardown step, in order.
          photo = file name in the images folder, without the extension.
  groups: the screws in that step. qty is how many Dell lists for the group, or how many
          were counted in class when fromDell is false. Counts changed in the editor
          are saved in pin-positions.js and override qty.

  Pin positions live in pin-positions.js, which the pin editor writes for you.
*/
window.SCREW_DATA = {
  sourceUrl: "https://www.dell.com/support/manuals/en-us/chromebook-11-3110-laptop/chromebook_3110_sm/screw-list?guid=guid-cc648b28-fbf9-4a6f-bb11-4c6c2fa3d08a&lang=en-us",

  sizes: {
    "M2x3":      { key: "A", color: "#F2C230", d: 2,   l: 3,    photo: "screws/1-m2x3",       look: "Silver", mixup: "Looks like M2x4, which is black. This one is silver." },
    "M2x2":      { key: "W", color: "#C7B8FF", d: 2,   l: 2,    photo: "screws/2-m2x2",        look: "Silver, with an extra-wide head", mixup: "Looks like M2.5x2.5, which is black. This one is silver." },
    "M2.5x2.5":  { key: "C", color: "#62D2F2", d: 2.5, l: 2.5,  photo: "screws/3-m2.5x2.5",   look: "Black, with an extra-wide head", mixup: "Looks like M2x2, which is silver. This one is black." },
    "M2x4":      { key: "B", color: "#FF8A4C", d: 2,   l: 4,    photo: "screws/4-m2x4",       look: "Black. The most common screw in this Chromebook.", mixup: "Looks like M2x3, which is silver. This one is black." },
    "M2.5x3.8":  { key: "D", color: "#F5A3D6", d: 2.5, l: 3.8,  photo: "screws/5-m2.5x3.8",   look: "Black", mixup: "Easy to mix up with the M2.5x5 hinge screws. This one is about 1 mm shorter." },
    "M2.5x5":    { key: "E", color: "#83E592", d: 2.5, l: 5,    photo: "screws/6-m2.5x5",     look: "Black", mixup: "Easy to mix up with the M2.5x3.8 bezel screws. This one is about 1 mm longer." },
    "Captive":   { key: "F", color: "#FFFFFF", d: null, l: null, photo: "screws/7-captive",   title: "M2.5x4+2.5", look: "Black and long. Only part of the shaft is threaded, so it stays in the cover and does not come out" }
  },

  /* Screws students mix up most, shown side by side on the Screw count page. */
  mixups: [
    { a: "M2.5x5", b: "M2.5x3.8", text: "Both are black and the same thickness. The hinge screw (M2.5x5) is about 1 mm longer than the bezel screw. Sort them before you take the display apart." },
    { a: "M2x2", b: "M2.5x2.5", text: "Both have wide, thin heads. Silver M2x2 goes in the touchpad. Black M2.5x2.5 goes in the display hinges." },
    { a: "M2x3", b: "M2x4", text: "Both are small and the same thickness. M2x3 is silver. M2x4 is black and a little longer." }
  ],

  banner: {
    photo: "screws/banner",
    ratio: 13.702,          // photo width divided by height
    items: [
      { size: "M2x3",      x: 5.34,  w: 9.55 },
      { size: "M2x2",      x: 20.79, w: 10.11 },
      { size: "M2.5x2.5",  x: 35.96, w: 10.67 },
      { size: "M2x4",      x: 51.4,  w: 6.74 },
      { size: "M2.5x3.8",  x: 66.18, w: 6.18 },
      { size: "M2.5x5",    x: 79.33, w: 8.43 },
      { size: "Captive",   x: 93.71, w: 11.24 }
    ]
  },

  diagram: { photo: "exploded-view.jpg", credit: "Diagram from Dell's Chromebook 3110 Service Manual" },
  parts: [
    { n: 1, name: "Bottom Plate / Base Cover", step: "bottom", groups: ["base-cover"], x: 94.6, y: 12.46, text: "Nine captive screws. Loosen them and they stay in the cover." },
    { n: 2, name: "Motherboard / System Board", step: "inside", groups: ["board-usba", "display-cable", "io-right", "io-left-small", "io-left-large", "wlan"], x: 94.6, y: 37.89, text: "Seven M2x4 screws, plus the brackets over its ports and cables." },
    { n: 3, name: "Battery - Type YRDD6", step: "inside", groups: ["battery"], x: 94.6, y: 48.43, text: "Three M2x4 screws. Unplug it before anything else." },
    { n: 4, name: "Speakers", step: null, groups: [], x: 94.6, y: 55.5, text: "No screws. They sit in rubber grommets." },
    { n: 5, name: "Palmrest Assembly / Computer Chassis", step: "under-battery", groups: ["touchpad-bracket", "touchpad-wide"], x: 94.6, y: 67.18, text: "Everything mounts to it. The touchpad screws are under the battery." },
    { n: 6, name: "Display assembly", step: "inside", groups: ["display-assembly"], x: 94.6, y: 83.18, text: "Six M2.5x5 hinge screws hold it to the palmrest. The bezel, panel and hinges come after." }
  ],

  views: [
    {
      id: "bottom",
      photo: "1-bottom",
      tab: "Bottom",
      title: "Base cover",
      setup: "Chromebook closed and upside down, with the base cover on.",
      shot: "Closed and upside down, cover on, with the whole case in frame.",
      tip: "Loosen these screws, but leave them in the cover. They stay attached. LTE (WWAN) models use Torx 5 here instead of Phillips.",
      groups: [
        { id: "base-cover", size: "Captive", qty: 9, name: "Base cover", holds: "Holds the base cover to the palmrest assembly. Loosen it, and it stays in the cover." }
      ]
    },
    {
      id: "inside",
      photo: "2-inside",
      tab: "Inside",
      title: "Inside, cover off",
      setup: "Base cover off, hinges at the top, with everything still installed.",
      shot: "Straight down at the inside with the cover off and everything still installed.",
      tip: "Unplug the battery before anything else. The hinge screws and left I/O bracket are M2.5, so keep them apart from the M2 screws.",
      groups: [
        { id: "battery", size: "M2x4", qty: 3, name: "3-cell battery", holds: "Holds the battery to the palmrest assembly." },
        { id: "board-usba", size: "M2x4", qty: 7, name: "System board", holds: "Holds the system board to the palmrest assembly. Units without a right-side USB-A port use 4." },
        { id: "display-cable", size: "M2x4", qty: 1, name: "Display-cable bracket", holds: "Holds the display-cable bracket over the connector on the system board." },
        { id: "io-right", size: "M2x4", qty: 2, name: "Right I/O bracket", holds: "Holds the right I/O bracket to the palmrest assembly. Only on units with a right-side USB-A port." },
        { id: "io-left-small", size: "M2x4", qty: 1, name: "Left I/O bracket", holds: "Holds the left I/O bracket to the palmrest assembly. This bracket also uses one M2.5x5." },
        { id: "wlan", size: "M2x3", qty: 1, name: "WLAN bracket", holds: "Holds the WLAN bracket to the WLAN card on the system board." },
        { id: "io-left-large", size: "M2.5x5", qty: 1, name: "Left I/O bracket", holds: "Holds the left I/O bracket to the palmrest assembly. This bracket also uses one M2x4." },
        { id: "display-assembly", size: "M2.5x5", qty: 6, name: "Display hinges", holds: "Holds the display assembly to the base through the hinges. Support the display before removing the last ones." }
      ]
    },
    {
      id: "under-battery",
      photo: "3-under-battery",
      tab: "Under the battery",
      title: "Under the battery",
      setup: "Battery removed, looking at the touchpad and its bracket.",
      shot: "Straight down at the battery bay with the battery out.",
      tip: "Dell's screw list does not cover every screw here. Screws marked \"Not in Dell's screw list\" were added in class.",
      groups: [
        { id: "touchpad-bracket", size: "M2x3", qty: 3, fromDell: false, name: "Touchpad bracket", note: "Size stamped on the bracket", holds: "Holds the touchpad bracket to the palmrest assembly. The size is stamped next to each hole." },
        { id: "touchpad-wide", size: "M2x2", qty: 3, fromDell: false, name: "Touchpad", note: "Not in Dell's screw list", holds: "Holds the touchpad to the palmrest assembly. Not in Dell's screw list." }
      ]
    },
    {
      id: "bezel",
      photo: "4-bezel",
      tab: "Display front",
      title: "Display bezel",
      setup: "Lid open, looking at the front of the display.",
      shot: "The front of the display, straight on, so all four corner screws show.",
      tip: "On some units these screws sit under small stickers. Peel them with a plastic scribe, then pry the bezel from the inside edge.",
      groups: [
        { id: "bezel", size: "M2.5x3.8", qty: 4, name: "Display bezel", holds: "Holds the bezel to the display back cover." }
      ]
    },
    {
      id: "bezel-off",
      photo: "5-bezel-off",
      tab: "Bezel off",
      title: "Panel and hinges",
      setup: "Bezel off, with the panel still in the display back cover.",
      shot: "The display straight on with the bezel removed.",
      tip: "Panel screws come out first. Then tilt the panel forward gently to reach the display cable behind it.",
      groups: [
        { id: "panel", size: "M2x3", qty: 4, name: "Display panel", holds: "Holds the panel to the display back cover." },
        { id: "hinge-small", size: "M2x3", qty: 2, name: "Display hinges", holds: "Holds the display hinges to the back cover. The hinges also use four M2.5x2.5." },
        { id: "hinge-large", size: "M2.5x2.5", qty: 4, name: "Display hinges", holds: "Holds the display hinges to the back cover. The hinges also use two M2x3." }
      ]
    }
  ]
};
