import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
      title: 'Blog de Clic Exitoso',
      description: 'Acá escribimos sobre landing page y marketing digital para potenciar tu negocio',
      site: context.site,
      items: posts.map((post) => ({
        ...post.data,
        // Calcula el link RSS desde el `slug` del post
        // Este ejemplo asume que todos los posts son renderizados como rutas `/blog/[slug]`
        link: `/blog/${post.slug}/`,
      })),
    });
  }