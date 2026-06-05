import { expect, test } from "@playwright/test";

test("homepage shows status box, posts, and suggested profiles", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Your community feed" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Post status" })).toBeVisible();
  await expect(page.getByTestId("post-card")).toHaveCount(10);
  await expect(page.getByRole("heading", { name: "people you may add" })).toBeVisible();
  await expect(page.getByTestId("profile-card")).toHaveCount(3);
});

test("header navigates to notifications and shows mocked notifications", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Notifications" }).click();

  await expect(page).toHaveURL(/\/notifications$/);
  await expect(page.getByRole("heading", { name: "Notifications" })).toBeVisible();
  await expect(page.getByTestId("notification-card")).toHaveCount(10);
});

test("header navigates to chats and shows friend chat previews", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Chat" }).click();

  await expect(page).toHaveURL(/\/chats$/);
  await expect(page.getByRole("heading", { name: "Chats", exact: true })).toBeVisible();
  await expect(page.getByTestId("chat-card")).toHaveCount(5);
});

test("mobile viewport has usable navigation and no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Chat" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Notifications" })).toBeVisible();

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(hasOverflow).toBe(false);
});

test("keyboard can reach and activate header navigation", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Go to homepage" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Chat" })).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/\/chats$/);
});
