// Map from node id to live demo URL. Only nodes with an entry here show the popup.
export const DEMOS = {
  "gui-first-principles": "https://galmungral.github.io/gui-first-principles/",
  "michelangelo":         "https://galmungral.github.io/michelangelo/",
  "vector-rendering":     "https://galmungral.github.io/vector-rendering/",
  "newton-vg":            "https://galmungral.github.io/newton-vg/",
  "gl-raytracer":         "https://galmungral.github.io/gl-raytracer/",
  "3d-rasterizer":        "https://galmungral.github.io/3d-rasterizer/",
  "gl-fdm-2d":            "https://galmungral.github.io/gl-fdm-2d/",
  "gl-fdm-3d":            "https://galmungral.github.io/gl-fdm-3d/",
  "wasm-particle-sim":    "https://galmungral.github.io/wasm-particle-sim/",
  "wasm-fvm-cfd":         "https://galmungral.github.io/wasm-fvm-cfd/",
  "hillshade":            "https://galmungral.github.io/hillshade/",
  "terrain-faulting":     "https://galmungral.github.io/terrain-faulting/",
  "oblique-mercator":     "https://galmungral.github.io/oblique-mercator/",
  "raster-tile-renderer": "https://galmungral.github.io/raster-tile-renderer/",
  "vector-tiles-gl":      "https://galmungral.github.io/vector-tiles-gl/",
  "visible-human-vtk":    "https://galmungral.github.io/visible-human-vtk/",
  "visible-human-slicer": "https://galmungral.github.io/visible-human-slicer/",
  "visible-human-volume": "https://galmungral.github.io/visible-human-volume/",
  "shape-from-shading":   "https://galmungral.github.io/shape-from-shading/",
  "mol-renderer":         "https://galmungral.github.io/mol-renderer/",
  "conformer-viewer":     "https://galmungral.github.io/conformer-viewer/",
  "spectral-color":       "https://galmungral.github.io/spectral-color/",
  "qft-viz":              "https://galmungral.github.io/qft-viz/",
  "kanbun-lang":          "https://galmungral.github.io/kanbun-lang/",
  "tidal-sphere":         "https://galmungral.github.io/tidal-sphere/",
  "macrobook":            "https://galmungral.github.io/macrobook/",
};

export const TAGS = [
  "UI",
  "2D Graphics",
  "3D Rendering",
  "GPU",
  "Simulation",
  "Geospatial",
  "Medical",
  "Chemical",
  "Math",
  "Computer Vision",
  "Statistical & ML",
  "CS Foundations",
  "Networking",
  "Literate",
];

export const NODES = [
  { id: "replay",                   tags: ["UI", "2D Graphics"] },
  { id: "gui-first-principles",     tags: ["UI", "2D Graphics", "Literate"] },
  { id: "michelangelo",             tags: ["UI", "2D Graphics"] },
  { id: "vector-rendering",         tags: ["2D Graphics"] },
  { id: "svg.c",                    tags: ["2D Graphics"] },
  { id: "newton-vg",                tags: ["2D Graphics", "GPU"] },
  { id: "cpu-raytracer",            tags: ["3D Rendering"] },
  { id: "gl-raytracer",             tags: ["3D Rendering", "GPU"] },
  { id: "3d-rasterizer",            tags: ["3D Rendering"] },
  { id: "gl-fdm-2d",                tags: ["Simulation", "GPU"] },
  { id: "gl-fdm-3d",                tags: ["Simulation", "3D Rendering", "GPU"] },
  { id: "wasm-particle-sim",        tags: ["Simulation"] },
  { id: "wasm-fvm-cfd",             tags: ["Simulation", "GPU"] },
  { id: "hillshade",                tags: ["Geospatial", "3D Rendering", "GPU"] },
  { id: "shortcut-to-graphics",     tags: ["Geospatial", "3D Rendering", "Literate"] },
  { id: "terrain-faulting",         tags: ["Geospatial", "Simulation"] },
  { id: "oblique-mercator",         tags: ["Geospatial", "3D Rendering"] },
  { id: "raster-tile-renderer",     tags: ["Geospatial", "2D Graphics"] },
  { id: "vector-tiles-gl",          tags: ["Geospatial", "2D Graphics", "GPU"] },
  { id: "visible-human-explore",    tags: ["Medical", "Literate"] },
  { id: "visible-human-vtk",        tags: ["Medical"] },
  { id: "visible-human-slicer",     tags: ["Medical"] },
  { id: "visible-human-volume",     tags: ["Medical", "3D Rendering", "GPU"] },
  { id: "scivis-primer",            tags: ["Simulation"] },
  { id: "shape-from-shading",       tags: ["Math", "3D Rendering", "Computer Vision"] },
  { id: "mol-renderer",             tags: ["Chemical"] },
  { id: "conformer-viewer",         tags: ["Chemical"] },
  { id: "spectral-color",           tags: ["Chemical", "Math"] },
  { id: "qft-viz",                  tags: ["Math"] },
  { id: "backprop",                 tags: ["Math", "Literate", "Statistical & ML"] },
  { id: "gpu-patterns",             tags: ["GPU"] },
  { id: "tinyvm",                   tags: ["CS Foundations"] },
  { id: "tinyos",                   tags: ["CS Foundations"] },
  { id: "universal-turing-machine", tags: ["CS Foundations"] },
  { id: "kanbun-lang",              tags: ["CS Foundations"] },
  { id: "plato",                    tags: ["Statistical & ML"] },
  { id: "tidal-sphere",             tags: ["Simulation", "3D Rendering"] },
  { id: "macrobook",                tags: ["CS Foundations"] },
  { id: "telescope",                tags: ["Networking"] },
  { id: "wormhole",                 tags: ["Networking"] },
];

