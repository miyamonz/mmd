import { fetch, fs } from "zx";

const baseDir =
  "https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/";

["miku/miku_v2.pmd", "miku/eyeM2.bmp", "vmds/wavefile_v2.vmd"].forEach((file) =>
  fetch(baseDir + file)
    .then((res) => res.arrayBuffer())
    .then((buffer) => {
      return fs.outputFile("./static/mmd/" + file, new DataView(buffer));
    })
);
