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
-- AND, OR, IN, NOT IN
-- müsterinin ülkesi Almanya veya Amerika olanlar
SELECT * FROM customers WHERE Country='USA' OR Country='Germany';
-- veya IN ile yazabiliriz
SELECT * FROM customers WHERE Country IN ('USA', 'Germany');
SELECT * FROM customers WHERE Country NOT IN ('USA', 'Germany'); -- bu iki ülke disindakiler
SELECT * FROM customers WHERE Country!='USA' AND Country!='Germany';
-- Fatura tutari 5 ile 10 arasinda olanlar
SELECT * FROM invoices WHERE total>=5.94 AND total<=10;
SELECT * FROM invoices WHERE total BETWEEN 5.94 AND 10;

-- like %, _
-- ismi a ile baslayan müsteriler
SELECT * FROM customers WHERE FirstName LIKE 'b%';
-- ismi s ile biten müsteriler
SELECT * FROM customers WHERE FirstName LIKE '%s';
SELECT * FROM customers WHERE FirstName LIKE '1%s'; -- L ile baslasin s ile bitsin
SELECT * FROM customers WHERE FirstName LIKE '1_c%';
SELECT * FROM customers WHERE FirstName LIKE '1_c_';

-- ORDER BY SIRALAMA (ASC, DESC)
SELECT * FROM customers ORDER BY FirstName ASC;
SELECT * FROM customers ORDER BY FirstName DESC;
SELECT * FROM customers ORDER BY FirstName; -- default ASC
SELECT * FROM customers ORDER BY FirstName,LastName DESC;

-- DISTINCT
-- her ülkeyi tek bir defa getir
SELECT DISTINCT(Country) FROM customers;
-- count
-- kac farkli ülkeden müsterim var
SELECT Count (DISTINCT(Country)) FROM customers;
