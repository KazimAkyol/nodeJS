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
-- ortalama sürenin üzerindeki track'lar
-- ortalama süre
SELECT avg(Milliseconds) FROM tracks;

SELECT * FROM tracks WHERE Milliseconds>400000;
SELECT * FROM tracks WHERE Milliseconds>(SELECT avg(Milliseconds) FROM tracks);

-- ortalama faturadan yüksek olan fatura sayisi
SELECT avg(total) FROM invoices;
SELECT * FROM invoices WHERE total>(SELECT avg(total) FROM invoices);
SELECT count(*) FROM invoices WHERE total(SELECT avg(total) FROM invoices);

SELECT *
FROM invoices
WHERE total>(SELECT avg(total) FROM invoices);
--WHERE total>10;

-- 'Go Down' müzik parcasi hangi albümde
SELECT * FROM tracks WHERE Name='Go Down';
SELECT AlbumId from albums WHERE Name='Go Down';
SELECT * FROM albums WHERE AlbumId=(SELECT AlbumId FROM tracks WHERE Name='Go Down');

-- 'Let There Be Rock' albümünde hangi parcalar var
SELECT * FROM tracks WHERE AlbumId=4;
SELECT AlbumId FROM albums WHERE Title='Let There Be Rock';
SELECT *
FROM tracks
WHERE AlbumId=(SELECT AlbumId
               FROM albums
               WHERE Title='Let There Be Rock');

-- Berlin'de fatura kesilen müsterilerin ad,soyad ve telefonu
SELECT CustomerId FROM invoices WHERE BillingCity='Berlin';
SELECT * FROM customers WHERE CustomerId=38 or CustomerId=36;
--veya
SELECT * FROM customers WHERE CustomerId IN(38,36);

SELECT FirstName,LastName,Phone
FROM customers
WHERE CustomerId IN (SELECT CustomerId FROM invoices WHERE BillingCity='Berlin');

-- Amerika'daki müsterilerin sayisi
SELECT count(*) FROM customers WHERE Country='USA';
-- Amerika'daki fatura kesilen müsterilerin sayisi
SELECT count(*) FROM invoices WHERE BillingCountry='USA';
-- Amerika'daki fatura kesilen müsterilerin bilgileri
SELECT CustomerId FROM invoices WHERE BillingCountry='USA';
SELECT *
FROM customers
WHERE CustomerId IN(SELECT CustomerId
                    FROM invoices
                    WHERE BillingCountry='USA');

-- JOIN
-- INNER JOIN
-- hangi albüm hangi artiste ait

SELECT *
FROM albums
JOIN artists ON albums.ArtistId=artist.ArtistId;

SELECT *
FROM artists
INNER JOIN albums ON artists.ArtistId=albums.ArtistId;

SELECT *
FROM artists
LEFT JOIN albums ON artists.ArtistId=albums.ArtistId;

--hangi fatura kime ait
SELECT *
FROM invoices
JOIN customers
ON invoices.CustomerId=CustomerId;

SELECT invoices.InvoiceId,invoices.Total,customers.FirstName,customers.LastName
FROM customers
LEFT JOIN invoices
ON customers.CustomerId=invoices.CustomerId ORDER BY InvoiceId;

-- her bir müzik parcasinin adi ve türü
SELECT tracks.Name,tracks.GenreId,genres.GenreId,genres.Name
FROM tracks
JOIN genres
ON tracks.GenreId=genres.GenreId;

-- müzik parcasinin adi,türü hangi albüme ait oldugu ve hangi medya türünde oldugunu getirin
SELECT tracks.Name,genres.Name,media_types.Name
FROM tracks
JOIN genres ON tracks.GenreId=genres.GenreId
JOIN media_types ON tracks.MediaTypeId=media_types.MediaTypeId;

-- Examples
-- müsterilerden mail domain'i apple olanlar
SELECT * FROM customers WHERE Email like '%apple%';
-- Almanya'da kac müsteri var
SELECT count(*) FROM customers WHERE Country='Germany';
-- kac farkli ülkeden müsterim var
SELECT count(DISTINCT(Country)) as müsteriOlanÜlkeSayisi FROM customers;

-- GROUP BY
-- hangi ülkeden kac adet müsterim var
SELECT Country, count(*) FROM customers GROUP BY Country;

-- hangi müsteriye kac adet fatura kesildi
SELECT invoices.CustomerId,customers.FirstName,count(*)
FROM invoices
JOIN customers
ON invoices.CustomerId=customers.CustomerId GROUP BY invoices.CustomerId;