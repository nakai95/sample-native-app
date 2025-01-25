/**
 * アプリケーションのリポジトリの構成
 *
 * src/repositories 以下のリポジトリを束ねて定義します。
 * 新規にrepositories配下にディレクトリを作成した場合は、ここに追加してください。
 */
import * as auth from "./handlers/auth";
import * as chats from "./handlers/chats";
import * as events from "./handlers/events";

/**
 * リポジトリの構成型
 */
export type RepositoryComposition = {
  auth: typeof auth;
  chats: typeof chats;
  events: typeof events;
};

/**
 * アプリケーションのリポジトリの構成
 */
export const repositoryComposition: RepositoryComposition = {
  auth,
  chats,
  events,
} as const;
