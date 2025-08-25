package com.sdinvoiceprocessing.server.dao;

import com.sdinvoiceprocessing.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {

}
