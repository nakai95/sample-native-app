import { useContext } from "react";

import { RepositoryContext } from "./context";

/**
 * リポジトリコンテキストを使用するためのカスタムフック
 */
export const useRepository = () => useContext(RepositoryContext);
