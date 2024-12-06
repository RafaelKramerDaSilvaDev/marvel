import { LoadAllComicsModel } from "../../models/comics/load-all-comics";
import { BaseService } from "../base/base-service";

class ComicsService extends BaseService {
  public async loadAllComics(): Promise<LoadAllComicsModel> {
    const response = await this.fetch<LoadAllComicsModel>({
      endpoint: "characters",
    });

    return response.data;
  }
}

export default new ComicsService();
