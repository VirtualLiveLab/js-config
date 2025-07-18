import { Linter } from "eslint";
import { Awaitable } from "./types";

/**
 * Combine array and non-array configs into a single array.
 */
export async function combine(
  ...configs: Awaitable<Linter.Config | Linter.Config[]>[]
): Promise<Linter.Config[]> {
  const resolved = await Promise.all(configs);
  return resolved.flat();
}
