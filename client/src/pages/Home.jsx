
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {Box, Typography, Button} from "@mui/material";
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices";
import {getAllInvoice} from "../services/api";
import { markInvoiceDone } from "../services/api";

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const response = await getAllInvoice();
            // keep only pending invoices
            const pendingInvoices = response.data.filter(inv => inv.action === "Pending");
            setInvoices(pendingInvoices);
        
        }
        getData();
    }, [addInvoice])
    
    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    const removeInvoice = async(id) => {
       await markInvoiceDone(id); // mark as done in DB
       setInvoices(prev => prev.filter(invoice => invoice.id !== id)); // remove from pending list

       const updatedInvoice = invoices.filter(invoice => invoice.id !== id);
       setInvoices(updatedInvoice);

    }

    return (
        <>
            <Header/>
            <Box style={{margin: 20}}>
                <Typography variant="h4">Pending Invoices</Typography>
                { !addInvoice && <Button 
                        variant="contained"  
                        style={{marginTop: 15}}
                        onClick={() => toggleInvoice()}
                    >Add Invoice</Button>
                }
                { addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/>}
                <Box style={{marginTop: 20}}>
                    <Invoices 
                        invoices={invoices}
                        removeInvoice={removeInvoice}
                    />
                </Box>
            </Box>
        </>
 
    )
}

export default Home;