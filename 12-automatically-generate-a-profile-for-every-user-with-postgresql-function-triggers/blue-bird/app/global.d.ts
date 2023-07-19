import { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
}
