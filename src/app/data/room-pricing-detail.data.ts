/** Bang gia day du theo hang phong (VND). Khoa trung RoomClass trong room.state. */

export interface RoomPricingRow {
  label: string;
  /** Nghi gio: niem yet, T2-T6 8h-18h, T2-T6 18h-8h, T7 CN dat truoc, T7 CN truc tiep */
  hourly: [number, number, number, number, number];
  /** Qua dem: niem yet, T2-T6, T7 dat truoc, T7 truc tiep */
  overnight: [number, number, number, number];
  /** Nghi ngay: niem yet, duoi 5 ngay, 5-15 ngay, tren 15 ngay */
  daily: [number, number, number, number];
}

const S_ROW: RoomPricingRow = {
  label: 'S (50shade)',
  hourly: [1_000_000, 568_000, 700_000, 700_000, 850_000],
  overnight: [1_800_000, 1_090_000, 1_090_000, 1_299_000],
  daily: [2_800_000, 2_000_000, 1_800_000, 1_700_000],
};

const E_ROW: RoomPricingRow = {
  label: 'E (Playboy, BlackPink, Sakura)',
  hourly: [650_000, 368_000, 450_000, 450_000, 552_000],
  overnight: [1_200_000, 888_000, 888_000, 999_000],
  daily: [1_800_000, 1_300_000, 1_170_000, 1_105_000],
};

const DELUXE_ROW: RoomPricingRow = {
  label: 'Deluxe (301, 401, 501, 601, 701, 801)',
  hourly: [450_000, 268_000, 350_000, 350_000, 382_000],
  overnight: [850_000, 699_000, 699_000, 789_000],
  daily: [1_400_000, 1_180_000, 1_062_000, 1_003_000],
};

const SUPERIOR_ROW: RoomPricingRow = {
  label: 'Superior',
  hourly: [380_000, 222_000, 300_000, 300_000, 323_000],
  overnight: [650_000, 650_000, 650_000, 699_000],
  daily: [1_400_000, 950_000, 855_000, 808_000],
};

const BY_CLASS: Record<string, RoomPricingRow> = {
  SuperiorRoom: SUPERIOR_ROW,
  DeluxeRoom: DELUXE_ROW,
  SClassRoom: S_ROW,
  EClassRoom: E_ROW,
};

export function getRoomPricingRow(roomClass: string | undefined): RoomPricingRow | null {
  if (!roomClass) {
    return null;
  }
  return BY_CLASS[roomClass] ?? null;
}
