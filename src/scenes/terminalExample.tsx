import { createRef } from "@motion-canvas/core/lib/utils";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { easeOutBack, linear } from "@motion-canvas/core/lib/tweening";
import { delay } from "@motion-canvas/core/lib/flow/delay";
import { Terminal } from "../utils/Terminal";

export default makeScene2D(function* (view) {
  const term = createRef<Terminal>();
  view.add(<Terminal ref={term} size={0} padding={0} cursorType={"block"} />);
  yield* term().prompt();
  yield* waitFor(0.5);
  yield* all(
    term().padding(32, 0.5, easeOutBack),
    term().size([1200, 800], 0.5, easeOutBack),
    delay(0.8, term().type("npm install motion-canvas-components", 2, linear))
  );
  term().newline();
  yield* waitFor(1);
  term().line("Installing");
  yield* waitFor(1);
  term().line(".");
  yield* waitFor(1);
  term().line(".");
  yield* waitFor(1);
  term().line(".");
  yield* waitFor(1);
  term().line("done");
  term().newline();
  yield* waitFor(4);
});
