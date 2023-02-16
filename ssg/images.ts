import { existsSync, mkdirSync } from "node:fs";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

type Options = {
  fit?: "contain" | "cover" | "fill";
  width?: number;
  height?: number;
  format: "webp" | "jpeg";
};

export const resizeImage = (
  url: string,
  options?: Options,
  devMode = false
) => {
  const { format } = options ?? {};
  return format === "webp" ? webp(url, options) : jpeg(url, options);
};

const webp = (url: string, options?: Options) => {
  const { fit, width, height } = options ?? {};
  if (!existsSync("./public/images/resized"))
    mkdirSync("./public/images/resized");
  const fileName = `/images/resized/${uuidv4()}.webp`;
  sharp(`./public${url}`)
    .resize({ fit, width, height })
    .webp()
    .toFile("./public" + fileName);
  return fileName;
};

const jpeg = (url: string, options?: Options) => {
  const { fit, width, height } = options ?? {};
  if (!existsSync("./public/images/resized"))
    mkdirSync("./public/images/resized");
  const fileName = `/images/resized/${uuidv4()}.jpeg`;
  sharp(`./public${url}`)
    .resize({ fit, width, height })
    .jpeg()
    .toFile("./public" + fileName);
  return fileName;
};
