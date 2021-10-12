import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SavDialog = (props) => {
  const [custom, setCustom] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    props.onClose(false);
  };

  //   const handleData = (e) => {
  //     e.preventDefault();
  //     console.log(custom, amount);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(custom, amount);
    setLoading(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, custom, amount)
      .then(() => {
        updateProfile(auth.currentUser, { data: custom, amount })
          .then(() => "")
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false), setCustom(""), setAmount(""));
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle> {loading ? "Please Wait ..." : "Save resum"}</DialogTitle>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <TextField
              name="customer"
              label="Customer"
              fullWidth={true}
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
            />
            <TextField
              name="amount"
              label="Amount"
              fullWidth={true}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default SavDialog;
