import { makeProject } from "@motion-canvas/core";

import example from "./scenes/codeExample?scene";
import terminal from "./scenes/terminalExample?scene";

export default makeProject({
  scenes: [example, terminal],
});
