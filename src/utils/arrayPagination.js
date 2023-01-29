export const arrayPagination = (
  array = [],
  pageSize = 5,
  actualPage = 1,
  toLastPage = false
) => {
  const entries = array.length;
  const maxPage = Math.ceil(entries / pageSize);
  const page = toLastPage
    ? maxPage
    : actualPage >= maxPage
    ? maxPage
    : actualPage <= 1
    ? 1
    : actualPage;

  const minIndex = 0 + pageSize * (page - 1);
  const maxIndex = minIndex + pageSize - 1;

  return {
    entries,
    pageSize,
    minIndex,
    maxIndex: maxIndex <= entries - 1 ? maxIndex : entries - 1,
    minPage: 1,
    maxPage,
    actualPage: page,
  };
};
