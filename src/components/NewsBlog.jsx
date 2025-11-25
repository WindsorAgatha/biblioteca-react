import React, { useEffect, useState } from "react";

export default function NewsBlog() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("http://localhost:5032/api/News")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        // ordenar por publishedAt (mais recentes primeiro) e manter apenas 3
        const items = Array.isArray(data)
          ? data
              .slice()
              .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
              .slice(0, 3)
          : [];
        setNoticias(items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Erro ao carregar notícias");
        setNoticias([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  const excerpt = (text, len = 250) =>
    !text ? "" : text.length > len ? text.slice(0, len).trim() + "…" : text;

  return (
    <div className="max-w-3xl mx-auto p-4 font-serif">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Notícias da Escola</h1>

      {loading && <div className="text-center text-gray-500 py-10">Carregando notícias...</div>}

      {!loading && error && (
        <div className="text-red-600 bg-red-50 border border-red-100 rounded p-3 mb-4">
          Erro: {error}
        </div>
      )}

      {!loading && !error && noticias.length === 0 && (
        <div className="text-gray-600 text-center py-8">Nenhuma notícia encontrada.</div>
      )}

      <div className="flex flex-col gap-6">
        {noticias.map((n) => (
          <article
            key={n.id}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-44 h-48 bg-gray-100 flex-shrink-0">
              <img
                src={n.image || `https://picsum.photos/seed/news-${n.id}/600/400`}
                alt={n.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <header>
                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === n.id ? null : n.id)}
                  className="text-left w-full"
                >
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-700">
                    {n.title}
                  </h2>
                </button>
                <div className="text-sm text-gray-500 mt-1">
                  {formatDate(n.publishedAt)} {n.authorName ? `· ${n.authorName}` : ""}
                </div>
              </header>

              <div className="mt-3 text-gray-700">
                {expandedId === n.id ? (
                  <>
                    <p className="whitespace-pre-line">{n.content}</p>
                    <div className="mt-3 flex gap-3 items-center">
                      <a
                        href={`http://localhost:5032/api/News/${n.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Ver fonte (API)
                      </a>
                      <a
                        href={`/noticias/${n.id}`}
                        className="text-sm text-gray-600 hover:underline"
                        onClick={(e) => {
                          /* placeholder for future route handling */
                        }}
                      >
                        Abrir página da notícia
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="text-base">{excerpt(n.content || "")}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}