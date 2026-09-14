import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { newsCategories, publishedNewsArticles } from "../data/newsData";

export default function NewsPage() {
  const [category, setCategory] = useState<(typeof newsCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return publishedNewsArticles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery = !normalized || [article.title, article.excerpt, article.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const featuredArticle = publishedNewsArticles.find((article) => article.featured);

  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="AYU news, statements and community updates."
        description="Read what has happened, what AYU has announced and updates that matter to the Union and the community."
        aside={
          <dl className="page-fact-list">
            <div><dt>Latest update</dt><dd>{publishedNewsArticles[0]?.displayDate ?? ""}</dd></div>
            <div><dt>Includes</dt><dd>News, statements and community updates</dd></div>
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
            eyebrow="News Archive"
            title="Browse AYU updates by topic."
            description="Use the search box or choose a topic to find an update."
          />

          <div className="news-toolbar">
            <label>
              <span>Search updates</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search AYU news and updates"
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
              <p>Try a different search term or topic.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container communications-role-grid">
          <div>
            <p className="eyebrow eyebrow-light">Public Communication</p>
            <h2 className="display-title display-title-light">AYU shares clear and responsible public information.</h2>
          </div>
          <p>
            Official updates are published to keep members, partners and the wider community informed about AYU activities, statements and important developments.
          </p>
        </div>
      </section>
    </>
  );
}
