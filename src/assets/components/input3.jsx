import * as React from "react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en-gb";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";

export default function Input() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState("debit");

  const [alignment, setAlignment] = React.useState("debit");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = document.getElementById("amount-input").value;
    const reason = document.getElementById("expense-reason").value;
    const expenseType = alignment;
    const date = value.format("L");

    console.log(amount, reason, expenseType, date);
    handleFormClose(event);
  };

  const handleFormClose = (event) => {
    setValue("debit");
    setAlignment("debit");
    document.getElementById("amount-input").value = "";
    document.getElementById("expense-reason").value = "";
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Expense
      </Button>
      <Dialog open={open} onClose={handleFormClose}>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Expense Type"
            defaultChecked="debit"
            fullWidth
            margin="normal"
          >
            <ToggleButton value="debit">Debit</ToggleButton>
            <ToggleButton value="credit">Credit</ToggleButton>
          </ToggleButtonGroup>

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="amount-input">Amount</InputLabel>
            <OutlinedInput
              id="amount-input"
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "full" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="expense-reason"
              label="Reason"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Stack sx={{ m: 1, width: "full" }}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en-gb"
            >
              <DatePicker
                id="date-picker"
                onChange={(newValue) => setValue(newValue)}
                aria-label="change date"
                //   value={value}
                //   fullWidth
                //   renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" value="cancel" onClick={handleFormClose}>
              Cancel
            </Button>
            <Button variant="contained" value="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
          {/* <Button onClick={handleFormClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
