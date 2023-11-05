//
// Generated by @himenon/openapi-typescript-code-generator v0.27.1
//
// OpenApi : 3.1.0
//
//

import { Schemas, RequestBodies, Responses } from './types';
export type Response$get$tag$Status$200 = Responses.GetTag.Content;
export type RequestBody$post$login = RequestBodies.Login.Content;
export interface Response$get$users$Status$200 {
  'application/json': Schemas.User[];
}
export type RequestBody$post$user = RequestBodies.PostUser.Content;
export interface Response$post$user$Status$201 {
  'application/json': Schemas.User;
}
export interface Response$get$user$me$Status$200 {
  'application/json': Schemas.User;
}
export interface Parameter$get$users$username {
  username: string;
  /** セッションID */
  SESSIONID?: string;
}
export type Response$get$users$username$Status$200 = Responses.GetUser.Content;
export interface Parameter$get$theme {
  /** セッションID */
  SESSIONID?: string;
}
export type Response$get$theme$Status$200 = Responses.GetUserTheme.Content;
export interface Parameter$get$users$statistics {
  username: string;
  /** セッションID */
  SESSIONID?: string;
}
export type Response$get$users$statistics$Status$200 =
  Responses.GetUserStatistics.Content;
export interface Parameter$get$livestream {
  /** 検索に使用するタグの名前 */
  tag?: string;
}
export type Response$get$livestream$Status$200 =
  Responses.GetLivestreams.Content;
export interface Parameter$get$livestream$_livestreamid {
  livestreamid: string;
}
export type Response$get$livestream$_livestreamid$Status$200 =
  Responses.GetLivestream.Content;
export interface Parameter$post$livestream$livestreamid$moderate {
  livestreamid: string;
}
export type RequestBody$post$livestream$livestreamid$moderate =
  RequestBodies.PostLivestreamModerate.Content;
export interface Response$post$livestream$livestreamid$moderate$Status$201 {
  'application/json': {
    word_id?: number;
  };
}
export interface Parameter$get$livestream$_livestreamid$livecomment {
  livestreamid: string;
}
export interface Response$get$livestream$_livestreamid$livecomment$Status$200 {
  'application/json': Schemas.Livecomment[];
}
export interface Parameter$post$livestream$livestreamid$livecomment {
  livestreamid: string;
  /** application/json */
  'Content-Type'?: string;
}
export type RequestBody$post$livestream$livestreamid$livecomment =
  RequestBodies.PostLivecomment.Content;
export interface Response$post$livestream$livestreamid$livecomment$Status$201 {
  'application/json': Schemas.Livecomment;
}
export interface Parameter$post$livestream$livestreamid$enter {
  livestreamid: string;
}
export interface Parameter$delete$livestream$livestreamid$enter {
  livestreamid: string;
}
export interface Parameter$get$livestream$_livestreamid$reaction {
  livestreamid: string;
}
export interface Response$get$livestream$_livestreamid$reaction$Status$200 {
  'application/json': Schemas.Reaction[];
}
export interface Parameter$post$livestream$livestreamid$reaction {
  livestreamid: string;
  /** application/json */
  'Content-Type'?: string;
}
export type RequestBody$post$livestream$livestreamid$reaction =
  RequestBodies.PostReaction.Content;
export interface Response$post$livestream$livestreamid$reaction$Status$201 {
  'application/json': Schemas.Reaction;
}
export interface Parameter$get$livestream$_livestreamid$statistics {
  livestreamid: string;
}
export type Response$get$livestream$_livestreamid$statistics$Status$200 =
  Responses.GetLivestreamStatistics.Content;
export type RequestBody$post$livestream$reservation =
  RequestBodies.ReserveLivestream.Content;
export interface Response$post$livestream$reservation$Status$201 {
  'application/json': Schemas.Livestream;
}
export interface Parameter$get$livecomment$livecommentid$reports {
  livestreamid: string;
}
export interface Response$get$livecomment$livecommentid$reports$Status$200 {
  'application/json': Schemas.LivecommentReport[];
}
export interface Parameter$post$livecomment$livecommentid$report {
  livecommentid: string;
  livestreamid: string;
}
export interface Response$post$livecomment$livecommentid$report$Status$201 {
  'application/json': Schemas.LivecommentReport;
}
export type ResponseContentType$get$tag = keyof Response$get$tag$Status$200;
export type RequestContentType$post$login = keyof RequestBody$post$login;
export interface Params$post$login {
  requestBody: RequestBody$post$login['application/json'];
}
export type ResponseContentType$get$users = keyof Response$get$users$Status$200;
export type RequestContentType$post$user = keyof RequestBody$post$user;
export type ResponseContentType$post$user = keyof Response$post$user$Status$201;
export interface Params$post$user {
  requestBody: RequestBody$post$user['application/json'];
}
export type ResponseContentType$get$user$me =
  keyof Response$get$user$me$Status$200;
