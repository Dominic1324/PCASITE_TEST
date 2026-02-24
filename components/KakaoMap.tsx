"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CAMPUS_POSITION = {
	lat: 37.4983065,
	lng: 127.0536199,
	title: "PCA 강남대치캠퍼스",
};

declare global {
	interface Window {
		kakao?: {
			maps: {
				load: (callback: () => void) => void;
				LatLng: new (lat: number, lng: number) => any;
				LatLngBounds: new () => {
					extend: (position: any) => void;
				};
				Map: new (container: HTMLElement, options: { center: any; level: number }) => {
					setCenter: (position: any) => void;
					setBounds: (bounds: any) => void;
				};
				Marker: new (options: { position: any }) => { setMap: (map: any) => void };
				CustomOverlay: new (options: { position: any; content: HTMLElement | string; yAnchor?: number }) => { setMap: (map: any) => void };
				services?: {
					Status: {
						OK: string;
					};
					Geocoder: new () => {
						addressSearch: (
							address: string,
							callback: (result: Array<{ x: string; y: string }>, status: string) => void
						) => void;
					};
				};
			};
		};
	}
}

type CampusMarker = {
	id: number;
	title: string;
	address: string;
	latitude?: number;
	longitude?: number;
};

type KakaoMapProps = {
	className?: string;
	zoomLevel?: number;
	campuses?: CampusMarker[];
	selectedCampusId?: number | null;
};

export default function KakaoMap({ className, zoomLevel = 3, campuses, selectedCampusId = null }: KakaoMapProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scriptReady, setScriptReady] = useState(false);
	const [scriptError, setScriptError] = useState(false);
	const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

	useEffect(() => {
		if (window.kakao?.maps) {
			setScriptReady(true);
		}
	}, []);

	useEffect(() => {
		if (!scriptReady || !window.kakao || !containerRef.current) {
			return;
		}

		const kakao = window.kakao;
		if (!kakao) {
			return;
		}

		const container = containerRef.current;
		let cancelled = false;

		kakao.maps.load(() => {
			const renderDefaultMap = () => {
				const center = new kakao.maps.LatLng(CAMPUS_POSITION.lat, CAMPUS_POSITION.lng);
				const map = new kakao.maps.Map(container, {
					center,
					level: zoomLevel,
				});

				const marker = new kakao.maps.Marker({
					position: center,
				});
				marker.setMap(map);

				const label = document.createElement("div");
				label.textContent = CAMPUS_POSITION.title;
				label.style.padding = "6px 12px";
				label.style.borderRadius = "9999px";
				label.style.background = "#ffffff";
				label.style.color = "#0f172a";
				label.style.fontSize = "12px";
				label.style.fontWeight = "600";
				label.style.boxShadow = "0 12px 32px rgba(15, 23, 42, 0.2)";

				const overlay = new kakao.maps.CustomOverlay({
					position: center,
					content: label,
					yAnchor: 1.4,
				});
				overlay.setMap(map);
			};

			if (!campuses || campuses.length === 0) {
				renderDefaultMap();
				return;
			}

			const baseCenter = new kakao.maps.LatLng(CAMPUS_POSITION.lat, CAMPUS_POSITION.lng);
			const map = new kakao.maps.Map(container, {
				center: baseCenter,
				level: zoomLevel,
			});

			const geocoder = kakao.maps.services ? new kakao.maps.services.Geocoder() : null;

			const resolveCampusPosition = async (campus: CampusMarker) => {
				if (typeof campus.latitude === "number" && typeof campus.longitude === "number") {
					return {
						...campus,
						position: new kakao.maps.LatLng(campus.latitude, campus.longitude),
					};
				}

				if (!geocoder) {
					return null;
				}

				return await new Promise<(CampusMarker & { position: any }) | null>((resolve) => {
					geocoder.addressSearch(campus.address, (result, status) => {
						if (status !== kakao.maps.services?.Status.OK || !result[0]) {
							resolve(null);
							return;
						}

						const latitude = Number(result[0].y);
						const longitude = Number(result[0].x);
						if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
							resolve(null);
							return;
						}

						resolve({
							...campus,
							latitude,
							longitude,
							position: new kakao.maps.LatLng(latitude, longitude),
						});
					});
				});
			};

			void (async () => {
				const resolved = (await Promise.all(campuses.map(resolveCampusPosition))).filter(Boolean) as Array<
					CampusMarker & { position: any }
				>;

				if (cancelled || resolved.length === 0) {
					return;
				}

				const bounds = new kakao.maps.LatLngBounds();
				resolved.forEach((campus) => {
					const marker = new kakao.maps.Marker({
						position: campus.position,
					});
					marker.setMap(map);

					const label = document.createElement("div");
					label.textContent = campus.title;
					label.style.padding = "6px 12px";
					label.style.borderRadius = "9999px";
					label.style.background = "#ffffff";
					label.style.color = "#0f172a";
					label.style.fontSize = "12px";
					label.style.fontWeight = "600";
					label.style.boxShadow = "0 12px 32px rgba(15, 23, 42, 0.2)";

					const overlay = new kakao.maps.CustomOverlay({
						position: campus.position,
						content: label,
						yAnchor: 1.4,
					});
					overlay.setMap(map);
					bounds.extend(campus.position);
				});

				const selected = selectedCampusId
					? resolved.find((campus) => campus.id === selectedCampusId)
					: null;

				if (selected) {
					map.setCenter(selected.position);
					return;
				}

				map.setBounds(bounds);
			})();
		});

		return () => {
			cancelled = true;
			container.innerHTML = "";
		};
	}, [campuses, scriptReady, selectedCampusId, zoomLevel]);

	if (!kakaoKey) {
		return (
			<div className={cn("flex h-64 w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 text-center text-sm text-white/80", className)}>
				카카오 지도 키(NEXT_PUBLIC_KAKAO_MAP_KEY)를 설정하면 실시간 지도를 볼 수 있어요.
			</div>
		);
	}

	if (scriptError) {
		return (
			<div className={cn("flex h-64 w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 px-5 text-center text-sm text-white/80", className)}>
				지도 SDK 로드에 실패했어요. 카카오 개발자 콘솔에서 Web 플랫폼에
				<br />
				http://localhost:3000 도메인이 등록되어 있는지 확인해주세요.
			</div>
		);
	}

	return (
		<>
			<Script
				src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false&libraries=services`}
				strategy="afterInteractive"
				onLoad={() => setScriptReady(true)}
				onReady={() => setScriptReady(true)}
				onError={() => setScriptError(true)}
			/>
			<div ref={containerRef} className={cn("h-64 w-full rounded-2xl bg-slate-900/40", className)} />
		</>
	);
}
