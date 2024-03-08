
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../utils/posts.ts";
import { State } from "../utils/state.ts";
import { Container } from "../components/Container.tsx";
import { HomeHeader } from "../components/HomeHeader.tsx";
import { PostPreview } from "../components/PostPreview.tsx";


interface Data extends State {
  posts: Post[];
}



export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get("q");
    const posts = await listPosts();
    const data: Data = {
      posts,
      locales: []
    };
    if (q) {
      data.posts = posts.filter((post) => post.title.includes(q));
    }
    return await ctx.render(data);
  },
};



export default function Home(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
     <HomeHeader />
     <main>
      <Container>
        <ul class="mt-16">
          {posts.map((post) => <PostPreview post={post} />)}
        </ul>
      </Container>
     </main>
    </>
  );
}
