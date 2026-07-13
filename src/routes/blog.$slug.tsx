import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { blog } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  component: Post,
  loader: ({ params }) => {
    const post = blog.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — Voyanta` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:image", content: loaderData.img },
    ] : [],
  }),
  notFoundComponent: () => <div className="min-h-screen flex items-center justify-center"><Link to="/blog">Back to blog</Link></div>,
  errorComponent: ({ reset }) => <div className="min-h-screen flex items-center justify-center"><button onClick={reset} className="btn-lime">Try again</button></div>,
});

function Post() {
  const post = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title={post.title} image={post.img} crumb="Blog" />
      <article className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{post.author} — {post.date}</div>
          <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
          <p className="mt-6">Every destination has a rhythm. The trick — for travelers and for planners — is learning to listen to it. In this piece we unpack how the Voyanta team approaches destination research, how we test itineraries before you ever see them, and the small choices that separate a good trip from a great one.</p>
          <p className="mt-4">Whether you're headed for an overwater villa or a village kitchen, the same principle applies: fewer things, done well, always beats more things, done in a rush.</p>
          <Link to="/blog" className="btn-outline-dark mt-10">← All stories</Link>
        </div>
      </article>
      <CtaBanner />
      <Footer />
    </div>
  );
}
