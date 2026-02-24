export type GeocodedPoint = {
  latitude: number;
  longitude: number;
};

const OPENING_KEYWORD = "오픈 준비중";

export function isOpeningSoonAddress(address: string) {
  return address.includes(OPENING_KEYWORD);
}

export function buildKakaoMapSearchLink(query: string) {
  return `https://map.kakao.com/link/search/${encodeURIComponent(query)}`;
}

export async function geocodeAddressWithKakao(address: string): Promise<GeocodedPoint | null> {
  const restApiKey = process.env.KAKAO_REST_API_KEY;

  if (!restApiKey) {
    return null;
  }

  const endpoint = new URL("https://dapi.kakao.com/v2/local/search/address.json");
  endpoint.searchParams.set("query", address);

  const response = await fetch(endpoint.toString(), {
    headers: {
      Authorization: `KakaoAK ${restApiKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    documents?: Array<{ x?: string; y?: string }>;
  };

  const first = data.documents?.[0];
  const longitude = Number(first?.x);
  const latitude = Number(first?.y);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }

  return { latitude, longitude };
}
