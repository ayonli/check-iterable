import "https://unpkg.com/mocha@10.2.0/mocha.js";
import { dirname, fromFileUrl } from "https://deno.land/std@0.201.0/path/mod.ts";
import { globber } from "https://deno.land/x/globber@0.1.0/mod.ts";

(window as any).location = new URL("http://localhost:0");
mocha.setup({ ui: "bdd", reporter: "spec" });
mocha.checkLeaks();

await import("./test.mjs");

mocha.run((failures: number) => {
    if (failures > 0) {
        Deno.exit(1);
    } else {
        Deno.exit(0);
    }
}).globals(["onerror"]);
