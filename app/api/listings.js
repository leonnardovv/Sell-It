import client from "./client";

// this logic should be hidden from our components and should be encapsulated in this API Layer

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  //Header content-type -> when we send a json obj to the server the content type is automatically set to application/json
  //For aploading files or images we have to use a special content type called multipart/form-data because this is a large request
  //and the body of this request is divided in multiple parts
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image, //this image is a string that represents the uri of an image on a users's device
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location)); //for the value we have to serielize the location object as a string

  // Parent > Child -> raising event

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  }); //this returns a promise
};

export default {
  getListings,
  addListing,
};
