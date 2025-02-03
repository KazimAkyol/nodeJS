-- Tek satirlik yorum
/*
Multiline comment
*/
-- SQL BNF form
-- artist tablosunda neler var

-- SELECT fieldname FROM tablename;
SELECT * FROM artists; -- tüm sütunlar
SELECT Name FROM artists;

-- Müsterilerin tüm bilgisi
SELECT * FROM customers
-- Müsterilerin sadece adi soyadi bilgisi
SELECT FirstName, LastName FROM customers;

-- as ifadesi
SELECT FirstName as adi, LastName as soyadi FROM customers as müsteriler;
SELECT FirstName as adi, LastName as soyadi FROM customers as müsteriler;

-- WHERE şart ifadesi
-- SELECT fields FROM table WHERE şart ifadesi
-- sadece berlin'deki müsteri bilgileri
-- şart ifadesi icinde case sensitive
SELECT * FROM customers WHERE city='berlin'; -- sonuc getirmez

SELECT * FROM customers WHERE city='Berlin'; -- sonuc getirir

-- BNF Form
SELECT *
FROM customers
WHERE city='Berlin';

-- =, !=, <>, >=, <=, BETWEEN
-- Amerika disindaki müsteriler
SELECT * FROM customers WHERE Country!='USA';
