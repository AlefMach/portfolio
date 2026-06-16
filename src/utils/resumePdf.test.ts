import { describe, expect, it } from "vitest";

import { type TranslationDictionary, translations } from "../i18n/translations";
import { buildResumeTemplate } from "./resumePdf";

const normalizeTemplate = (template: string) =>
  template.replace(/\r\n/g, "\n").trim();

const cloneTranslation = (translation: TranslationDictionary) =>
  JSON.parse(JSON.stringify(translation)) as TranslationDictionary;

describe("buildResumeTemplate", () => {
  it("matches the resume PDF layout contract", () => {
    const template = normalizeTemplate(
      buildResumeTemplate("pt", translations.pt),
    );

    expect(template).toMatchSnapshot();
  });

  it("keeps the A4 print layout and key resume sections", () => {
    const template = buildResumeTemplate("en", translations.en);

    expect(template).toContain("size: A4;");
    expect(template).toContain("grid-template-columns: 210px 1fr;");
    expect(template).toContain("min-height: 297mm;");
    expect(template).toContain("width: 210mm;");
    expect(template).toContain("<aside>");
    expect(template).toContain("<main>");
    expect(template).toContain('<img class="qr"');
    expect(template).toContain("<h2>Contact</h2>");
    expect(template).toContain("<h2>Experience</h2>");
    expect(template).toContain("<h2>Stack</h2>");
    expect(template).toContain("<h2>Selected engineering cases</h2>");
  });

  it("escapes translated content before writing the printable HTML", () => {
    const translation = cloneTranslation(translations.pt);
    translation.home.aboutIntro = '<img src=x onerror="alert(1)">';
    translation.home.experienceItems[0].role = "Dev & Lead";
    translation.home.projectCards[0].title = "Project <script>";

    const template = buildResumeTemplate("pt", translation);

    expect(template).toContain(
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
    );
    expect(template).toContain("Dev &amp; Lead");
    expect(template).toContain("Project &lt;script&gt;");
    expect(template).not.toContain('<img src=x onerror="alert(1)">');
    expect(template).not.toContain("Project <script>");
  });
});
