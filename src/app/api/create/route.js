import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREM_SECRET_KEY;

export async function POST(request) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const user = await request.json();
  const token = serverClient.createToken(user?.data?.id);
  console.log("user has been created", token);

  const client = await clerkClient();
  await serverClient.upsertUser({ id: user?.data?.id });

  await client.users.updateUserMetadata(user?.data?.id, {
    publicMetadata: {
      token: token,
    },
  });

  // Give access to created user to all chats.
  const slugs = [
    "python-chat",
    "javascript-chat",
    "react-chat",
    "java",
    "nodejs-chat",
    "typescript-chat",
  ];

  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(item) + " Discussion",
      created_by_id: user?.data?.id,
    });
    await channel.create();
    channel.addMembers([user?.data?.id]);
  });

  return Response.json({ message: "Hello Chat!" });
}
