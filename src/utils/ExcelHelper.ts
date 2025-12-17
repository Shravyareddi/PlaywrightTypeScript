import * as XLSX from "xlsx";

export function readExcel(filePath: string) {
  const sheet = XLSX.readFile(filePath).Sheets["Sheet1"];
  return XLSX.utils.sheet_to_json(sheet);
}