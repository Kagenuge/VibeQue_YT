const apiPrefix = 'https://api.spotify.com/v1';

export default async ({ offset, limit, q, token }) => {
  const uri = `${apiPrefix}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(
    q
  )}`;
  console.log('search begin, uri =', uri, 'token =', token);
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const json = await res.json();
  console.log('search got json', json);

  if (!res.ok) {
    return [];
  }

  const {
    tracks: { items }
  } = json;
  // const items = json.tracks.items;

  const filterByPreviewUrl = item => {
    if (item.preview_url) {
      return item;
    }
  };

  const onlyWithUrl = items.filter(filterByPreviewUrl);
  return onlyWithUrl.map(item => ({
    id: item.id,
    title: item.name,
    imageUri: item.album.images ? item.album.images[0].url : undefined,
    // type: item.uri,
    name: item.artists[0].name,
    previewUrl: item.preview_url
  }));
};
