import { IBackDropItem } from "../Interfaces/IMovieByIDInterface";
import { sliceArrayLength } from "./sliceArrayLength";
import { getImageApi } from "./image";

export const formatImageUrl = (images: IBackDropItem[]) =>
  sliceArrayLength(images, 15).map((item: IBackDropItem) =>
    getImageApi(item.file_path, 'url', 'original'),
  );
