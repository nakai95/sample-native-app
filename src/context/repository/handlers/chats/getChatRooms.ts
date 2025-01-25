import "@/drivers/axios";
import { listChatRooms } from "@/drivers/api/generated";
import { ChatRoom } from "@/domains/models/chats";

export type GetChatRooms = () => Promise<ChatRoom[]>;

/**
 * チャットルーム一覧を取得する
 * @returns チャットルーム一覧
 */
export const getChatRooms: GetChatRooms = async () => {
  const { data } = await listChatRooms();
  return data.map((room) => ({
    id: room.id,
    name: room.name,
  }));
};
