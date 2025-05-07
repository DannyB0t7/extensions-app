import logoDevlens from "./src/assets/images/logo-devlens.svg";
import logoStyleSpy from "./src/assets/images/logo-style-spy.svg";
import logoSpeedBoost from "./src/assets/images/logo-speed-boost.svg";
import logoJsonWizard from "./src/assets/images/logo-json-wizard.svg";
import logoTabMasterPro from "./src/assets/images/logo-tab-master-pro.svg";
import logoViewportBuddy from "./src/assets/images/logo-viewport-buddy.svg";
import logoMarkupNotes from "./src/assets/images/logo-markup-notes.svg";
import logoGridGuides from "./src/assets/images/logo-grid-guides.svg";
import logoPalettePicker from "./src/assets/images/logo-palette-picker.svg";
import logoLinkChecker from "./src/assets/images/logo-link-checker.svg";
import logoDomSnapshot from "./src/assets/images/logo-dom-snapshot.svg";
import logoConsolePlus from "./src/assets/images/logo-console-plus.svg";

export const extensionList = [
  {
    logo: logoDevlens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: logoStyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: logoSpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: logoJsonWizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: logoTabMasterPro,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: logoViewportBuddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: logoMarkupNotes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: logoGridGuides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: logoPalettePicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: logoLinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: logoDomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: logoConsolePlus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
