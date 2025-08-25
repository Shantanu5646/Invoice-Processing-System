package com.sdinvoiceprocessing.server.services;

import com.sdinvoiceprocessing.server.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);

    Invoice markDone(long id);
}
