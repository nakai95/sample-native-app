export type ChatRoom = {
  id: string;
  name: string;
};

export type ChatMessage = {
  id: string;
  roomId: string;
  userId: string;
  message: string;
  createdAt?: Date;
};
