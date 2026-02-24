"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Phone } from "lucide-react";
import KakaoMap from "@/components/KakaoMap";
import PageBanner from "@/components/common/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Campus, CampusRegion, CampusType } from "@/lib/campuses";

const defaultDetailOptions = [{ label: "전체", value: "all" }];

export default function CampusDirectory() {
  const [campuses, setCampuses] = useState<Campus[]>([]);
  const [loadingCampuses, setLoadingCampuses] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | CampusType>("all");
  const [region, setRegion] = useState<"all" | CampusRegion>("all");
  const [detail, setDetail] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [selectedCampusId, setSelectedCampusId] = useState<number | null>(null);

  useEffect(() => {
    const loadCampuses = async () => {
      try {
        const response = await fetch("/api/campuses", { cache: "no-store" });
        const data = (await response.json()) as Campus[];
        setCampuses(data);
      } finally {
        setLoadingCampuses(false);
      }
    };

    loadCampuses();
  }, []);

  const detailOptions = useMemo(() => {
    const uniqueDistricts = Array.from(new Set(campuses.map((campus) => campus.district))).sort();
    return [
      ...defaultDetailOptions,
      ...uniqueDistricts.map((district) => ({ label: district, value: district })),
    ];
  }, [campuses]);

  const filteredCampuses = useMemo(() => {
    return campuses.filter((campus) => {
      const tabMatch = activeTab === "all" || campus.type === activeTab;
      const regionMatch = region === "all" || campus.region === region;
      const detailMatch = detail === "all" || campus.district === detail;
      const keywordMatch =
        keyword.trim().length === 0 ||
        [campus.name, campus.address, campus.district]
          .join(" ")
          .toLowerCase()
          .includes(keyword.toLowerCase());

      return tabMatch && regionMatch && detailMatch && keywordMatch;
    });
  }, [activeTab, campuses, detail, keyword, region]);

  useEffect(() => {
    if (filteredCampuses.length === 0) {
      setSelectedCampusId(null);
      return;
    }

    if (selectedCampusId && filteredCampuses.some((campus) => campus.id === selectedCampusId)) {
      return;
    }

    setSelectedCampusId(filteredCampuses[0].id);
  }, [filteredCampuses, selectedCampusId]);

  const mapCampuses = useMemo(
    () =>
      filteredCampuses.map((campus) => ({
        id: campus.id,
        title: campus.name,
        address: campus.address,
        latitude: campus.latitude,
        longitude: campus.longitude,
      })),
    [filteredCampuses]
  );

  return (
    <main className="bg-background pb-20">
      <PageBanner title="CAMPUS" />

      <section className="container mx-auto mt-6 max-w-6xl px-4 md:mt-8 md:px-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm md:p-6">
          <div className="grid gap-3 md:grid-cols-3">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-md px-4 py-3 text-sm font-semibold transition md:text-base ${activeTab === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              전체
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("pca")}
              className={`rounded-md px-4 py-3 text-sm font-semibold transition md:text-base ${activeTab === "pca" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              PCA 캠퍼스
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("junior")}
              className={`rounded-md px-4 py-3 text-sm font-semibold transition md:text-base ${activeTab === "junior" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              PCA 주니어
            </button>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-[180px,180px,1fr,52px]">
            <Select value={region} onValueChange={(value) => setRegion(value as typeof region)}>
              <SelectTrigger>
                <SelectValue placeholder="지역 검색" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">지역 검색</SelectItem>
                <SelectItem value="서울">서울</SelectItem>
                <SelectItem value="경기">경기</SelectItem>
                <SelectItem value="인천">인천</SelectItem>
              </SelectContent>
            </Select>

            <Select value={detail} onValueChange={setDetail}>
              <SelectTrigger>
                <SelectValue placeholder="상세 검색" />
              </SelectTrigger>
              <SelectContent>
                {detailOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />

            <Button type="button" size="icon" aria-label="검색">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 max-w-6xl px-4 md:px-6">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[2fr,1fr]">
          <div className="border-b border-slate-200 p-3 lg:border-b-0 lg:border-r">
            <KakaoMap
              className="h-[420px] w-full rounded-xl md:h-[520px]"
              campuses={mapCampuses}
              selectedCampusId={selectedCampusId}
            />
          </div>

          <div className="max-h-[520px] overflow-y-auto">
            {loadingCampuses ? (
              <p className="p-6 text-sm text-slate-500">캠퍼스 목록을 불러오는 중입니다.</p>
            ) : filteredCampuses.length === 0 ? (
              <p className="p-6 text-sm text-slate-500">검색 조건에 맞는 캠퍼스가 없습니다.</p>
            ) : (
              filteredCampuses.map((campus) => (
                <div
                  key={campus.id}
                  className={`border-b border-slate-200 p-5 last:border-b-0 transition-colors ${selectedCampusId === campus.id ? "bg-slate-50" : ""}`}
                >
                  <p className="text-lg font-semibold text-slate-900">{campus.name}</p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <span>{campus.address}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4" />
                    <span>{campus.phone}</span>
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button type="button" variant="secondary" onClick={() => setSelectedCampusId(campus.id)}>
                      지도에서 위치 보기
                    </Button>
                    <Button asChild variant="outline">
                      <Link
                        href={campus.href}
                        target={campus.href.startsWith("http") ? "_blank" : undefined}
                        rel={campus.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {campus.href.startsWith("http") ? "카카오맵 열기" : "문의하기"}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
