"use client";

import { useState } from "react";
import {
  ProductDetail,
  ProductImage,
  ProductMedia,
} from "@/interfaces/dto/product-detail.dto";
import SliderSync from "./product-slider-sync";

interface Props {
  dataProducts: ProductDetail;
}

const ProductImages = ({ dataProducts }: Props) => {
  const [selectedVarientSku] = useState<string>("");

  const setProductImages = (media: ProductMedia[]) => {
    return media.map((media: ProductMedia) => {
      let ytEmbededUrl = "";
      if (
        media.video_content !== undefined &&
        media.video_content.video_url !== ""
      ) {
        const ytId = media.video_content.video_url.replace(
          "https://youtu.be/",
          ""
        );
        ytEmbededUrl = `https://www.youtube.com/embed/${ytId}`;
      }
      return {
        url: media.media_path,
        alt: media.media_path,
        type: media.media_type,
        path: media.media_path,
        video_title: media.video_content?.video_title,
        video_url: ytEmbededUrl,
      };
    });
  };

  const isConfigurable = dataProducts.customizes.length > 0;
  let productImages: ProductImage[] = [];
  if (!isConfigurable || selectedVarientSku === "") {
    productImages = setProductImages(dataProducts!.media);
  } else {
    const varient = dataProducts!.customizes[0].values.find(
      (v) => v.sku == selectedVarientSku
    );
    let varientImages: ProductMedia[] | undefined = [];
    varientImages = varient?.mediagallery.map((media) => {
      return { ...media, media_path: media.file };
    });
    productImages = setProductImages(varientImages ? varientImages : []);
  }

  return (
    <div className="flex flex-col gap-2">
      {dataProducts && (
        <div className="w-full lg:max-w-lg mx-auto text-center">
          <SliderSync productImages={productImages} />
        </div>
      )}
    </div>
  );
};

export default ProductImages;
