/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Authenticated API Example
 * An example API which uses bearer token scopes and JWT auth
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export type ListChatMessagesParams = {
/**
 * The number of messages to return
 */
limit?: number;
/**
 * The number of messages to skip before starting to collect the result set
 */
offset?: number;
};

export type GetToken200 = {
  token?: string;
};

export type GetTokenBody = {
  password: string;
  username: string;
};

export interface Error {
  /** Error code */
  code: number;
  /** Error message */
  message: string;
}

export interface ChatMessage {
  createdAt?: string;
  id: string;
  message: string;
  roomId: string;
  userId: string;
}

export interface ChatRoom {
  id: string;
  name: string;
}

export type EventsWithIDAllOf = {
  id: string;
};

export interface Events {
  description: string;
  imageUrl: string;
  name: string;
}

export type EventsWithID = Events & EventsWithIDAllOf;





  /**
 * A simple health check endpoint
 */
export const healthCheck = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/health`,options
    );
  }

/**
 * Returns a JWT token for a given username and password. This endpoint
does not require a JWT token to access.

 */
export const getToken = <TData = AxiosResponse<GetToken200>>(
    getTokenBody: GetTokenBody, options?: AxiosRequestConfig
 ): Promise<TData> => {const formUrlEncoded = new URLSearchParams();
formUrlEncoded.append('username', getTokenBody.username)
formUrlEncoded.append('password', getTokenBody.password)

    return axios.post(
      `/auth/token`,
      formUrlEncoded,options
    );
  }

/**
 * Returns a list of events. This endpoint requires a JWT token with the
`read:events` scope to access.

 */
export const listEvents = <TData = AxiosResponse<EventsWithID[]>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/events`,options
    );
  }

/**
 * Returns a list of all chat rooms.
 * @summary List all chat rooms
 */
export const listChatRooms = <TData = AxiosResponse<ChatRoom[]>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/chats`,options
    );
  }

/**
 * Returns a list of all messages in a chat room.
 * @summary List all messages in a chat room
 */
export const listChatMessages = <TData = AxiosResponse<ChatMessage[]>>(
    roomId: string,
    params?: ListChatMessagesParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/chats/${roomId}/messages`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * @summary WebSocket endpoint for chat
 */
export const chatWebSocket = <TData = AxiosResponse<unknown>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/ws/${id}`,options
    );
  }

export type HealthCheckResult = AxiosResponse<void>
export type GetTokenResult = AxiosResponse<GetToken200>
export type ListEventsResult = AxiosResponse<EventsWithID[]>
export type ListChatRoomsResult = AxiosResponse<ChatRoom[]>
export type ListChatMessagesResult = AxiosResponse<ChatMessage[]>
export type ChatWebSocketResult = AxiosResponse<unknown>
