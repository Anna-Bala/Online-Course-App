import type { ImageLoaderProps } from "next/image";

const DEFAULT_IMAGE_QUALITY = 75;

export default function imageKitLoader({ quality, src, width }: ImageLoaderProps) {
  try {
    const url = new URL(src);
    const normalizedQuality = quality ?? DEFAULT_IMAGE_QUALITY;

    url.searchParams.set("tr", `w-${width},q-${normalizedQuality},f-auto`);

    return url.toString();
  } catch {
    return src;
  }
}