// Edges grouped by the tag boundary they cross.
// A group key of "A" means edges within cluster A.
// A group key of "A — B" means edges between clusters A and B.
// The existence of a group implies those two tag clusters are related.
// Each edge: [source, target, rating] where rating is 1–5
// 5 = directly builds on / extends; 1 = loose thematic overlap
export const CONNECTIONS = {
  "UI": [
    ["replay", "gui-first-principles", 4],
    ["replay", "michelangelo", 4],
    ["gui-first-principles", "michelangelo", 4],
  ],
  "UI — 2D Graphics": [
    ["gui-first-principles", "vector-rendering", 4],
    ["gui-first-principles", "svg.c", 4],
  ],
  "2D Graphics": [
    ["vector-rendering", "svg.c", 5],
    ["vector-rendering", "newton-vg", 5],
    ["svg.c", "newton-vg", 5],
  ],
  "2D Graphics — 3D Rendering": [
    ["vector-rendering", "3d-rasterizer", 3],
    ["svg.c", "3d-rasterizer", 3],
    ["newton-vg", "3d-rasterizer", 3],
  ],
  "2D Graphics — Geospatial": [
    ["vector-rendering", "vector-tiles-gl", 3],
  ],
  "3D Rendering": [
    ["cpu-raytracer", "gl-raytracer", 5],
    ["cpu-raytracer", "3d-rasterizer", 3],
  ],
  "3D Rendering — Simulation": [
    ["gl-raytracer", "gl-fdm-2d", 3],
    ["gl-raytracer", "gl-fdm-3d", 4],
    ["cpu-raytracer", "wasm-particle-sim", 2],
  ],
  "3D Rendering — Geospatial": [
    ["gl-raytracer", "hillshade", 2],
    ["gl-raytracer", "shortcut-to-graphics", 2],
    ["gl-raytracer", "oblique-mercator", 4],
    ["3d-rasterizer", "vector-tiles-gl", 3],
  ],
  "3D Rendering — Medical": [
    ["gl-raytracer", "visible-human-volume", 4],
  ],
  "GPU": [
    ["gl-raytracer", "gpu-patterns", 2],
    ["gl-fdm-3d", "gpu-patterns", 4],
    ["oblique-mercator", "gpu-patterns", 2],
  ],
  "Simulation": [
    ["gl-fdm-2d", "gl-fdm-3d", 5],
    ["gl-fdm-2d", "wasm-fvm-cfd", 3],
    ["gl-fdm-3d", "wasm-fvm-cfd", 3],
    ["gl-fdm-2d", "tidal-sphere", 2],
  ],
  "Simulation — Geospatial": [
    ["wasm-fvm-cfd", "hillshade", 3],
    ["gl-fdm-2d", "hillshade", 4],
    ["gl-fdm-3d", "hillshade", 4],
    ["wasm-fvm-cfd", "shortcut-to-graphics", 3],
    ["gl-fdm-2d", "shortcut-to-graphics", 4],
    ["gl-fdm-3d", "shortcut-to-graphics", 4],
    ["wasm-fvm-cfd", "terrain-faulting", 2],
    ["gl-fdm-2d", "terrain-faulting", 2],
    ["gl-fdm-3d", "terrain-faulting", 2],
    ["terrain-faulting", "tidal-sphere", 2],
  ],
  "Simulation — Medical": [
    ["gl-fdm-3d", "visible-human-volume", 5],
    ["visible-human-vtk", "scivis-primer", 5],
  ],
  "Simulation — Math": [
    ["wasm-fvm-cfd", "shape-from-shading", 4],
  ],
  "Simulation — Chemical": [
    ["wasm-particle-sim", "mol-renderer", 2],
  ],
  "Geospatial": [
    ["hillshade", "shortcut-to-graphics", 5],
    ["raster-tile-renderer", "vector-tiles-gl", 4],
  ],
  "Geospatial — Medical": [
    ["oblique-mercator", "visible-human-volume", 3],
  ],
  "Geospatial — Math": [
    ["hillshade", "shape-from-shading", 4],
    ["shortcut-to-graphics", "shape-from-shading", 4],
    ["shortcut-to-graphics", "qft-viz", 1],
    ["shortcut-to-graphics", "backprop", 1],
  ],
  "Geospatial — Chemical": [
    ["shortcut-to-graphics", "spectral-color", 1],
  ],
  "Medical": [
    ["visible-human-explore", "visible-human-vtk", 5],
    ["visible-human-vtk", "visible-human-slicer", 5],
    ["visible-human-vtk", "visible-human-volume", 5],
    ["visible-human-explore", "scivis-primer", 5],
    ["visible-human-vtk", "scivis-primer", 5],
  ],
  "Medical — Math": [
    ["visible-human-explore", "backprop", 1],
  ],
  "Chemical": [
    ["mol-renderer", "conformer-viewer", 3],
  ],
  "Statistical & ML": [
    ["plato", "backprop", 1],
  ],
  "CS Foundations": [
    ["tinyvm", "tinyos", 5],
    ["tinyvm", "kanbun-lang", 1],
    ["tinyvm", "macrobook", 2],
    ["tinyvm", "universal-turing-machine", 2],
    ["universal-turing-machine", "macrobook", 2],
  ],
  "CS Foundations — Networking": [
    ["tinyos", "telescope", 1],
  ],
  "CS Foundations — UI": [
    ["replay", "kanbun-lang", 3],
    ["gui-first-principles", "tinyos", 4],
  ],
  "UI — Geospatial": [
    ["michelangelo", "raster-tile-renderer", 4],
  ],
  "Networking": [
    ["telescope", "wormhole", 5],
  ],
};