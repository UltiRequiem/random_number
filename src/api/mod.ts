import { serve, Status, STATUS_TEXT } from "./api_deps.ts";

import { randomNumber, randomNumberList } from "../core/mod.ts";

function handler(request: Request): Response {
  const { pathname } = new URL(request.url);

  const data: {
    body?: string;
    headers: Record<string, string>;
    status: number;
  } = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Method": "*",
      "Access-Control-Allow-Methods": "OPTIONS, GET",
      "Access-Control-Allow-Headers": "*",
    },
    status: Status.OK,
  };

  switch (pathname) {
    case "/":
      data.body = `${randomNumber()}`;
      break;
    case "/decimal":
      data.body = `${randomNumber({ integer: false })}`;
      break;
    case "/list":
      data.body = `[${randomNumberList(10)}]`;
      break;
    case "/decimal/list":
      data.body = `[${randomNumberList(10, { integer: false })}]`;
      break;
    default:
      data.status = Status.NotFound;
  }

  return new Response(data.body ?? STATUS_TEXT.get(data.status), {
    headers: data.headers,
    status: data.status,
    statusText: STATUS_TEXT.get(data.status),
  });
}

serve(handler);
