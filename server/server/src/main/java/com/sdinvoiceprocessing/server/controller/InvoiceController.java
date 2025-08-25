package com.sdinvoiceprocessing.server.controller;
import com.sdinvoiceprocessing.server.model.Invoice;
import com.sdinvoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice) {
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices(){
        return this.invoiceService.getInvoices()
                .stream()
                .filter(inv -> "Pending".equalsIgnoreCase(inv.getAction()))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }
    //Add this inside InvoiceController class
    @PutMapping("/invoice/{invoiceId}/Done")
    public Invoice markDone(@PathVariable long invoiceId) {
        Invoice invoice = invoiceService.getInvoices().stream()
        .filter(inv -> inv.getId() == invoiceId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Invoice not found"));

        invoice.setAction("Done");  // mark as done
        return invoiceService.addInvoice(invoice); // save updated invoice
    }
}
