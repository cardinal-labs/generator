/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */
import { getMetadata } from "./generator";

module.exports.generate = async (event) => {
  const json = await getMetadata(
    event.pathParameters && event.pathParameters.mintId,
    event.queryStringParameters && event.queryStringParameters.uri,
    event.queryStringParameters && event.queryStringParameters.text,
    event.queryStringParameters && event.queryStringParameters.img,
    event.queryStringParameters && event.queryStringParameters.attrs,
    event.queryStringParameters && event.queryStringParameters.cluster
  );

  const response = {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(json),
  };
  return response;
};
