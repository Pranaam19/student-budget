import React, { useState } from "react";
// import { useAuth } from "../firebase/auth";
// import DateComponent from "./date";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Stack,
} from "@mui/material";
import { addReceipt } from "../firebase/firestore";

function ExpenseInput(props) {
  const [open, setOpen] = useState(false);
  const [expense, setExpense] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleExpenseChange = (event) => {
  //     setExpense(event.target.value);
  //   };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // try{
    //    await addReceipt({ formFields.date});
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Expense
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="row-radio-buttons-group-label">Expense</FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              defaultValue="credit"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="credit"
                control={<Radio />}
                label="Credit"
              />
              <FormControlLabel
                value="debit"
                control={<Radio />}
                label="Debit"
              />
            </RadioGroup>
          </FormControl>
          {/* <FormControl> */}
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
            margin="normal"
          />
          {/* </FormControl> */}
          {/* <FormControl> */}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Reason"
            variant="outlined"
            margin="normal"
          />
          {/* </FormControl> */}
          <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                // value={formFields.date}
                // onChange={(newDate) => {
                //   setFormFields((prevState) => ({
                // ...prevState,
                // date: newDate,
                //   }));
                // }}
                // maxDate={new Date()}
                // renderInput={(params) => (
                //   <TextField color="tertiary" {...params} />
                // {/* )} */}
              />
            </LocalizationProvider>
          </Stack>
        </DialogContent>

        {/* <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Expense"
            type="text"
            fullWidth
            value={expense}
            onChange={handleExpenseChange}
          />
        </DialogContent> */}

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ExpenseInput;
