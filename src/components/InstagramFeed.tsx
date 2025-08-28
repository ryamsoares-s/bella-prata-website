import Image from "next/image";

const posts = [
  { imageUrl: "/images/brinco.png", postUrl: "#" },
  { imageUrl: "/images/colar.png", postUrl: "#" },
  { imageUrl: "/images/pulseira.png", postUrl: "#" },
];

export function InstagramFeed() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <h2>Visto no nosso Instagram</h2>
          <a
            href="https://www.instagram.com/pratasbella1/"
            target="_blank"
            className="follow-btn"
          >
            Siga @pratasbella1
          </a>
        </div>
        <div className="instagram-grid">
          {posts.map((post, index) => (
            <a
              href={post.postUrl}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <Image
                src={post.imageUrl}
                alt={`Postagem ${index + 1}`}
                width={400}
                height={400}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
