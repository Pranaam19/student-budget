import React, { useState } from "react";
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
} from "@mui/material";

function ExpenseInput(props) {
  const [open, setOpen] = useState(false);
  const [expense, setExpense] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.onSave(expense);
    setExpense("");
    handleClose();
  };

  const handleExpenseChange = (event) => {
    setExpense(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Expense
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          {/* <FormControl> */}
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
            <FormControlLabel value="debit" control={<Radio />} label="Debit" />
          </RadioGroup>
          {/* </FormControl> */}
          {/* <FormControl> */}
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
          {/* </FormControl> */}
          {/* <FormControl> */}
          <TextField id="outlined-basic" label="Reason" variant="outlined" />
          {/* </FormControl> */}
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
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ExpenseInput;
