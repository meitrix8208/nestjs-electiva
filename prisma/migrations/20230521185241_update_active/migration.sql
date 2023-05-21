-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "identification" INTEGER NOT NULL,
    "picture" TEXT,
    "phone" TEXT,
    "birthday" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "address" TEXT,
    "active" BOOLEAN DEFAULT true
);
INSERT INTO "new_User" ("active", "address", "birthday", "city", "country", "email", "id", "identification", "lastname", "name", "password", "phone", "picture", "state") SELECT "active", "address", "birthday", "city", "country", "email", "id", "identification", "lastname", "name", "password", "phone", "picture", "state" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_identification_key" ON "User"("identification");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
