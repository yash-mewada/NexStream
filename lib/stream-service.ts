import { db } from "./db";

export const getStreamByUserId = async (userId: string) => {
  const stream = await db.stream.findUnique({
    where: { userId },
  });

  return stream;
};
