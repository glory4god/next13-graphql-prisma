import { gql } from '@apollo/client';

export const getStockQuery = gql`
  query getStock($handle: String!) {
    stock(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getStocksQuery = gql`
  query getStocks($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    stocks(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
`;
// ${productFragment}
