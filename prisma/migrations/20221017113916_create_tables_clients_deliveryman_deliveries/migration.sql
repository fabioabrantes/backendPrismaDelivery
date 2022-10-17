-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_name" TEXT NOT NULL,
    "id_fk_client" TEXT NOT NULL,
    "id_fk_deliveryman" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    CONSTRAINT "deliveries_id_fk_client_fkey" FOREIGN KEY ("id_fk_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_id_fk_deliveryman_fkey" FOREIGN KEY ("id_fk_deliveryman") REFERENCES "deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "deliveries_item_name_key" ON "deliveries"("item_name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");
