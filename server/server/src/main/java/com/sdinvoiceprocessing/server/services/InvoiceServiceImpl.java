package com.sdinvoiceprocessing.server.services;

import com.sdinvoiceprocessing.server.dao.InvoiceDao;
import com.sdinvoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).orElseThrow(() -> new RuntimeException("Invoice not found with id: " + id));
        invoiceDao.delete(invoice);
        return invoice;
    }
    @Override
    public Invoice markDone(long id) {
        Invoice invoice = invoiceDao.findById(id).orElseThrow(() -> new RuntimeException("Invoice not found"));
        invoice.setAction("Done");
        return invoiceDao.save(invoice);
    }
}
