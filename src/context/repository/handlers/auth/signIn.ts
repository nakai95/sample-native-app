import "@/drivers/axios";
import { getToken } from "@/drivers/api/generated";
import { Credentials } from "@/domains/models/auth";

export type GetToken = (credentials: Credentials) => Promise<{ token: string }>;

/**
 * JWTトークンを取得する
 * @param credentials ユーザー名とパスワード
 * @returns JWTトークン
 */
export const signIn: GetToken = async (credentials) => {
  try {
    const { data } = await getToken(credentials);
    return { token: data.token || "" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
