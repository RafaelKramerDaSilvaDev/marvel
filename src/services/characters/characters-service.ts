import { BaseResponse } from "../../models/base/base-response";
import { LoadAllCharactersModel } from "../../models/characters/load-all-characters";
import { BaseService } from "../base/base-service";

class CharactersService extends BaseService {
  public async loadAllCharacters(): Promise<
    BaseResponse<LoadAllCharactersModel>
  > {
    const response = await this.fetch<BaseResponse<LoadAllCharactersModel>>({
      endpoint: "characters",
    });

    return response.data;
  }
}

export default new CharactersService();
