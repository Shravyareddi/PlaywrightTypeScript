import { test } from "@playwright/test";
import { readExcel } from "../../src/utils/ExcelHelper";

type ExcelRow = {
  UserName: string;
};

const data = readExcel("test-data/qa/testdata.xlsx") as ExcelRow[];

test.describe("Excel Data Driven Test", () => {
  for (const record of data) {
    test(`Login test for ${record.UserName}`, async ({ page }) => {
      await page.goto("https://example.com/login");
      await page.fill("#username", record.UserName);
      await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!);
      await page.click("#submit");
    });
  }
});