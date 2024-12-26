import { DropdownOption, ProductSortBy } from "@/interfaces/product-filter.interface";

// price range filter
export const PRODUCT_PRICE_FILTER_STEP = 1;

// product display filter
export const PRODUCT_DEFAULT_SORT_BY: ProductSortBy = "name";
export const PRODUCT_SORT_LIST: DropdownOption[] = [
  { value: "name", label: "ชื่อ" },
  { value: "position", label: "ตำแหน่ง" },
  { value: "price_desc", label: "ราคา สูง - ต่ำ", desc: "DESC" },
  { value: "price_asc", label: "ราคา ต่ำ - สูง", desc: "ASC" },
];

// product group display
export const PRODUCT_GROUP_DEFAULT_SORT_BY: ProductSortBy = "random";

// product paging
export const PRODUCT_DEFAULT_PAGE = 1;
export const PRODUCT_PAGE_SIZE = 9;

// product images
export const PRODUCT_NOT_FOUND_IMG = "/images/product-not-found.jpg";

// page layout
export const LAYOUT_DEFAULT = "no-layout"
export const LAYOUT_1_COLUMN = "1column"