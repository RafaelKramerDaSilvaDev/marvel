type BaseObject = {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
  }[];
  returned: number;
};

export type LoadAllCharactersModel = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: BaseObject;
  series: BaseObject;
  stories: BaseObject;
  events: BaseObject;
  urls: {
    type: string;
    url: string;
  }[];
};
