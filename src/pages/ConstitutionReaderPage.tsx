import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import {
  constitutionArticles,
  constitutionChapters,
  constitutionMeta,
  constitutionPreamble,
  getConstitutionArticle,
} from "../data/constitution";

type ReaderMode = "preamble" | "article" | "full";

function initialReaderState(): { mode: ReaderMode; articleNumber: number } {
  const params = new URLSearchParams(window.location.search);
  const article = params.get("article");
  if (article === "preamble") return { mode: "preamble", articleNumber: 1 };
  if (article === "full") return { mode: "full", articleNumber: 1 };
  const parsed = Number(article);
  if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 64) return { mode: "article", articleNumber: parsed };
  return { mode: "article", articleNumber: 1 };
}

function updateReaderUrl(mode: ReaderMode, articleNumber: number) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", "constitution");
  url.searchParams.set("article", mode === "article" ? String(articleNumber) : mode);
  window.history.replaceState({}, "", url);
}

export default function ConstitutionReaderPage() {
  const initial = initialReaderState();
  const [mode, setMode] = useState<ReaderMode>(initial.mode);
  const [articleNumber, setArticleNumber] = useState(initial.articleNumber);
  const [query, setQuery] = useState("");

  const selectedArticle = getConstitutionArticle(articleNumber) ?? constitutionArticles[0];
  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return constitutionArticles;
    return constitutionArticles.filter((article) =>
      [`article ${article.number}`, article.title, article.body, article.chapterTitle]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const selectArticle = (number: number) => {
    setArticleNumber(number);
    setMode("article");
    updateReaderUrl("article", number);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectMode = (nextMode: ReaderMode) => {
    setMode(nextMode);
    updateReaderUrl(nextMode, articleNumber);
  };

  return (
    <>
      <PageHero
        eyebrow="Constitution"
        title="Read the AYU Constitution article by article."
        description="This reader makes the Amended 2025 Constitution easier to search and read. The signed Constitution remains the official version."
        aside={
          <dl className="page-fact-list">
            <div><dt>Edition</dt><dd>{constitutionMeta.edition}</dd></div>
            <div><dt>Approved by</dt><dd>General Assembly</dd></div>
            <div><dt>Approved</dt><dd>{constitutionMeta.approvedDate}</dd></div>
          </dl>
        }
      />

      <section className="section section-soft constitution-reader-section">
        <div className="container constitution-reader-toolbar">
          <div className="constitution-reader-modes" aria-label="Constitution reading modes">
            <button type="button" className={mode === "preamble" ? "active" : undefined} onClick={() => selectMode("preamble")}>Preamble</button>
            <button type="button" className={mode === "article" ? "active" : undefined} onClick={() => selectMode("article")}>Article view</button>
            <button type="button" className={mode === "full" ? "active" : undefined} onClick={() => selectMode("full")}>Read all</button>
          </div>
          <button className="button button-dark constitution-print-button" type="button" onClick={() => window.print()}>Print / save as PDF</button>
        </div>

        <div className="container constitution-reader-layout">
          <aside className="constitution-index constitution-screen-only">
            <label className="constitution-search">
              <span>Search Constitution</span>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search Constitution" />
            </label>

            {query.trim() ? (
              <div className="constitution-search-results">
                <strong>{filteredArticles.length} matching article{filteredArticles.length === 1 ? "" : "s"}</strong>
                {filteredArticles.map((article) => (
                  <button type="button" key={article.number} onClick={() => selectArticle(article.number)}>
                    <span>Article {article.number}</span>
                    <b>{article.title}</b>
                  </button>
                ))}
              </div>
            ) : (
              <div className="constitution-chapter-list">
                {constitutionChapters.map((chapter) => (
                  <details key={chapter.id} open={chapter.articles.some((article) => article.number === articleNumber)}>
                    <summary><span>Chapter {chapter.roman}</span><strong>{chapter.title}</strong></summary>
                    <div>
                      {chapter.articles.map((article) => (
                        <button
                          type="button"
                          key={article.number}
                          className={mode === "article" && article.number === articleNumber ? "active" : undefined}
                          onClick={() => selectArticle(article.number)}
                        >
                          <span>{article.number}</span>
                          <b>{article.title}</b>
                        </button>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </aside>

          <article className="constitution-document">
            {mode === "preamble" ? (
              <section className="constitution-reading-block">
                <div className="constitution-article-meta"><span>Preamble</span><strong>{constitutionMeta.edition}</strong></div>
                <h2>Preamble</h2>
                <div className="constitution-legal-text">{constitutionPreamble}</div>
              </section>
            ) : null}

            {mode === "article" ? (
              <section className="constitution-reading-block">
                <div className="constitution-article-meta">
                  <span>Chapter {selectedArticle.chapterRoman} · {selectedArticle.chapterTitle}</span>
                  <strong>Constitution page {selectedArticle.page}</strong>
                </div>
                <p className="constitution-article-number">Article {selectedArticle.number}</p>
                <h2>{selectedArticle.title}</h2>
                <div className="constitution-legal-text">{selectedArticle.body}</div>
                <nav className="constitution-article-pager" aria-label="Article navigation">
                  {selectedArticle.number > 1 ? <button type="button" onClick={() => selectArticle(selectedArticle.number - 1)}>← Article {selectedArticle.number - 1}</button> : <span />}
                  {selectedArticle.number < 64 ? <button type="button" onClick={() => selectArticle(selectedArticle.number + 1)}>Article {selectedArticle.number + 1} →</button> : null}
                </nav>
              </section>
            ) : null}

            {mode === "full" ? (
              <div className="constitution-full-text">
                <section className="constitution-reading-block constitution-full-cover">
                  <img src="/ayu-logo.webp" alt="Apuk Youth Union in Juba logo" width="128" height="124" />
                  <p className="eyebrow">{constitutionMeta.edition}</p>
                  <h1>{constitutionMeta.title}</h1>
                  <p>Amended and approved by the General Assembly on {constitutionMeta.approvedDate}</p>
                </section>

                <section className="constitution-reading-block">
                  <h2>Preamble</h2>
                  <div className="constitution-legal-text">{constitutionPreamble}</div>
                </section>

                {constitutionChapters.map((chapter) => (
                  <section className="constitution-full-chapter" key={chapter.id}>
                    <header><span>Chapter {chapter.roman}</span><h2>{chapter.title}</h2></header>
                    {chapter.articles.map((article) => (
                      <div className="constitution-full-article" key={article.number}>
                        <p>Article {article.number}</p>
                        <h3>{article.title}</h3>
                        <div className="constitution-legal-text">{article.body}</div>
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            ) : null}

            <footer className="constitution-transcription-note">
              <strong>Public reader</strong>
              <p>This page presents the Constitution for public reference. Current membership registration fee details are provided through the official AYU membership form. If there is any difference between this reader and the signed Constitution, the signed Constitution remains the official version.</p>
            </footer>
          </article>
        </div>
      </section>
    </>
  );
}
