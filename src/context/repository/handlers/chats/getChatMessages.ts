import "@/drivers/axios";
import { listChatMessages } from "@/drivers/api/generated";
import { ChatMessage } from "@/domains/models/chats";

export type GetChatMessages = (
  roomId: string,
  limit: number,
  offset: number
) => Promise<ChatMessage[]>;

/**
 * チャットメッセージ一覧を取得する
 * @returns チャットメッセージ一覧
 */
export const getChatMessages: GetChatMessages = async (
  roomId,
  limit,
  offset
) => {
  const { data } = await listChatMessages(roomId, { limit, offset });
  return data.map((m) => ({
    id: m.id,
    roomId: m.roomId,
    userId: m.userId,
    message: m.message,
    createdAt: m.createdAt ? new Date(m.createdAt) : undefined,
  }));
};
