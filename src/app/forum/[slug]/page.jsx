import ChatForum from "@/components/ChatForums";

export default async function Page({ params }) {
  const slug = (await params).slug;
  return <ChatForum slug={slug} />;
}
