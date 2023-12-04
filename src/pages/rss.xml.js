import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
      title: 'Blog de Clic Exitoso',
      description: 'Acá escribimos sobre landing page y marketing digital para potenciar tu negocio',
      site: context.site,
      items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.snippet,
        // Calcula el link RSS desde el `slug` del post
        // Este ejemplo asume que todos los posts son renderizados como rutas `/blog/[slug]`
        link: `/blog/${post.slug}/`,
      })),
    });
  }