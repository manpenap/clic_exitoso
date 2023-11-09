import rss from '@astrojs/rss' 



export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
      title: 'Blog Clic Exitoso',
      description: 'Acá entregamos de Landing Pages y Marketing Digital',
      site: context.site,
      items: blog.map((post) => ({
        title: post.data.title,
        description: post.data.snippet,
        // Calcula el link RSS desde el `slug` del post
        // Este ejemplo asume que todos los posts son renderizados como rutas `/blog/[slug]`
        link: `/blog/${post.slug}/`,
      })),
    });
  }