import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewsBlog() {
  const navigate = useNavigate();
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
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/noticias/${n.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/noticias/${n.id}`);
              }
            }}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row cursor-pointer"
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
                <div className="text-left w-full">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(expandedId === n.id ? null : n.id);
                    }}
                    className="w-full text-left"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-700">
                      {n.title}
                    </h2>
                  </button>
                  {/* link para a página de detalhe — evita propagação para não duplicar navegação */}
                  <Link
                    to={`/noticias/${n.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Abrir página da notícia
                  </Link>
                </div>
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Ver fonte (API)
                      </a>
                      <Link
                        to={`/noticias/${n.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-gray-600 hover:underline"
                      >
                        Abrir página da notícia
                      </Link>
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