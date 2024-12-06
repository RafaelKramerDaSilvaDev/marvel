import axios, { AxiosResponse } from "axios";
import CryptoJS from "crypto-js";

export class BaseService {
  private baseUrl = import.meta.env.VITE_API_URL_MARVEL as string;
  private publicKey = import.meta.env.VITE_PUBLIC_API_KEY_MARVEL as string;
  private privateKey = import.meta.env.VITE_PRIVATE_API_KEY_MARVEL as string;

  private generateHash(): { ts: string; hash: string } {
    const ts = Date.now().toString();
    const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();
    return { ts, hash };
  }

  private createSearchParams(
    additionalParams?: Record<string, string>
  ): URLSearchParams {
    const { ts, hash } = this.generateHash();

    const searchParams = new URLSearchParams({
      apikey: this.publicKey,
      ts,
      hash,
      ...additionalParams,
    });

    return searchParams;
  }

  public async fetch<T>(params: {
    endpoint: string;
    id?: number;
    nestedEndpoint?: string;
    additionalParams?: Record<string, string>;
  }): Promise<AxiosResponse<T>> {
    let url = params.endpoint;

    if (params.id) {
      url += `/${params.id}`;
    }

    if (params.nestedEndpoint) {
      url += `/${params.nestedEndpoint}`;
    }

    const searchParams = this.createSearchParams(params.additionalParams);
    url += `?${searchParams}`;

    const response = await axios<T>({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: this.baseUrl + url,
    });

    return response;
  }
}
