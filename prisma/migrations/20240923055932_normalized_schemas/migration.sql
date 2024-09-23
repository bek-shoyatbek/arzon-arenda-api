-- CreateTable
CREATE TABLE "RentalRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "homePrice" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "homeId" INTEGER NOT NULL,
    CONSTRAINT "RentalRequest_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "Home" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Home" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "homeType" TEXT NOT NULL,
    "rooms" INTEGER NOT NULL,
    "square" REAL NOT NULL,
    "floor" INTEGER NOT NULL,
    "totalFloors" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "locationAddress" TEXT NOT NULL,
    "locationLatitude" REAL NOT NULL,
    "locationLongitude" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Amenity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uri" TEXT NOT NULL,
    "rentalRequestId" INTEGER NOT NULL,
    CONSTRAINT "Image_rentalRequestId_fkey" FOREIGN KEY ("rentalRequestId") REFERENCES "RentalRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AmenityToRentalRequest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AmenityToRentalRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AmenityToRentalRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "RentalRequest" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_name_key" ON "Amenity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AmenityToRentalRequest_AB_unique" ON "_AmenityToRentalRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_AmenityToRentalRequest_B_index" ON "_AmenityToRentalRequest"("B");
