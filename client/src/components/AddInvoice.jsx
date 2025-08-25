import {useState} from "react";
import {Box, Typography, TextField, Button, styled} from "@mui/material";
import {saveInvoice} from "../services/api";
const Component = styled(Box)({
    marginTop: 20,
    '$ >p': {
        fontSize: 26,
        marginBottom: 10,
    },
    '& > div > div': {
        marginRight: 20,
        minWidth:200,
    }
})

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'Pending'
}
const AddInvoice = ({setAddInvoice}) => {
    const[invoice, setInvoice] = useState(defaultObj);


    const onvolumechangee = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value});
    }

    const addNewInvoice = async () => {
        await saveInvoice({...invoice, amount: Number(invoice['amount']) });

        setAddInvoice(false);
    }
    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <box>
                <TextField
                    variant="standard" 
                    placeholder="Enter vendor name"
                    onChange={onvolumechangee}
                    name="vendor"
                    autoComplete='off'
                />
                <TextField
                    variant="standard" 
                    placeholder="Enter product name"
                    onChange={onvolumechangee}
                    name="product"
                    autoComplete='off'
                />
                <TextField
                    variant="standard" 
                    placeholder="Enter amount (In Rs.)"
                    type="number"
                    onChange={onvolumechangee}
                    name="amount"
                    autoComplete='off'

                />
                <TextField
                    variant="standard" 
                    placeholder="Enter Date (DD/MM/YYYY)"
                    type="date"
                    onChange={onvolumechangee}
                    name="date"
                    autoComplete='off'
                />
                <Button 
                    variant="contained"
                    style={{marginLeft: 20}}
                    onClick={addNewInvoice}>
                    Add Invoice
                </Button>
            </box>
        </Component>
    );
}

export default AddInvoice;