-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_name" TEXT NOT NULL,
    "id_fk_client" TEXT NOT NULL,
    "id_fk_deliveryman" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    CONSTRAINT "deliveries_id_fk_client_fkey" FOREIGN KEY ("id_fk_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_id_fk_deliveryman_fkey" FOREIGN KEY ("id_fk_deliveryman") REFERENCES "deliveryman" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("created_at", "end_at", "id", "id_fk_client", "id_fk_deliveryman", "item_name") SELECT "created_at", "end_at", "id", "id_fk_client", "id_fk_deliveryman", "item_name" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
CREATE UNIQUE INDEX "deliveries_item_name_key" ON "deliveries"("item_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
