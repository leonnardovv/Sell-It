import client from "./client";

const endpoint = "/messages";

const send = (message, listingId) =>
  client.post("/messages", { message, listingId });
export default {
  send,
};
