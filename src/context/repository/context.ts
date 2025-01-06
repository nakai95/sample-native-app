import { createContext } from "react";

import { RepositoryComposition } from "./repositoryComposition";

/**
 * リポジトリコンテキスト
 *
 * リポジトリ構成を提供するためのコンテキストです。
 * このコンテキストを使用することで、コンポーネント内でリポジトリを直接参照することなく、
 * リポジトリを利用することができます。
 */
export const RepositoryContext = createContext(
  Object.create(null) as RepositoryComposition,
);
