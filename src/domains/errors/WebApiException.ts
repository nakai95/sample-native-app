import { ApplicationException } from "./ApplicationException";

/**
 * WEB API実行エラー
 * @param statusCode HTTPステータスコード
 * @param statusText HTTPステータステキスト
 * @param data エラーデータ
 */
export class WebApiException extends ApplicationException {
  constructor(
    readonly statusCode: number,
    readonly statusText: string,
    readonly data: unknown = null
  ) {
    super(statusText);
  }
}
