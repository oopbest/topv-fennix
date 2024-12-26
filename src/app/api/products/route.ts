import { PRODUCT_DEFAULT_PAGE, PRODUCT_DEFAULT_SORT_BY, PRODUCT_PAGE_SIZE } from '@/const/product.const';
import { ProductDisplayConfig } from '@/interfaces/product-filter.interface';
import { composeQueryParams, getFilterQuery, getPageQuery } from '@/utils/query.util';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const token = request.headers.get('authorization')

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 402 });
    }

    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || PRODUCT_DEFAULT_PAGE;
    const limit = searchParams.get('limit') || PRODUCT_PAGE_SIZE;

    const brandId = process.env.NEXT_PUBLIC_DEFAULT_CATEGORY_ID
    const productDisplayConfig: ProductDisplayConfig = {
        pageSize: Number(limit),
        currentPage: Number(page),
        sortBy: PRODUCT_DEFAULT_SORT_BY,
        sortDirection: "ASC",
      };
    
    if (brandId) {
        let query: string | undefined = undefined;
        const queryCat = getFilterQuery({
            field: "brand",
            value: brandId.toString(),
            layer: 3,
            cond: "in",
        });
        const { pageSize, currentPage, sortBy, sortDirection } =
        productDisplayConfig;
        const queryPage = getPageQuery({
            pageSize: pageSize,
            currentPage: currentPage,
            sortBy: sortBy,
            sortDirection: sortDirection,
        });
        query = composeQueryParams([queryCat, queryPage]);

        // const query = `searchCriteria[filterGroups][3][filters][0][field]=brand&searchCriteria[filterGroups][3][filters][0][value]=5499&searchCriteria[filterGroups][3][filters][0][conditionType]=in&searchCriteria[pageSize]=${limit}&searchCriteria[currentPage]=${page}&searchCriteria[sortOrders][0][field]=name&searchCriteria[sortOrders][0][direction]=asc`

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/nextapi/products?${query}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    
        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch products' }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data.items);
    }    
}
