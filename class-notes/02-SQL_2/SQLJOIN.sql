-- MIN, MAX, AVG, SUM, COUNT, tek bir deger döndürür
-- En düsük fatura tutari
SELECT min(total) as en_dusuk_fatura FROM invoices;
SELECT max(total) as en_yuksek_fatura FROM invoices;
SELECT avg(total) as en_ortalama_fatura FROM invoices;
SELECT round(avg(total),2) as en_ortalama_fatura FORM invoices;
SELECT round(5.5) as en_ortalama_fatura FROM invoices;
SELECT sum(total) as toplam_fatura FROM invoices;
SELECT count(total) as kesilen_fatura_sayisi FROM invoices;
SELECT min(total),max(total),avg(total),sum(total),count(total) FROM invoices;
-- customer id kimin icin ?
SELECT CustomerId,min(total),max(total),avg(total),sum(total),count(total) FROM invoices;
-- eger ayni miktarda baska fatura varsa en üstteki gelir
SELECT CustomerId, min(total) as en_dusuk_fatura FROM invoices;

-- SUB QUERY (nested)