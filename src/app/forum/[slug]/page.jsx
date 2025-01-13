import React from "react";

export default async function ({ params }) {
  const slug = await params.slug;
  return <div>{slug}</div>;
}
