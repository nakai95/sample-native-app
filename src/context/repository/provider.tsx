import { RepositoryContext } from "./context";

import { RepositoryComposition } from "./repositoryComposition";

/**
 * リポジトリコンテキストプロバイダ
 *
 * リポジトリコンテキストを提供するためのプロバイダです。
 * このプロバイダ配下のコンポーネントは、リポジトリコンテキストを使用することができます。
 */
export const RepositoryContextProvider: React.FC<{
  repositoryComposition: RepositoryComposition;
  children: React.ReactNode;
}> = ({ repositoryComposition, children }) => {
  return (
    <RepositoryContext.Provider value={repositoryComposition}>
      {children}
    </RepositoryContext.Provider>
  );
};
