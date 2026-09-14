import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { newsArticles, newsCategories } from "../data/newsData";

export default function NewsPage() {
  const [category, setCategory] = useState<(typeof newsCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return newsArticles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery = !normalized || [article.title, article.excerpt, article.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const featuredArticle = newsArticles.find((article) => article.featured);

  return (
    <>
      <PageHero
        eyebrow="News & Official Communications"
        title="AYU news, public statements and community updates in one institutional archive."
        description="This section brings together AYU-Juba announcements, official statements, community developments and public-interest updates relevant to the Union's constitutional mandate."
        aside={
          <dl className="page-fact-list">
            <div><dt>Archive entries</dt><dd>{newsArticles.length}</dd></div>
            <div><dt>Latest record</dt><dd>{newsArticles[0]?.displayDate ?? ""}</dd></div>
            <div><dt>Communications office</dt><dd>Secretary for Information and Media</dd></div>
          </dl>
        }
      />

      {featuredArticle ? (
        <section className="section section-white">
          <div className="container featured-news-card">
            <div>
              <p className="eyebrow">Featured Update</p>
              <span>{featuredArticle.category} · {featuredArticle.displayDate}</span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <a className="text-link" href={`/?page=news-article&slug=${featuredArticle.slug}`}>Read full update →</a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Archive"
            title="Browse AYU communications by topic."
            description="Search the archive or filter by communication category."
          />

          <div className="news-toolbar">
            <label>
              <span>Search updates</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or topic"
              />
            </label>

            <div className="filter-chip-row" aria-label="News categories">
              {newsCategories.map((item) => (
                <button
                  className={category === item ? "filter-chip active" : "filter-chip"}
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="news-grid">
            {filteredArticles.map((article) => (
              <article className="news-card" key={article.slug}>
                <div className="news-card-meta">
                  <span>{article.category}</span>
                  <time dateTime={article.publishedAt}>{article.displayDate}</time>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="text-link" href={`/?page=news-article&slug=${article.slug}`}>Read update →</a>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="archive-empty-state">
              <strong>No matching updates</strong>
              <p>Try a different search term or communication category.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container communications-role-grid">
          <div>
            <p className="eyebrow eyebrow-light">Institutional Communications</p>
            <h2 className="display-title display-title-light">Clear public communication is part of AYU's constitutional responsibility.</h2>
          </div>
          <p>
            The Secretary for Information and Media serves as AYU-Juba's spokesperson, circulates official information and manages the Union's website and social-media accounts.
          </p>
        </div>
      </section>
    </>
  );
}
