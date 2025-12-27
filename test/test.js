// Phase-1 test -

import { openUrl, $ } from "../src/index.js";

await openUrl("https://example.com");
await $("#login").click();