export type ResponseContentType$get$users$username =
  keyof Response$get$users$username$Status$200;
export interface Params$get$users$username {
  parameter: Parameter$get$users$username;
}
export type ResponseContentType$get$theme = keyof Response$get$theme$Status$200;
export interface Params$get$theme {
  parameter: Parameter$get$theme;
}
export type ResponseContentType$get$users$statistics =
  keyof Response$get$users$statistics$Status$200;
export interface Params$get$users$statistics {
  parameter: Parameter$get$users$statistics;
}
export type ResponseContentType$get$livestream =
  keyof Response$get$livestream$Status$200;
export interface Params$get$livestream {
  parameter: Parameter$get$livestream;
}
export type ResponseContentType$get$livestream$_livestreamid =
  keyof Response$get$livestream$_livestreamid$Status$200;
export interface Params$get$livestream$_livestreamid {
  parameter: Parameter$get$livestream$_livestreamid;
}
export type RequestContentType$post$livestream$livestreamid$moderate =
  keyof RequestBody$post$livestream$livestreamid$moderate;
export type ResponseContentType$post$livestream$livestreamid$moderate =
  keyof Response$post$livestream$livestreamid$moderate$Status$201;
export interface Params$post$livestream$livestreamid$moderate {
  parameter: Parameter$post$livestream$livestreamid$moderate;
  requestBody: RequestBody$post$livestream$livestreamid$moderate['application/json'];
}
export type ResponseContentType$get$livestream$_livestreamid$livecomment =
  keyof Response$get$livestream$_livestreamid$livecomment$Status$200;
export interface Params$get$livestream$_livestreamid$livecomment {
  parameter: Parameter$get$livestream$_livestreamid$livecomment;
}
export type RequestContentType$post$livestream$livestreamid$livecomment =
  keyof RequestBody$post$livestream$livestreamid$livecomment;
export type ResponseContentType$post$livestream$livestreamid$livecomment =
  keyof Response$post$livestream$livestreamid$livecomment$Status$201;
export interface Params$post$livestream$livestreamid$livecomment {
  parameter: Parameter$post$livestream$livestreamid$livecomment;
  requestBody: RequestBody$post$livestream$livestreamid$livecomment['application/json'];
}
export interface Params$post$livestream$livestreamid$enter {
  parameter: Parameter$post$livestream$livestreamid$enter;
}
export interface Params$delete$livestream$livestreamid$enter {
  parameter: Parameter$delete$livestream$livestreamid$enter;
}
export type ResponseContentType$get$livestream$_livestreamid$reaction =
  keyof Response$get$livestream$_livestreamid$reaction$Status$200;
export interface Params$get$livestream$_livestreamid$reaction {
  parameter: Parameter$get$livestream$_livestreamid$reaction;
}
export type RequestContentType$post$livestream$livestreamid$reaction =
  keyof RequestBody$post$livestream$livestreamid$reaction;
export type ResponseContentType$post$livestream$livestreamid$reaction =
  keyof Response$post$livestream$livestreamid$reaction$Status$201;
export interface Params$post$livestream$livestreamid$reaction {
  parameter: Parameter$post$livestream$livestreamid$reaction;
  requestBody: RequestBody$post$livestream$livestreamid$reaction['application/json'];
}
export type ResponseContentType$get$livestream$_livestreamid$statistics =
  keyof Response$get$livestream$_livestreamid$statistics$Status$200;
export interface Params$get$livestream$_livestreamid$statistics {
  parameter: Parameter$get$livestream$_livestreamid$statistics;
}
export type RequestContentType$post$livestream$reservation =
  keyof RequestBody$post$livestream$reservation;
export type ResponseContentType$post$livestream$reservation =
  keyof Response$post$livestream$reservation$Status$201;
export interface Params$post$livestream$reservation {
  requestBody: RequestBody$post$livestream$reservation['application/json'];
}
export type ResponseContentType$get$livecomment$livecommentid$reports =
  keyof Response$get$livecomment$livecommentid$reports$Status$200;
export interface Params$get$livecomment$livecommentid$reports {
  parameter: Parameter$get$livecomment$livecommentid$reports;
}
export type ResponseContentType$post$livecomment$livecommentid$report =
  keyof Response$post$livecomment$livecommentid$report$Status$201;
export interface Params$post$livecomment$livecommentid$report {
  parameter: Parameter$post$livecomment$livecommentid$report;
}
export type HttpMethod =
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'PATCH'
  | 'TRACE';
