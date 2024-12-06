import axios from "axios";

export class BaseService {
  private baseUrl = import.meta.env.VITE_API_URL_MARVEL as string;
  private apiKey = import.meta.env.VITE_PUBLIC_API_KEY_MARVEL as string;

  public async fetch<T>(params: {
    endpoint: string;
    id?: number;
    nestedEndpoint?: string;
  }) {
    let url = params.endpoint;

    if (params.id && params.nestedEndpoint) {
      url = params.endpoint + "/" + params.id + "/" + params.nestedEndpoint;
    } else if (params.id) {
      url = params.endpoint + "/" + params.id;
    }

    return await axios<T>({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      baseURL: this.baseUrl + "?" + this.apiKey + "/",
      url,
    });
  }
}
