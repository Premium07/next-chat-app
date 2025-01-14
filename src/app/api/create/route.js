import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREM_SECRET_KEY;
// const user_id = "user_2rRXmUSF2taY7U8Ix9RKUNK2R0g";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);
  console.log("user has been created");

  return Response.json({ message: "Hello Chat!" });
}
