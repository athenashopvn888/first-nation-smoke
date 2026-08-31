import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const contactPage = await readFile(new URL("../app/contact/page.tsx", import.meta.url), "utf8");
const categoryPage = await readFile(new URL("../app/items/[category]/page.tsx", import.meta.url), "utf8");

test("contact page renders one approved protected-name H1", () => {
  assert.match(contactPage, /<h1 className=\{styles\.heroTitle\}>Contact First Nation Smoke Cannabis Dispensary Toronto<\/h1>/);
  assert.equal((contactPage.match(/<h1\b/g) ?? []).length, 1);
});

test("category template renders one approved local H1 in both banner branches", () => {
  const h1Markup = categoryPage.match(/<h1\b[\s\S]*?<\/h1>/g) ?? [];

  assert.equal(h1Markup.length, 2);
  assert.equal(h1Markup.every((markup) => markup.includes("{config.name}") && markup.includes("in Toronto")), true);
  assert.doesNotMatch(h1Markup.join("\n"), /visuallyHidden|srOnly/);
});
