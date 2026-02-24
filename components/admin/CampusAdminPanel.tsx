"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import KakaoMap from "@/components/KakaoMap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Campus, CampusRegion, CampusType } from "@/lib/campuses";

type CampusFormState = {
  name: string;
  type: CampusType;
  region: CampusRegion;
  district: string;
  address: string;
  phone: string;
  href: string;
};

const initialForm: CampusFormState = {
  name: "",
  type: "pca",
  region: "서울",
  district: "",
  address: "",
  phone: "",
  href: "",
};

export default function CampusAdminPanel() {
  const [form, setForm] = useState<CampusFormState>(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedCampusId, setSelectedCampusId] = useState<number | null>(null);
  const [campuses, setCampuses] = useState<Campus[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formSectionRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, offset = 110) => {
    const element = ref.current;
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const loadCampuses = async () => {
    const response = await fetch("/api/campuses", { cache: "no-store" });
    const data = (await response.json()) as Campus[];
    setCampuses(data);
  };

  useEffect(() => {
    loadCampuses();
  }, []);

  useEffect(() => {
    if (campuses.length === 0) {
      setSelectedCampusId(null);
      return;
    }

    if (selectedCampusId && campuses.some((campus) => campus.id === selectedCampusId)) {
      return;
    }

    setSelectedCampusId(campuses[0].id);
  }, [campuses, selectedCampusId]);

  const mapCampuses = useMemo(
    () =>
      campuses.map((campus) => ({
        id: campus.id,
        title: campus.name,
        address: campus.address,
        latitude: campus.latitude,
        longitude: campus.longitude,
      })),
    [campuses]
  );

  const updateField = <K extends keyof CampusFormState>(key: K, value: CampusFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateRequired = () => {
    return form.name.trim() && form.district.trim() && form.address.trim() && form.phone.trim();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateRequired()) {
      setMessage("필수 항목을 모두 입력해주세요.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const isEditMode = editingId !== null;
      const response = await fetch(isEditMode ? `/api/campuses/${editingId}` : "/api/campuses", {
        method: isEditMode ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "요청에 실패했습니다.");
      }

      setForm(initialForm);
      setEditingId(null);
      setMessage(isEditMode ? "캠퍼스 정보가 수정되었습니다." : "캠퍼스가 등록되었습니다.");
      await loadCampuses();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (campus: Campus) => {
    setEditingId(campus.id);
    setSelectedCampusId(campus.id);
    setForm({
      name: campus.name,
      type: campus.type,
      region: campus.region,
      district: campus.district,
      address: campus.address,
      phone: campus.phone,
      href: campus.href,
    });
    setMessage("");
    const adminTop = document.getElementById("campus-admin-top");
    if (adminTop) {
      const top = adminTop.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    scrollToSection(formSectionRef, 220);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(initialForm);
    setMessage("수정을 취소했습니다.");
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("이 캠퍼스를 삭제할까요?");
    if (!ok) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/campuses/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "삭제에 실패했습니다.");
      }

      if (editingId === id) {
        setEditingId(null);
        setForm(initialForm);
      }

      if (selectedCampusId === id) {
        setSelectedCampusId(null);
      }

      setMessage("캠퍼스가 삭제되었습니다.");
      await loadCampuses();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "삭제 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const focusCampusOnMap = (id: number) => {
    setSelectedCampusId(id);
    scrollToSection(mapSectionRef, 140);
  };

  return (
    <div className="space-y-6">
      <div ref={formSectionRef}>
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "캠퍼스 수정" : "캠퍼스 등록"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              placeholder="캠퍼스명"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <Select value={form.type} onValueChange={(value) => updateField("type", value as CampusType)}>
                <SelectTrigger>
                  <SelectValue placeholder="캠퍼스 유형" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pca">PCA 캠퍼스</SelectItem>
                  <SelectItem value="junior">PCA 주니어</SelectItem>
                </SelectContent>
              </Select>

              <Select value={form.region} onValueChange={(value) => updateField("region", value as CampusRegion)}>
                <SelectTrigger>
                  <SelectValue placeholder="지역" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="서울">서울</SelectItem>
                  <SelectItem value="경기">경기</SelectItem>
                  <SelectItem value="인천">인천</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                placeholder="상세 지역 (예: 강남구)"
                value={form.district}
                onChange={(e) => updateField("district", e.target.value)}
              />
              <Input
                placeholder="전화번호"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>

            <Input
              placeholder="주소"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
            />

            <Input
              placeholder="링크 URL (선택, 비우면 주소 기반으로 자동 생성)"
              value={form.href}
              onChange={(e) => updateField("href", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              실제 주소를 입력하면 저장 시 좌표를 자동으로 찾아 지도에 표시됩니다.
            </p>

            <div className="flex items-center gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? "처리 중..." : editingId ? "캠퍼스 수정" : "캠퍼스 등록"}
              </Button>
              {editingId ? (
                <Button type="button" variant="outline" onClick={cancelEdit} disabled={loading}>
                  취소
                </Button>
              ) : null}
            </div>

              {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
            </form>
          </CardContent>
        </Card>
      </div>

      <div ref={mapSectionRef}>
        <Card>
        <CardHeader>
          <CardTitle>캠퍼스 지도 미리보기</CardTitle>
        </CardHeader>
        <CardContent>
          <KakaoMap className="h-[360px] w-full" campuses={mapCampuses} selectedCampusId={selectedCampusId} />
          <p className="mt-3 text-xs text-muted-foreground">
            등록된 캠퍼스를 지도에서 바로 확인할 수 있습니다. 목록의 "지도 보기"를 누르면 해당 위치로 이동합니다.
          </p>
        </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>등록된 캠퍼스</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y rounded-md border">
            {campuses.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">등록된 캠퍼스가 없습니다.</p>
            ) : (
              campuses.map((campus) => (
                <div key={campus.id} className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-medium">{campus.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {campus.region} · {campus.district} · {campus.type === "pca" ? "PCA 캠퍼스" : "PCA 주니어"}
                    </p>
                    <p className="text-sm text-muted-foreground">{campus.phone}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => focusCampusOnMap(campus.id)}
                      disabled={loading}
                    >
                      지도 보기
                    </Button>
                    <Button type="button" variant="outline" size="sm" onClick={() => startEdit(campus)} disabled={loading}>
                      수정
                    </Button>
                    <Button type="button" variant="destructive" size="sm" onClick={() => handleDelete(campus.id)} disabled={loading}>
                      삭제
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
