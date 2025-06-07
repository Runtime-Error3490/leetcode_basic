import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://leetcode.com/u/shaleen_shukla/", {
    waitUntil: "networkidle2",
  });
  const ratingLabelSelector =
    "div.text-label-3.dark\\:text-dark-label-3.font-medium";
  const globalRatingSelector = "div.text-label-3.dark\\:text-dark-label-3";
  const easyLabelSelector = "div.text-xs.font-medium.text-sd-easy";
  const mediumLabelSelector = "div.text-xs.font-medium.text-sd-medium";
  const hardLabelSelector = "div.text-xs.font-medium.text-sd-hard";
  await page.waitForSelector(easyLabelSelector, { timeout: 60000 });
  await page.waitForSelector(mediumLabelSelector, { timeout: 60000 });
  await page.waitForSelector(hardLabelSelector, { timeout: 60000 });
  await page.waitForSelector(ratingLabelSelector, { timeout: 60000 });
  await page.waitForSelector(globalRatingSelector, { timeout: 60000 });
  const easyStat = await page.$eval(easyLabelSelector, (label) => {
    const countDiv = label.nextElementSibling;
    return {
      label: label.innerText.trim(),
      count: countDiv ? countDiv.innerText.trim() : null,
    };
  });
  const mediumStat = await page.$eval(mediumLabelSelector, (label) => {
    const countDiv = label.nextElementSibling;
    return {
      label: label.innerText.trim(),
      count: countDiv ? countDiv.innerText.trim() : null,
    };
  });
  const hardStat = await page.$eval(hardLabelSelector, (label) => {
    const countDiv = label.nextElementSibling;
    return {
      label: label.innerText.trim(),
      count: countDiv ? countDiv.innerText.trim() : null,
    };
  });
  const ratingStat = await page.$eval(ratingLabelSelector, (label) => {
    const countDiv = label.nextElementSibling;
    return {
      label: label.innerText.trim(),
      count: countDiv ? countDiv.innerText.trim() : null,
    };
  });
  const globalRating = await page.$eval(globalRatingSelector, (label) => {
    const countDiv = label.nextElementSibling;
    return {
      label: label.innerText.trim(),
      count: countDiv ? countDiv.innerText.trim() : null,
    };
  });
  console.log(easyStat);
  console.log(mediumStat);
  console.log(hardStat);
  console.log(ratingStat);
  await browser.close();
})();
