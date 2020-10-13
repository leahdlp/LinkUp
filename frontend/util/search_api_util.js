export const searchEntities = keyword =>
  $.ajax({
    url: `/api/search`,
    method: "GET",
    data: { keyword }
  });
