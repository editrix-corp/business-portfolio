import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("hero renders and the showreel plays muted on load", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const reel = page.locator("video").first();
  await expect(reel).toHaveJSProperty("muted", true);
  await expect.poll(() => reel.evaluate((v: HTMLVideoElement) => v.currentTime)).toBeGreaterThan(0);
});

test("sound toggle unmutes the showreel", async ({ page }) => {
  const reel = page.locator("video").first();
  await page.getByRole("button", { name: /sound off/i }).click();
  await expect(reel).toHaveJSProperty("muted", false);
  await page.getByRole("button", { name: /sound on/i }).click();
  await expect(reel).toHaveJSProperty("muted", true);
});

test("every work card is present and opens a lightbox with its metadata", async ({ page }) => {
  const cards = page.locator("#work article");
  await expect(cards).toHaveCount(8);

  await cards.first().locator("button").first().click();
  const dialog = page.locator("dialog");
  await expect(dialog).toHaveJSProperty("open", true);
  await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("One Year On");
  await expect(dialog.locator("video")).toHaveJSProperty("paused", false);

  await page.keyboard.press("Escape");
  await expect(page.locator("dialog")).toHaveCount(0);
});

test("faq items expand one at a time", async ({ page }) => {
  const question = page.getByRole("button", { name: /what do you edit in/i });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#faq-panel-1")).toBeVisible();

  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "false");
});

test("contact details are reachable", async ({ page }) => {
  const contact = page.locator("#contact");
  await expect(contact.getByRole("link", { name: /editrixcorp@gmail\.com/ })).toHaveAttribute(
    "href",
    /^mailto:editrixcorp@gmail\.com/,
  );
  await expect(contact.getByRole("link", { name: "@editrixco1" })).toHaveAttribute(
    "href",
    "https://www.instagram.com/editrixco1/",
  );
  await expect(contact.getByRole("link", { name: /\+91/ })).toHaveAttribute(
    "href",
    "tel:+919469514140",
  );
});

test("no horizontal overflow at any breakpoint", async ({ page }) => {
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(250);
    const { client, scroll } = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(scroll, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(client + 1);
  }
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("liquid motion is disabled and content is visible without scrolling", async ({ page }) => {
    await expect(page.locator(".reveal").first()).toHaveCSS("opacity", "1");
    await expect(page.locator(".blob-a")).toHaveCSS("animation-name", "none");
    await expect(page.locator(".liquid-cursor")).toBeHidden();
  });
});
