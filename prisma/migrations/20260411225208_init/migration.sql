-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticker" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "direction" TEXT,
    "entry" REAL,
    "exit" REAL,
    "stop" REAL,
    "target" REAL,
    "size" REAL,
    "timeframe" TEXT,
    "setup" TEXT,
    "emotion" TEXT,
    "notes" TEXT,
    "screenshotUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
