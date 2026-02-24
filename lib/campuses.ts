import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export type CampusType = "pca" | "junior";
export type CampusRegion = "서울" | "경기" | "인천";

export type Campus = {
  id: number;
  name: string;
  type: CampusType;
  region: CampusRegion;
  district: string;
  address: string;
  phone: string;
  href: string;
  latitude?: number;
  longitude?: number;
};

type CreateCampusInput = Omit<Campus, "id">;
type UpdateCampusInput = Partial<Omit<Campus, "id">>;

const campusesFilePath = path.join(process.cwd(), "data", "campuses.json");

export async function getCampuses(): Promise<Campus[]> {
  const raw = await fs.readFile(campusesFilePath, "utf-8");
  const parsed = JSON.parse(raw) as Campus[];
  return parsed.sort((a, b) => a.id - b.id);
}

async function saveCampuses(campuses: Campus[]) {
  await fs.writeFile(campusesFilePath, JSON.stringify(campuses, null, 2), "utf-8");
}

export async function createCampus(input: CreateCampusInput): Promise<Campus> {
  const campuses = await getCampuses();
  const nextId = campuses.length > 0 ? Math.max(...campuses.map((c) => c.id)) + 1 : 1;

  const newCampus: Campus = {
    id: nextId,
    name: input.name.trim(),
    type: input.type,
    region: input.region,
    district: input.district.trim(),
    address: input.address.trim(),
    phone: input.phone.trim(),
    href: input.href.trim(),
    latitude: typeof input.latitude === "number" ? input.latitude : undefined,
    longitude: typeof input.longitude === "number" ? input.longitude : undefined,
  };

  await saveCampuses([...campuses, newCampus]);
  revalidatePath("/campus");

  return newCampus;
}

export async function updateCampus(id: number, input: UpdateCampusInput): Promise<Campus | null> {
  const campuses = await getCampuses();
  const index = campuses.findIndex((campus) => campus.id === id);

  if (index < 0) {
    return null;
  }

  const target = campuses[index];
  const updated: Campus = {
    ...target,
    name: input.name !== undefined ? input.name.trim() : target.name,
    type: input.type ?? target.type,
    region: input.region ?? target.region,
    district: input.district !== undefined ? input.district.trim() : target.district,
    address: input.address !== undefined ? input.address.trim() : target.address,
    phone: input.phone !== undefined ? input.phone.trim() : target.phone,
    href: input.href !== undefined ? input.href.trim() : target.href,
    latitude: input.latitude !== undefined ? input.latitude : target.latitude,
    longitude: input.longitude !== undefined ? input.longitude : target.longitude,
  };

  campuses[index] = updated;
  await saveCampuses(campuses);
  revalidatePath("/campus");

  return updated;
}

export async function deleteCampus(id: number): Promise<boolean> {
  const campuses = await getCampuses();
  const filtered = campuses.filter((campus) => campus.id !== id);

  if (filtered.length === campuses.length) {
    return false;
  }

  await saveCampuses(filtered);
  revalidatePath("/campus");

  return true;
}
