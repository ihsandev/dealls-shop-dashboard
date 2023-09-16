"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import React from "react";

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(() => new QueryClient());

  return <Provider client={client}>{children}</Provider>;
};

export default QueryClientProvider;