export interface ObjectLike {
  [key: string]: any;
}
export interface QueryParameter {
  value: any;
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  explode: boolean;
}
export interface QueryParameters {
  [key: string]: QueryParameter;
}
export type SuccessResponses =
  | Response$get$tag$Status$200
  | Response$get$users$Status$200
  | Response$post$user$Status$201
  | Response$get$user$me$Status$200
  | Response$get$users$username$Status$200
  | Response$get$theme$Status$200
  | Response$get$users$statistics$Status$200
  | Response$get$livestream$Status$200
  | Response$get$livestream$_livestreamid$Status$200
  | Response$post$livestream$livestreamid$moderate$Status$201
  | Response$get$livestream$_livestreamid$livecomment$Status$200
  | Response$post$livestream$livestreamid$livecomment$Status$201
  | Response$get$livestream$_livestreamid$reaction$Status$200
  | Response$post$livestream$livestreamid$reaction$Status$201
  | Response$get$livestream$_livestreamid$statistics$Status$200
  | Response$post$livestream$reservation$Status$201
  | Response$get$livecomment$livecommentid$reports$Status$200
  | Response$post$livecomment$livecommentid$report$Status$201;
export namespace ErrorResponse {
  export type get$tag = void;
  export type post$login = void;
  export type get$users = void;
  export type post$user = void;
  export type get$user$me = void;
  export type get$users$username = void;
  export type get$theme = void;
  export type get$users$statistics = void;
  export type get$livestream = void;
  export type get$livestream$_livestreamid = void;
  export type post$livestream$livestreamid$moderate = void;
  export type get$livestream$_livestreamid$livecomment = void;
  export type post$livestream$livestreamid$livecomment = void;
  export type post$livestream$livestreamid$enter = void;
  export type delete$livestream$livestreamid$enter = void;
  export type get$livestream$_livestreamid$reaction = void;
  export type post$livestream$livestreamid$reaction = void;
  export type get$livestream$_livestreamid$statistics = void;
  export type post$livestream$reservation = void;
  export type get$livecomment$livecommentid$reports = void;
  export type post$livecomment$livecommentid$report = void;
}
export interface Encoding {
  readonly contentType?: string;
  headers?: Record<string, any>;
  readonly style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  readonly explode?: boolean;
  readonly allowReserved?: boolean;
}
export interface RequestArgs {
  readonly httpMethod: HttpMethod;
  readonly url: string;
  headers: ObjectLike | any;
  requestBody?: ObjectLike | any;
  requestBodyEncoding?: Record<string, Encoding>;
  queryParameters?: QueryParameters | undefined;
}
export interface ApiClient<RequestOption> {
  request: <T = SuccessResponses>(
    requestArgs: RequestArgs,
    options?: RequestOption,
  ) => Promise<T>;
}
export class Client<RequestOption> {
  private baseUrl: string;
  constructor(
    private apiClient: ApiClient<RequestOption>,
    baseUrl: string,
  ) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }
  /** サービスで提供されているタグの一覧取得 */
  public async get$tag(
    option?: RequestOption,
  ): Promise<Response$get$tag$Status$200['application/json']> {
    const url = this.baseUrl + `/tag`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** ログイン */
  public async post$login(
    params: Params$post$login,
    option?: RequestOption,
  ): Promise<void> {
    const url = this.baseUrl + `/login`;
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  public async get$users(
    option?: RequestOption,
  ): Promise<Response$get$users$Status$200['application/json']> {
    const url = this.baseUrl + `/user`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /**
   * Create New User
   * ユーザ登録
   */
  public async post$user(
    params: Params$post$user,
    option?: RequestOption,
  ): Promise<Response$post$user$Status$201['application/json']> {
    const url = this.baseUrl + `/user`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  public async get$user$me(
    option?: RequestOption,
  ): Promise<Response$get$user$me$Status$200['application/json']> {
    const url = this.baseUrl + `/user/me`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** ユーザプロフィール取得 */
  public async get$users$username(
    params: Params$get$users$username,
    option?: RequestOption,
  ): Promise<Response$get$users$username$Status$200['application/json']> {
    const url = this.baseUrl + `/users/${params.parameter.username}`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** 配信者のテーマ取得 */
  public async get$theme(
    params: Params$get$theme,
    option?: RequestOption,
  ): Promise<Response$get$theme$Status$200['application/json']> {
    const url = this.baseUrl + `/theme`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** ユーザの配信に関する統計情報取得 */
  public async get$users$statistics(
    params: Params$get$users$statistics,
    option?: RequestOption,
  ): Promise<Response$get$users$statistics$Status$200['application/json']> {
    const url = this.baseUrl + `/users/${params.parameter.username}/statistics`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /**
   * Your GET endpoint
   * ライブストリームの情報取得エンドポイント
   */
  public async get$livestream(
    params: Params$get$livestream,
    option?: RequestOption,
  ): Promise<Response$get$livestream$Status$200['application/json']> {
    const url = this.baseUrl + `/livestream`;
    const headers = {
      Accept: 'application/json',
    };
    const queryParameters: QueryParameters = {
      tag: { value: params.parameter.tag, explode: false },
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
        queryParameters: queryParameters,
      },
      option,
    );
  }
  /**
   * Your GET endpoint
   * ライブストリーム視聴画面の情報取得
   */
  public async get$livestream$_livestreamid(
    params: Params$get$livestream$_livestreamid,
    option?: RequestOption,
  ): Promise<
    Response$get$livestream$_livestreamid$Status$200['application/json']
  > {
    const url = this.baseUrl + `/livestream/${params.parameter.livestreamid}`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** 配信者がNGワードを登録するエンドポイント */
  public async post$livestream$livestreamid$moderate(
    params: Params$post$livestream$livestreamid$moderate,
    option?: RequestOption,
  ): Promise<
    Response$post$livestream$livestreamid$moderate$Status$201['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/moderate`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  /**
   * Your GET endpoint
   * 当該ライブストリームのライブコメント取得
   */
  public async get$livestream$_livestreamid$livecomment(
    params: Params$get$livestream$_livestreamid$livecomment,
    option?: RequestOption,
  ): Promise<
    Response$get$livestream$_livestreamid$livecomment$Status$200['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/livecomment`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** ライブストリームに対するライブコメント投稿 */
  public async post$livestream$livestreamid$livecomment(
    params: Params$post$livestream$livestreamid$livecomment,
    option?: RequestOption,
  ): Promise<
    Response$post$livestream$livestreamid$livecomment$Status$201['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/livecomment`;
    const headers = {
      'Content-Type': params.parameter['Content-Type'],
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  /** 配信の視聴開始 */
  public async post$livestream$livestreamid$enter(
    params: Params$post$livestream$livestreamid$enter,
    option?: RequestOption,
  ): Promise<void> {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/enter`;
    const headers = {};
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
      },
      option,
    );
  }
  /** 配信の視聴終了 */
  public async delete$livestream$livestreamid$enter(
    params: Params$delete$livestream$livestreamid$enter,
    option?: RequestOption,
  ): Promise<void> {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/enter`;
    const headers = {};
    return this.apiClient.request(
      {
        httpMethod: 'DELETE',
        url,
        headers,
      },
      option,
    );
  }
  /**
   * Your GET endpoint
   * 当該ライブストリームのリアクション取得
   */
  public async get$livestream$_livestreamid$reaction(
    params: Params$get$livestream$_livestreamid$reaction,
    option?: RequestOption,
  ): Promise<
    Response$get$livestream$_livestreamid$reaction$Status$200['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/reaction`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  /** リアクション投稿 */
  public async post$livestream$livestreamid$reaction(
    params: Params$post$livestream$livestreamid$reaction,
    option?: RequestOption,
  ): Promise<
    Response$post$livestream$livestreamid$reaction$Status$201['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/reaction`;
    const headers = {
      'Content-Type': params.parameter['Content-Type'],
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  /**
   * Your GET endpoint
   * ライブストリームの統計情報取得
   */
  public async get$livestream$_livestreamid$statistics(
    params: Params$get$livestream$_livestreamid$statistics,
    option?: RequestOption,
  ): Promise<
    Response$get$livestream$_livestreamid$statistics$Status$200['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/statistics`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  public async post$livestream$reservation(
    params: Params$post$livestream$reservation,
    option?: RequestOption,
  ): Promise<
    Response$post$livestream$reservation$Status$201['application/json']
  > {
    const url = this.baseUrl + `/livestream/reservation`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
        requestBody: params.requestBody,
      },
      option,
    );
  }
  public async get$livecomment$livecommentid$reports(
    params: Params$get$livecomment$livecommentid$reports,
    option?: RequestOption,
  ): Promise<
    Response$get$livecomment$livecommentid$reports$Status$200['application/json']
  > {
    const url =
      this.baseUrl + `/livestream/${params.parameter.livestreamid}/report`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
  public async post$livecomment$livecommentid$report(
    params: Params$post$livecomment$livecommentid$report,
    option?: RequestOption,
  ): Promise<
    Response$post$livecomment$livecommentid$report$Status$201['application/json']
  > {
    const url =
      this.baseUrl +
      `/livestream/${params.parameter.livestreamid}/livecomment/${params.parameter.livecommentid}/report`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'POST',
        url,
        headers,
      },
      option,
    );
  }
}