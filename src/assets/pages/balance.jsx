import { Box, Divider, Stack } from "@mui/material";
import React from "react";

function Balance() {
  return (
    <div>
      {/* <div><h1 className="text-2xl">Balance Page</h1></div> */}
      <div className="flex justify-center">
        <Box
          sx={{
            width: 400,
            height: 400,
            bgcolor: "background.paper",
            boxShadow: 1,
            p: 5,
            m: 1,
            mt: 10,
            borderRadius: 5,
            textAlignLast: "center",
            alignItems: "center",
          }}
        >
          <div className="m-5">
            <h2 className="text-3xl font-mono font-bold">Total Balance</h2>
            <h1 className="text-5xl font-bold">₹ 0.00</h1>
          </div>
          <Stack
            direction="row"
            spacing="auto"
            divider={<Divider orientation="vertical" flexItem />}
            margin={2}
            marginTop={8}
          >
            <div>
              <h2 className="text-3xl font-mono font-bold">Cash</h2>
              <h1 className="text-3xl font-bold">₹ 0.00</h1>
            </div>
            <div>
              <h2 className="text-3xl font-mono font-bold">Bank</h2>
              <h1 className="text-3xl font-bold">₹ 0.00</h1>
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Balance;
