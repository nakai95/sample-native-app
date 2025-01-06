import "@/drivers/axios";
import { listEvents } from "@/drivers/api/generated";
import { Event } from "@/domains/models/events";

export type GetEvents = () => Promise<Event[]>;

/**
 * イベント一覧を取得する
 * @returns イベント一覧
 */
export const getEvents: GetEvents = async () => {
  const { data } = await listEvents();
  return data.map((event) => ({
    id: `${event.id}`,
    title: event.name,
    description: event.description,
    imageUrl: event.imageUrl,
  }));
};
