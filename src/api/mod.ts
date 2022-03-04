import { serve } from "./api_deps.ts";

import { randomNumber } from "../core/mod.ts";


serve(() => new Response(`${randomNumber()}`));

